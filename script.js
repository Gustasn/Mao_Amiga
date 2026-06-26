document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav a');
  const header = document.querySelector('.header');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    header?.classList.toggle('scrolled', scrollTop > 80);
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  const revealElements = document.querySelectorAll('.reveal');
  const counters = document.querySelectorAll('.counter');
  const typingElements = document.querySelectorAll('[data-type-phrase]');
  const splashScreen = document.getElementById('splash-screen');

  if (splashScreen) {
    setTimeout(() => {
      splashScreen.classList.add('hidden');
    }, 2000);
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach(element => revealObserver.observe(element));

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.7 });

  counters.forEach(counter => counterObserver.observe(counter));

  typingElements.forEach((element) => {
    const phrase = element.getAttribute('data-type-phrase') || '';
    typeText(element, phrase);
  });
});

function typeText(element, phrase) {
  let index = 0;
  element.textContent = '';

  const typingInterval = setInterval(() => {
    if (index < phrase.length) {
      element.textContent += phrase.charAt(index);
      index += 1;
    } else {
      clearInterval(typingInterval);
    }
  }, 45);
}

function animateCounter(element) {
  const target = Number(element.dataset.target || 0);
  const suffix = element.dataset.suffix || '';
  const prefix = element.dataset.prefix || '';
  const duration = 1200;
  const startTime = performance.now();

  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(progress * target);
    element.textContent = `${prefix}${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = `${prefix}${target}${suffix}`;
    }
  };

  requestAnimationFrame(updateCounter);
}
