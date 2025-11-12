const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;

const cardData = [
  {
    color: '#060010',
    title: 'Analytics',
    description: 'Track user behavior',
    label: 'Insights'
  },
  {
    color: '#060010',
    title: 'Dashboard',
    description: 'Centralized data view',
    label: 'Overview'
  },
  {
    color: '#060010',
    title: 'Collaboration',
    description: 'Work together seamlessly',
    label: 'Teamwork'
  },
  {
    color: '#060010',
    title: 'Automation',
    description: 'Streamline workflows',
    label: 'Efficiency'
  },
  {
    color: '#060010',
    title: 'Integration',
    description: 'Connect favorite tools',
    label: 'Connectivity'
  },
  {
    color: '#060010',
    title: 'Security',
    description: 'Enterprise-grade protection',
    label: 'Protection'
  }
];

const config = {
  textAutoHide: true,
  enableStars: true,
  enableSpotlight: true,
  enableBorderGlow: true,
  disableAnimations: false,
  spotlightRadius: DEFAULT_SPOTLIGHT_RADIUS,
  particleCount: DEFAULT_PARTICLE_COUNT,
  enableTilt: true,
  glowColor: DEFAULT_GLOW_COLOR,
  clickEffect: true,
  enableMagnetism: true
};

const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = radius => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

const isMobileViewport = () => window.innerWidth <= MOBILE_BREAKPOINT;

