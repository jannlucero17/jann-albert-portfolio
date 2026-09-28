document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section, header');

  if (!('IntersectionObserver' in window)) return;

  sections.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(el => observer.observe(el));
});


// Back-to-top button
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

//animation 1
function typeRoleText() {
  const el = document.querySelector('.role-sub');
  if (!el) return;

  const fullText = el.textContent.trim();
  const parent = el.parentElement;
  const maxFontSize = 16;
  const minFontSize = 8;
  const typingSpeed = 30;
  const loopDelay = 6500;

  el.style.whiteSpace = 'nowrap';
  el.style.fontSize = maxFontSize + 'px';
  el.textContent = fullText;
  let fontSize = maxFontSize;
  while (el.scrollWidth > parent.clientWidth && fontSize > minFontSize) {
    fontSize -= 0.5;
    el.style.fontSize = fontSize + 'px';
  }

  let activeCycleId = 0; 

  function runCycle() {
    activeCycleId++;
    const myCycleId = activeCycleId; 

    el.textContent = '';
    let i = 0;
    function typeChar() {
      if (myCycleId !== activeCycleId) return; 
      if (i < fullText.length) {
        el.textContent += fullText.charAt(i);
        i++;
        setTimeout(typeChar, typingSpeed);
      }
    }
    typeChar();
  }

  runCycle();
  setInterval(runCycle, loopDelay);
}

window.addEventListener('load', typeRoleText);

// animation 2
function typeTitle() {
  const fullTitle = 'Jann Albert Lucero | Portfolio';
  const typingSpeed = 120;
  const loopDelay = 6500;

  let activeCycleId = 0;

  function runCycle() {
    activeCycleId++;
    const myCycleId = activeCycleId;

    let i = 0;
    function typeChar() {
      if (myCycleId !== activeCycleId) return;
      document.title = fullTitle.slice(0, i);
      if (i < fullTitle.length) {
        i++;
        setTimeout(typeChar, typingSpeed);
      }
    }
    typeChar();
  }

  runCycle();
  setInterval(runCycle, loopDelay);
}

window.addEventListener('load', typeTitle);