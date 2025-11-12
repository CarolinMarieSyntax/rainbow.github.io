(() => {
  const SPOTLIGHT_RADIUS = 320;
  const PROXIMITY = SPOTLIGHT_RADIUS * 0.45;
  const FADE_DISTANCE = SPOTLIGHT_RADIUS;

  const lerp = (start, end, t) => start + (end - start) * t;

  const updateKeyGlow = (keys, clientX, clientY) => {
    requestAnimationFrame(() => {
      keys.forEach(key => {
        const rect = key.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(clientX - centerX, clientY - centerY);

        let intensity = 0;
        if (distance <= PROXIMITY) {
          intensity = 1;
        } else if (distance <= FADE_DISTANCE) {
          intensity = (FADE_DISTANCE - distance) / (FADE_DISTANCE - PROXIMITY);
        }

        const relativeX = ((clientX - rect.left) / rect.width) * 100;
        const relativeY = ((clientY - rect.top) / rect.height) * 100;

        key.style.setProperty('--glow-intensity', intensity.toFixed(3));
        key.style.setProperty('--glow-x', `${relativeX}%`);
        key.style.setProperty('--glow-y', `${relativeY}%`);
        key.style.setProperty('--glow-radius', `${SPOTLIGHT_RADIUS}px`);
      });
    });
  };

  const resetKeyGlow = keys => {
    keys.forEach(key => {
      key.style.setProperty('--glow-intensity', '0');
    });
  };

  const initSpotlight = container => {
    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    document.body.appendChild(spotlight);
    return spotlight;
  };

  const initMagicXylophone = () => {
    const container = document.querySelector('.xylophone-container');
    if (!container) return;

    const keys = Array.from(container.querySelectorAll('.xylophone-key'));
    if (keys.length === 0) return;

    const spotlight = initSpotlight(container);

    const handleMouseMove = event => {
      const rect = container.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!inside) {
        spotlight.style.opacity = '0';
        resetKeyGlow(keys);
        return;
      }

      spotlight.style.opacity = '0.85';
      spotlight.style.left = `${event.clientX}px`;
      spotlight.style.top = `${event.clientY}px`;

      updateKeyGlow(keys, event.clientX, event.clientY);
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = '0';
      resetKeyGlow(keys);
    };

    document.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
  };

  if (document.readyState !== 'loading') {
    initMagicXylophone();
  } else {
    document.addEventListener('DOMContentLoaded', initMagicXylophone);
  }

  document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    const keyElement = document.querySelector(`.xylophone-key[data-key="${key}"], .xylophone-key[data-key="${event.key}"]`);
    if (!keyElement) return;
    keyElement.classList.add('pressed-glow');
  });

  document.addEventListener('keyup', event => {
    const key = event.key.toLowerCase();
    const keyElement = document.querySelector(`.xylophone-key[data-key="${key}"], .xylophone-key[data-key="${event.key}"]`);
    if (!keyElement) return;
    keyElement.classList.remove('pressed-glow');
  });
})();