const setupParticleCard = (card, options, shouldDisableAnimations) => {
  if (shouldDisableAnimations) {
    return;
  }

  const state = {
    card,
    memoizedParticles: [],
    particles: [],
    timeouts: [],
    particlesInitialized: false,
    magnetismAnimation: null,
    isHovered: false
  };

  const initializeParticles = () => {
    if (state.particlesInitialized || !state.card) return;
    const { width, height } = state.card.getBoundingClientRect();
    state.memoizedParticles = Array.from({ length: options.particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, options.glowColor)
    );
    state.particlesInitialized = true;
  };

  const clearAllParticles = () => {
    state.timeouts.forEach(clearTimeout);
    state.timeouts = [];
    state.magnetismAnimation?.kill?.();

    state.particles.forEach(particle => {
      if (window.gsap) {
        gsap.to(particle, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'back.in(1.7)',
          onComplete: () => particle.remove()
        });
      } else {
        particle.remove();
      }
    });
    state.particles = [];
  };

  const animateParticles = () => {
    if (!state.card || !state.isHovered) return;
    if (!state.particlesInitialized) initializeParticles();

    state.memoizedParticles.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!state.isHovered || !state.card) return;

        const clone = particle.cloneNode(true);
        state.card.appendChild(clone);
        state.particles.push(clone);

        if (window.gsap) {
          gsap.fromTo(
            clone,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
          );

          gsap.to(clone, {
            x: (Math.random() - 0.5) * 100,
            y: (Math.random() - 0.5) * 100,
            rotation: Math.random() * 360,
            duration: 2 + Math.random() * 2,
            ease: 'none',
            repeat: -1,
            yoyo: true
          });

          gsap.to(clone, {
            opacity: 0.3,
            duration: 1.5,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true
          });
        }
      }, index * 120);

      state.timeouts.push(timeoutId);
    });
  };

  const handleMouseEnter = () => {
    state.isHovered = true;
    animateParticles();

    if (options.enableTilt && window.gsap) {
      gsap.to(state.card, {
        rotateX: 5,
        rotateY: 5,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 1000
      });
    }
  };

  const handleMouseLeave = () => {
    state.isHovered = false;
    clearAllParticles();

    if (options.enableTilt && window.gsap) {
      gsap.to(state.card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    if (options.enableMagnetism && window.gsap) {
      gsap.to(state.card, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseMove = event => {
    if (!options.enableTilt && !options.enableMagnetism) return;
    const rect = state.card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    if (options.enableTilt && window.gsap) {
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      gsap.to(state.card, {
        rotateX,
        rotateY,
        duration: 0.1,
        ease: 'power2.out',
        transformPerspective: 1000
      });
    }

    if (options.enableMagnetism && window.gsap) {
      const magnetX = (x - centerX) * 0.05;
      const magnetY = (y - centerY) * 0.05;
      state.magnetismAnimation = gsap.to(state.card, {
        x: magnetX,
        y: magnetY,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  const handleClick = event => {
    if (!options.clickEffect) return;
    if (!window.gsap) return;

    const rect = state.card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const maxDistance = Math.max(
      Math.hypot(x, y),
      Math.hypot(x - rect.width, y),
      Math.hypot(x, y - rect.height),
      Math.hypot(x - rect.width, y - rect.height)
    );

    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      width: ${maxDistance * 2}px;
      height: ${maxDistance * 2}px;
      border-radius: 50%;
      background: radial-gradient(circle,
        rgba(${options.glowColor}, 0.4) 0%,
        rgba(${options.glowColor}, 0.2) 30%,
        transparent 70%);
      left: ${x - maxDistance}px;
      top: ${y - maxDistance}px;
      pointer-events: none;
      z-index: 1000;
    `;

    state.card.appendChild(ripple);

    gsap.fromTo(
      ripple,
      { scale: 0, opacity: 1 },
      {
        scale: 1,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => ripple.remove()
      }
    );
  };

  card.addEventListener('mouseenter', handleMouseEnter);
  card.addEventListener('mouseleave', handleMouseLeave);
  card.addEventListener('mousemove', handleMouseMove);
  card.addEventListener('click', handleClick);
};

const setupBasicCard = (card, options, shouldDisableAnimations) => {
  if (shouldDisableAnimations) return;

  const handleMouseMove = event => {
    if (!options.enableTilt && !options.enableMagnetism) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    if (options.enableTilt && window.gsap) {
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.1,
        ease: 'power2.out',
        transformPerspective: 1000
      });
    }

    if (options.enableMagnetism && window.gsap) {
      const magnetX = (x - centerX) * 0.05;
      const magnetY = (y - centerY) * 0.05;
      gsap.to(card, {
        x: magnetX,
        y: magnetY,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseLeave = () => {
    if (options.enableTilt && window.gsap) {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    if (options.enableMagnetism && window.gsap) {
      gsap.to(card, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  card.addEventListener('mousemove', handleMouseMove);
  card.addEventListener('mouseleave', handleMouseLeave);

  if (options.clickEffect && window.gsap) {
    card.addEventListener('click', event => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle,
          rgba(${options.glowColor}, 0.4) 0%,
          rgba(${options.glowColor}, 0.2) 30%,
          transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;
      card.appendChild(ripple);
      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    });
  }
};

const setupGlobalSpotlight = (grid, options, shouldDisableAnimations) => {
  if (shouldDisableAnimations) return;
  if (!window.gsap) return;

  const spotlight = document.createElement('div');
  spotlight.className = 'global-spotlight';
  spotlight.style.cssText = `
    position: fixed;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    pointer-events: none;
    background: radial-gradient(circle,
      rgba(${options.glowColor}, 0.15) 0%,
      rgba(${options.glowColor}, 0.08) 15%,
      rgba(${options.glowColor}, 0.04) 25%,
      rgba(${options.glowColor}, 0.02) 40%,
      rgba(${options.glowColor}, 0.01) 65%,
      transparent 70%);
    z-index: 200;
    opacity: 0;
    transform: translate(-50%, -50%);
    mix-blend-mode: screen;
  `;

  document.body.appendChild(spotlight);

  const handleMouseMove = event => {
    const section = grid.closest('.bento-section');
    const rect = section?.getBoundingClientRect();
    const mouseInside =
      rect &&
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    const cards = grid.querySelectorAll('.magic-bento-card');

    if (!mouseInside) {
      cards.forEach(card => card.style.setProperty('--glow-intensity', '0'));
      gsap.to(spotlight, { opacity: 0, duration: 0.3, ease: 'power2.out' });
      return;
    }

    const { proximity, fadeDistance } = calculateSpotlightValues(options.spotlightRadius);
    let minDistance = Infinity;

    cards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const centerX = cardRect.left + cardRect.width / 2;
      const centerY = cardRect.top + cardRect.height / 2;
      const distance =
        Math.hypot(event.clientX - centerX, event.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
      const effectiveDistance = Math.max(0, distance);

      minDistance = Math.min(minDistance, effectiveDistance);

      let glowIntensity = 0;
      if (effectiveDistance <= proximity) {
        glowIntensity = 1;
      } else if (effectiveDistance <= fadeDistance) {
        glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
      }

      updateCardGlowProperties(card, event.clientX, event.clientY, glowIntensity, options.spotlightRadius);
    });

    const targetOpacity =
      minDistance <= proximity
        ? 0.8
        : minDistance <= fadeDistance
          ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
          : 0;

    gsap.to(spotlight, {
      left: event.clientX,
      top: event.clientY,
      opacity: targetOpacity,
      duration: targetOpacity > 0 ? 0.2 : 0.5,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    grid.querySelectorAll('.magic-bento-card').forEach(card => {
      card.style.setProperty('--glow-intensity', '0');
    });
    gsap.to(spotlight, { opacity: 0, duration: 0.3, ease: 'power2.out' });
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseleave', handleMouseLeave);
};

const renderCards = (grid, options, shouldDisableAnimations) => {
  cardData.forEach(cardInfo => {
    const card = document.createElement('div');
    const baseClass = ['magic-bento-card'];
    if (options.textAutoHide) baseClass.push('magic-bento-card--text-autohide');
    if (options.enableBorderGlow) baseClass.push('magic-bento-card--border-glow');

    card.className = baseClass.join(' ');
    card.style.backgroundColor = cardInfo.color;
    card.style.setProperty('--glow-color', options.glowColor);

    card.innerHTML = `
      <div class="magic-bento-card__header">
        <div class="magic-bento-card__label">${cardInfo.label}</div>
      </div>
      <div class="magic-bento-card__content">
        <h2 class="magic-bento-card__title">${cardInfo.title}</h2>
        <p class="magic-bento-card__description">${cardInfo.description}</p>
      </div>
    `;

    grid.appendChild(card);

    if (options.enableStars) {
      setupParticleCard(card, options, shouldDisableAnimations);
    } else {
      setupBasicCard(card, options, shouldDisableAnimations);
    }
  });
};

const initMagicBento = options => {
  const grid = document.querySelector('[data-magic-bento-grid]');
  if (!grid) return;

  const shouldDisableAnimations = options.disableAnimations || isMobileViewport();

  renderCards(grid, options, shouldDisableAnimations);

  if (options.enableSpotlight) {
    setupGlobalSpotlight(grid, options, shouldDisableAnimations);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initMagicBento(config);
});

