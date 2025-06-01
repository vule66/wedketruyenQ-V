 // Audio Player JavaScript
    let isPlaying = false;
    let currentSentenceIndex = 0;
    let currentWordIndex = 0;
    let utterance = null;
    let storyData = null;
    let audioStartTime = 0;
    let audioTimer = null;
    let currentSpeed = 1;
    let currentVoice = null;
    let synth = window.speechSynthesis;
    let pendingSpeed = null;
    let elapsedTime = 0; // Thêm biến mới
    let isPaused = false; // Thêm biến mới

    function initializeAudioFeature() {
      if (document.querySelector('.audio-bubble')) return;
      const audioBubble = document.createElement('div');
      audioBubble.className = 'audio-bubble';
      audioBubble.innerHTML = '<i class="bi bi-volume-up"></i>';
      document.body.appendChild(audioBubble);
      const audioControls = document.createElement('div');
      audioControls.className = 'audio-controls';
      audioControls.innerHTML = `
        <div class="title">Nghe Truyện</div>
        <button id="audioPlayPause" title="Phát/Tạm dừng"><i class="bi bi-play-fill"></i></button>
        <div class="audio-progress">
          <div class="audio-progress-bar"></div>
        </div>
        <div class="speed-slider-container">
          <label for="speedSlider">Tốc độ: </label>
          <input type="range" id="speedSlider" min="0.5" max="2" step="0.1" value="1">
          <span class="speed-value">1x</span>
        </div>
      `;
      document.body.appendChild(audioControls);
      const listenButton = document.querySelector('.bookmark button');
      if (listenButton) {
        listenButton.innerHTML = '<i class="bi bi-volume-up"></i> Nghe Truyện';
        listenButton.addEventListener('click', toggleAudioNarration);
      }
      setupAudioEvents();
      loadVoices();
    }

    function loadVoices() {
      if (synth.getVoices().length > 0) {
        findVietnameseVoice();
      } else {
        synth.addEventListener('voiceschanged', findVietnameseVoice);
      }
    }

    function findVietnameseVoice() {
      const voices = synth.getVoices();
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].lang === 'vi-VN') {
          currentVoice = voices[i];
          console.log('Đã tìm thấy giọng tiếng Việt: ' + voices[i].name);
          return;
        }
      }
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].lang.startsWith('vi')) {
          currentVoice = voices[i];
          console.log('Đã tìm thấy giọng gần với tiếng Việt: ' + voices[i].name);
          return;
        }
      }
      console.log('Không tìm thấy giọng tiếng Việt, dùng giọng mặc định');
    }

   function prepareStoryContent() {
  const storyContentElement = document.getElementById('storyContent');
  if (!storyContentElement) {
    console.error('Không tìm thấy phần tử với id="storyContent"');
    return { sentences: [], sentenceElements: [], words: [], wordElements: [] };
  }
  const paragraphs = storyContentElement.querySelectorAll('p');
  let sentences = [];
  let sentenceElements = [];
  let words = [];
  let wordElements = [];

  paragraphs.forEach(paragraph => {
    // Lấy nội dung HTML gốc
    const originalHTML = paragraph.innerHTML;
    // Tạo một div tạm để xử lý HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = originalHTML;

    // Tách câu dựa trên text nodes và xử lý <br>
    let currentSentence = '';
    let sentenceElement = null;
    let sentenceWordElements = [];
    let nodeIndex = 0;

    function processNode(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent.replace(/\s+/g, ' ').trim();
        if (text) {
          const rawSentences = text.split(/(?<=[.!?])\s+/g);
          rawSentences.forEach((sentence, sIndex) => {
            if (sentence.trim()) {
              sentenceElement = document.createElement('span');
              sentenceElement.className = 'sentence';
              sentenceElement.dataset.index = sentences.length;

              const sentenceWords = sentence.trim().split(/\s+/);
              sentenceWordElements = [];
              sentenceWords.forEach((word, wIndex) => {
                if (word.trim()) {
                  const wordElement = document.createElement('span');
                  wordElement.className = 'word';
                  wordElement.dataset.sentenceIndex = sentences.length;
                  wordElement.dataset.wordIndex = words.length;
                  wordElement.textContent = word + ' ';
                  sentenceElement.appendChild(wordElement);
                  words.push(word);
                  sentenceWordElements.push(wordElement);
                }
              });

              sentences.push(sentence);
              sentenceElements.push(sentenceElement);
              wordElements.push(sentenceWordElements);
              tempDiv.insertBefore(sentenceElement, node);
              if (sIndex < rawSentences.length - 1) {
                tempDiv.insertBefore(document.createTextNode(' '), node);
              }
            }
          });
          node.remove(); // Xóa text node gốc sau khi xử lý
        }
      } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'BR') {
        // Giữ nguyên thẻ <br>
        return;
      }
      // Đệ quy xử lý các node con
      Array.from(node.childNodes).forEach(child => processNode(child));
    }

    Array.from(tempDiv.childNodes).forEach(node => processNode(node));

    // Ghi lại nội dung đã xử lý vào paragraph
    paragraph.innerHTML = tempDiv.innerHTML;
  });

  return { sentences, sentenceElements, words, wordElements };
}

    function setupAudioEvents() {
      const audioBubble = document.querySelector('.audio-bubble');
      const audioControls = document.querySelector('.audio-controls');
      const playPauseBtn = document.getElementById('audioPlayPause');
      const progressContainer = document.querySelector('.audio-progress');
      const speedSlider = document.getElementById('speedSlider');
      const speedValue = document.querySelector('.speed-value');
      audioBubble.addEventListener('click', () => {
        audioControls.classList.toggle('visible');
      });
      playPauseBtn.addEventListener('click', togglePlayPause);
      speedSlider.addEventListener('input', (e) => {
        const speed = parseFloat(e.target.value);
        speedValue.textContent = `${speed.toFixed(1)}x`;
        pendingSpeed = speed;
      });
      progressContainer.addEventListener('click', function(e) {
        if (!storyData || !storyData.sentences.length) return;
        const rect = this.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const sentenceIndex = Math.floor(percent * storyData.sentences.length);
        currentSentenceIndex = Math.max(0, Math.min(sentenceIndex, storyData.sentences.length - 1));
        currentWordIndex = 0;
        if (isPlaying) {
          speakSentence(currentSentenceIndex);
        } else {
          highlightWord(currentSentenceIndex, currentWordIndex);
        }
      });
    }

    function toggleAudioNarration() {
      const audioBubble = document.querySelector('.audio-bubble');
      if (audioBubble.classList.contains('active')) {
        stopAudio();
        audioBubble.classList.remove('active');
        document.querySelector('.audio-controls').classList.remove('visible');
      } else {
        audioBubble.classList.add('active');
        document.querySelector('.audio-controls').classList.add('visible');
        if (!storyData) {
          storyData = prepareStoryContent();
        }
        if (!isPlaying) {
          togglePlayPause();
        }
      }
    }

    function togglePlayPause() {
      const playPauseBtn = document.getElementById('audioPlayPause');
      const audioBubble = document.querySelector('.audio-bubble');
      if (isPlaying) {
        synth.pause();
        clearInterval(audioTimer);
        playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
        audioBubble.classList.remove('playing');
        isPlaying = false;
      } else {
        if (!storyData) {
          storyData = prepareStoryContent();
          if (!storyData.sentences.length) {
            console.error('Không tìm thấy nội dung truyện để đọc');
            return;
          }
        }
        if (synth.paused) {
          synth.resume();
          startProgressTimer();
        } else {
          speakSentence(currentSentenceIndex);
        }
        playPauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
        audioBubble.classList.add('playing');
        isPlaying = true;
      }
    }

    function stopAudio() {
      synth.cancel();
      clearInterval(audioTimer);
      document.getElementById('audioPlayPause').innerHTML = '<i class="bi bi-play-fill"></i>';
      document.querySelector('.audio-bubble').classList.remove('playing');
      document.querySelector('.audio-progress-bar').style.width = '0%';
      if (storyData && storyData.wordElements) {
        storyData.wordElements.forEach(sentenceWords => {
          sentenceWords.forEach(wordEl => wordEl.classList.remove('word-highlight'));
        });
      }
      isPlaying = false;
      currentSentenceIndex = 0;
      currentWordIndex = 0;
      pendingSpeed = null;
    }

   function highlightWord(sentenceIndex, wordIndex) {
  if (storyData && storyData.wordElements) {
    storyData.wordElements.forEach((sentenceWords, sIndex) => {
      sentenceWords.forEach((wordEl, wIndex) => {
        wordEl.classList.remove('word-highlight');
        if (sIndex === sentenceIndex && wIndex === wordIndex) {
          wordEl.classList.add('word-highlight');
          scrollToElement(wordEl);
          console.log(`Highlighting word: ${wordEl.textContent} at sentence ${sentenceIndex}, word ${wordIndex}`);
        }
      });
    });
  } else {
    console.error('storyData hoặc wordElements không tồn tại');
  }
}

   function speakSentence(sentenceIndex, startTime = 0) {
  if (!storyData || !storyData.sentences[sentenceIndex]) return;
  synth.cancel();
  const text = storyData.sentences[sentenceIndex].trim();
  utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN';
  utterance.rate = currentSpeed;
  if (currentVoice) {
    utterance.voice = currentVoice;
  }
  const words = storyData.wordElements[sentenceIndex];
  let wordTimings = [];
  let totalDuration = 0;
  storyData.words.forEach((word, i) => {
    if (storyData.wordElements[sentenceIndex].some(el => el.dataset.wordIndex == i)) {
      let wordDuration = (word.length * 90 / 1000) / currentSpeed;
      if (word.match(/[,.!?]$/)) {
        wordDuration += (word.match(/,/) ? 0.3 : 0.5) / currentSpeed;
      }
      wordTimings.push({ index: i, start: totalDuration, duration: wordDuration });
      totalDuration += wordDuration;
    }
  });
  console.log('Word timings for sentence', sentenceIndex, ':', wordTimings); // Debug
  let currentWord = 0;
  audioStartTime = new Date().getTime() - startTime * 1000;
  const highlightInterval = setInterval(() => {
    if (!isPlaying) {
      clearInterval(highlightInterval);
      return;
    }
    const elapsed = (new Date().getTime() - audioStartTime) / 1000;
    elapsedTime = elapsed;
    while (currentWord < wordTimings.length && elapsed >= wordTimings[currentWord].start) {
      const wordEl = words.find(el => el.dataset.wordIndex == wordTimings[currentWord].index);
      if (wordEl) {
        highlightWord(sentenceIndex, words.indexOf(wordEl));
        currentWordIndex = words.indexOf(wordEl);
      }
      currentWord++;
    }
    if (currentWord >= wordTimings.length) {
      clearInterval(highlightInterval);
    }
  }, 50);
  utterance.onend = function() {
    clearInterval(highlightInterval);
    elapsedTime = 0;
    if (isPlaying && storyData && currentSentenceIndex < storyData.sentences.length - 1) {
      currentSentenceIndex++;
      currentWordIndex = 0;
      if (pendingSpeed !== null) {
        currentSpeed = pendingSpeed;
        pendingSpeed = null;
        document.querySelector('.speed-value').textContent = `${currentSpeed.toFixed(1)}x`;
      }
      speakSentence(currentSentenceIndex);
    } else {
      stopAudio();
    }
  };
  utterance.onerror = function(event) {
    console.error('Lỗi phát âm thanh:', event.error);
    setTimeout(() => {
      if (isPlaying) speakSentence(sentenceIndex, elapsedTime);
    }, 1000);
  };
  const estimatedDuration = Math.max(2, totalDuration);
  synth.speak(utterance);
  startProgressTimer(estimatedDuration);
}

    function startProgressTimer(duration) {
      clearInterval(audioTimer);
      const progressBar = document.querySelector('.audio-progress-bar');
      const startTime = new Date().getTime();
      let elapsed = 0;
      audioTimer = setInterval(() => {
        if (!isPlaying) {
          clearInterval(audioTimer);
          return;
        }
        elapsed = (new Date().getTime() - startTime) / 1000;
        const progressPercent = (duration > 0) ? (elapsed / duration) * 100 : 0;
        progressBar.style.width = Math.min(progressPercent, 100) + '%';
        if (elapsed >= duration) {
          clearInterval(audioTimer);
        }
      }, 100);
    }

    function scrollToElement(element) {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      if (!isInViewport) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    function loadBootstrapIcons() {
      if (!document.querySelector('link[href*="bootstrap-icons"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css';
        document.head.appendChild(link);
      }
    }

    function createListenButton() {
      if (!document.querySelector('.bookmark button')) {
        const storyContent = document.getElementById('storyContent');
        if (storyContent) {
          const bookmarkDiv = document.querySelector('.bookmark') || document.createElement('div');
          if (!document.querySelector('.bookmark')) {
            bookmarkDiv.className = 'bookmark';
            storyContent.parentNode.insertBefore(bookmarkDiv, storyContent);
          }
          const listenButton = document.createElement('button');
          listenButton.innerHTML = '<i class="bi bi-volume-up"></i> Nghe Truyện';
          listenButton.addEventListener('click', toggleAudioNarration);
          bookmarkDiv.appendChild(listenButton);
        }
      }
    }

    function init() {
      loadBootstrapIcons();
      createListenButton();
      initializeAudioFeature();
      window.addEventListener('beforeunload', function() {
        if (isPlaying) synth.cancel();
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }

    // Font Size and Dark Mode
    const storyContent = document.getElementById('storyContent');
    const fontSizeValue = document.getElementById('currentFontSize');
    let fontSize = 18;
    document.getElementById('increaseFont').addEventListener('click', function() {
      if (fontSize < 28) {
        fontSize += 2;
        updateFontSize();
      }
    });
    document.getElementById('decreaseFont').addEventListener('click', function() {
      if (fontSize > 12) {
        fontSize -= 2;
        updateFontSize();
      }
    });
    function updateFontSize() {
      storyContent.style.fontSize = fontSize + 'px';
      fontSizeValue.textContent = fontSize;
    }
    const toggleMode = document.getElementById('toggleMode');
    const body = document.body;
    toggleMode.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      const icon = this.querySelector('i');
      if (body.classList.contains('dark-mode')) {
        icon.classList.replace('bi-moon', 'bi-sun');
      } else {
        icon.classList.replace('bi-sun', 'bi-moon');
      }
    });
    document.addEventListener('DOMContentLoaded', function() {
      var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
      var dropdownList = dropdownElementList.map(function(dropdownToggleEl) {
        return new bootstrap.Dropdown(dropdownToggleEl);
      });
    });
    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }
    const storyId = getQueryParam('id');
    if (storyId) {
      console.log('Đang tải truyện có ID:', storyId);
    }