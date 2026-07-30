(function() {
  const featuredResults = [
    {
      title: 'LUCID Nighttime Restoration',
      venue: 'SIGGRAPH 2026',
      caption: 'Controllable nighttime deflaring and exposure control from a single image.',
      mediaType: 'video',
      media: './projects/LUCID_fig/video_lucid.mp4',
      poster: './projects/LUCID_fig/teaser.png',
      href: './index.html?project=lucid'
    },
    {
      title: 'SkinSight Wearable Vision',
      venue: 'Nature Communications 2026',
      caption: 'A skin-conformal visual array enables augmented visual sensing on the palm.',
      mediaType: 'video',
      media: './projects/SkinSight_fig/Movie/skinsight.mp4',
      poster: './projects/SkinSight_fig/skinsight_cover_wide.png',
      href: './index.html?project=SkinSight'
    },
    {
      title: 'Functional Photoacoustic Brain Imaging',
      venue: 'Nature Biomedical Engineering 2022',
      caption: 'Massively parallel photoacoustic tomography captures human brain function.',
      mediaType: 'video',
      media: 'https://github.com/yuanxy92/yuanxy92.github.io/raw/refs/heads/master/videos/PACT/Comparisons_fPACT_fMRI.mp4',
      poster: './projects/PACT_fig/teaser.webp',
      href: './index.html?project=brainpact'
    },
    {
      title: 'Gigapixel Interactive Videography',
      venue: 'Light: Science & Applications 2021',
      caption: 'A modular camera array enables wide-field capture with zoom-in detail inspection.',
      mediaType: 'video',
      media: 'https://github.com/yuanxy92/yuanxy92.github.io/raw/refs/heads/master/videos/gigapixel/realtime_demo.mp4',
      poster: './projects/Gigapixel_fig/light_teaser2.jpg',
      href: './index.html?project=unstructuredcam'
    },
    {
      title: 'Mobile Thermal Imaging',
      venue: 'CVPR 2026 / arXiv 2026',
      caption: '3M-TI and BeyondFusion advance calibration-free RGB-thermal mobile perception.',
      mediaType: 'image',
      media: './projects/3MTI_fig/fig_abs.jpg',
      href: './index.html?project=3m-ti'
    },
    {
      title: 'Tunable Metalens Photography',
      venue: 'ICCV 2025',
      caption: 'A tunable reconstruction algorithm balances fidelity and sharpness for severely degraded compact metalens images.',
      mediaType: 'image',
      media: './projects/DMDiff_fig/images/teaser.jpg',
      href: './index.html?project=dmdiff'
    }
  ];

  let featuredTimer = null;

  function featuredMediaMarkup(item, index) {
    if (item.mediaType === 'video') {
      return `
        ${item.poster ? `<img class="featured-video-poster" src="${item.poster}" alt="${item.title} video preview">` : ''}
        <video data-featured-media-index="${index}" controls muted playsinline preload="metadata">
          <source src="${item.media}" type="video/mp4">
        </video>
        <button class="featured-play-button" type="button" data-featured-play-index="${index}" aria-label="Play ${item.title}">
          <i class="fas fa-play" aria-hidden="true"></i>
        </button>
      `;
    }

    return `<img src="${item.media}" alt="${item.title} featured result">`;
  }

  function featuredResultSlide(item, index) {
    if (item.mediaType === 'video') {
      return `
        <article class="featured-slide" aria-label="${item.title}">
          <div class="featured-card featured-card-video">
            <div class="featured-media">
              ${featuredMediaMarkup(item, index)}
            </div>
            <a class="featured-caption" href="${item.href}" data-featured-link="${index}">
              <span class="featured-caption-main">
                <span class="featured-venue">${item.venue}</span>
                <strong>${item.title}</strong>
              </span>
              <p>${item.caption}</p>
            </a>
          </div>
        </article>
      `;
    }

    return `
      <article class="featured-slide" aria-label="${item.title}">
        <a class="featured-card" href="${item.href}" data-featured-link="${index}">
          <div class="featured-media">
            ${featuredMediaMarkup(item, index)}
          </div>
          <div class="featured-caption">
            <span class="featured-caption-main">
              <span class="featured-venue">${item.venue}</span>
              <strong>${item.title}</strong>
            </span>
            <p>${item.caption}</p>
          </div>
        </a>
      </article>
    `;
  }

  function featuredResultsMarkup() {
    return `
      <section class="featured-results" aria-label="Research highlights">
        <div class="featured-heading">
          <h2>Research Highlights</h2>
        </div>
        <div class="featured-carousel">
          <button class="featured-control featured-prev" type="button" aria-label="Previous featured result">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
          </button>
          <div class="featured-viewport">
            <div class="featured-track">
              ${featuredResults.map(featuredResultSlide).join('')}
            </div>
          </div>
          <button class="featured-control featured-next" type="button" aria-label="Next featured result">
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
        <div class="featured-dots" aria-label="Featured result navigation">
          ${featuredResults.map(function(item, index) {
            return `<button type="button" data-featured-dot="${index}" aria-label="Show ${item.title}"></button>`;
          }).join('')}
        </div>
      </section>
    `;
  }

  function initFeaturedResults() {
    if (featuredTimer) {
      window.clearTimeout(featuredTimer);
      featuredTimer = null;
    }

    const section = document.querySelector('.featured-results');
    if (!section) {
      return;
    }

    const track = section.querySelector('.featured-track');
    const dots = Array.from(section.querySelectorAll('[data-featured-dot]'));
    const prev = section.querySelector('.featured-prev');
    const next = section.querySelector('.featured-next');
    const videos = Array.from(section.querySelectorAll('video'));
    const playButtons = Array.from(section.querySelectorAll('[data-featured-play-index]'));
    let activeIndex = 0;

    function clearTimer() {
      if (featuredTimer) {
        window.clearTimeout(featuredTimer);
        featuredTimer = null;
      }
    }

    function isVideoPlaying() {
      return videos.some(function(video) {
        return !video.paused && !video.ended;
      });
    }

    function updateFeatured(index) {
      activeIndex = (index + featuredResults.length) % featuredResults.length;
      track.style.transform = `translateX(${-100 * activeIndex}%)`;
      dots.forEach(function(dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === activeIndex);
        dot.setAttribute('aria-current', dotIndex === activeIndex ? 'true' : 'false');
      });
      videos.forEach(function(video) {
        if (Number(video.dataset.featuredMediaIndex) !== activeIndex) {
          video.pause();
        }
      });
    }

    function restartTimer() {
      clearTimer();
      if (isVideoPlaying()) {
        return;
      }
      featuredTimer = window.setTimeout(function() {
        if (isVideoPlaying()) {
          clearTimer();
          return;
        }
        updateFeatured(activeIndex + 1);
        restartTimer();
      }, 5000);
    }

    prev.addEventListener('click', function() {
      updateFeatured(activeIndex - 1);
      restartTimer();
    });
    next.addEventListener('click', function() {
      updateFeatured(activeIndex + 1);
      restartTimer();
    });
    dots.forEach(function(dot) {
      dot.addEventListener('click', function() {
        updateFeatured(Number(dot.dataset.featuredDot));
        restartTimer();
      });
    });
    playButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        const video = section.querySelector(`video[data-featured-media-index="${button.dataset.featuredPlayIndex}"]`);
        if (!video) {
          return;
        }
        if (video.paused || video.ended) {
          clearTimer();
          video.play().catch(function() {
            restartTimer();
          });
        } else {
          video.pause();
        }
      });
    });
    videos.forEach(function(video) {
      video.addEventListener('play', function() {
        video.closest('.featured-media')?.classList.add('is-playing');
        clearTimer();
      });
      video.addEventListener('pause', function() {
        video.closest('.featured-media')?.classList.remove('is-playing');
        restartTimer();
      });
      video.addEventListener('ended', function() {
        video.closest('.featured-media')?.classList.remove('is-playing');
        restartTimer();
      });
    });

    updateFeatured(0);
    restartTimer();
  }

  window.featuredResultsMarkup = featuredResultsMarkup;
  window.initFeaturedResults = initFeaturedResults;
})();
