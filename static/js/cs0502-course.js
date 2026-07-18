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
    if (!button) return;

    function activePrompt() {
      return root.querySelector('[data-language-content="prompt"]:not([hidden]) .cs0502-starter-prompt');
    }

    function copyLabel() {
      const prompt = activePrompt();
      return prompt && prompt.closest('[data-language="zh"]') ? '复制提示词' : 'Copy prompt';
    }

    let resetTimer = null;
    button.addEventListener('click', function() {
      const prompt = activePrompt();
      if (!prompt) return;
      copyText(prompt.textContent.trim()).then(function() {
        button.classList.add('is-copied');
        button.querySelector('[data-copy-label]').textContent = prompt.closest('[data-language="zh"]') ? '已复制' : 'Copied';
        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(function() {
          button.classList.remove('is-copied');
          button.querySelector('[data-copy-label]').textContent = copyLabel();
        }, 1800);
      }).catch(function() {
        button.querySelector('[data-copy-label]').textContent = prompt.closest('[data-language="zh"]') ? '复制失败' : 'Copy failed';
      });
    });
  }

  function initLanguageSwitchers(root) {
    root.querySelectorAll('[data-language-switcher]').forEach(function(switcher) {
      const target = switcher.dataset.languageTarget;
      const buttons = Array.from(switcher.querySelectorAll('[data-language]'));
      const contents = Array.from(root.querySelectorAll('[data-language-content="' + target + '"]'));
      if (!target || !buttons.length || !contents.length) return;

      function selectLanguage(language) {
        buttons.forEach(function(button) {
          const selected = button.dataset.language === language;
          button.classList.toggle('is-active', selected);
          button.setAttribute('aria-pressed', String(selected));
        });
        contents.forEach(function(content) {
          content.hidden = content.dataset.language !== language;
        });
        if (target === 'prompt') {
          const copyButton = root.querySelector('[data-copy-prompt]');
          const copyLabel = root.querySelector('[data-copy-label]');
          const promptLabel = root.querySelector('[data-prompt-heading="label"]');
          const promptTitle = root.querySelector('[data-prompt-heading="title"]');
          const promptNote = root.querySelector('[data-prompt-note]');
          if (promptLabel) promptLabel.textContent = language === 'zh' ? 'Agent 提示词' : 'Agent starter prompt';
          if (promptTitle) promptTitle.textContent = language === 'zh' ? '把这段提示词交给你的 coding agent' : 'Give this prompt to your coding agent';
          if (promptNote) promptNote.textContent = language === 'zh'
            ? '使用完整提示词作为起点，与 coding agent 多轮对话、测试并解释你最终完成的实现。'
            : 'Use this full prompt as a starting point, continue the conversation with your coding agent, then test and explain the implementation you produce.';
          if (copyLabel && (!copyButton || !copyButton.classList.contains('is-copied'))) {
            copyLabel.textContent = language === 'zh' ? '复制提示词' : 'Copy prompt';
          }
        }
        if (target === 'requirements') {
          const requirementsLabel = root.querySelector('[data-requirements-heading="label"]');
          const requirementsTitle = root.querySelector('[data-requirements-heading="title"]');
          if (requirementsLabel) requirementsLabel.textContent = language === 'zh' ? '项目任务' : 'Project task';
          if (requirementsTitle) requirementsTitle.textContent = language === 'zh' ? '提交内容' : 'What to submit';
        }
      }

      buttons.forEach(function(button) {
        button.addEventListener('click', function() {
          selectLanguage(button.dataset.language);
        });
      });
    });
  }

  window.initCS0502Course = function() {
    const root = document.querySelector('.course-page');
    if (!root || root.dataset.cs0502Initialized === 'true') return;
    root.dataset.cs0502Initialized = 'true';
    initLanguageSwitchers(root);
    initCopyPrompt(root);
  };
})();
