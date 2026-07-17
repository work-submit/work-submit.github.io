(function() {
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function(resolve, reject) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand('copy');
        resolve();
      } catch (error) {
        reject(error);
      } finally {
        textarea.remove();
      }
    });
  }

  function initCopyPrompt(root) {
    const button = root.querySelector('[data-copy-prompt]');
    const prompt = root.querySelector('#cs0502-starter-prompt');
    if (!button || !prompt) return;

    let resetTimer = null;
    button.addEventListener('click', function() {
      copyText(prompt.textContent.trim()).then(function() {
        button.classList.add('is-copied');
        button.querySelector('[data-copy-label]').textContent = 'Copied';
        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(function() {
          button.classList.remove('is-copied');
          button.querySelector('[data-copy-label]').textContent = 'Copy prompt';
        }, 1800);
      }).catch(function() {
        button.querySelector('[data-copy-label]').textContent = 'Copy failed';
      });
    });
  }

  window.initCS0502Course = function() {
    const root = document.querySelector('.course-page');
    if (!root || root.dataset.cs0502Initialized === 'true') return;
    root.dataset.cs0502Initialized = 'true';
    initCopyPrompt(root);
  };
})();
