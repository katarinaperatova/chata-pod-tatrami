/**
 * Chata pod Tatrami — Hlavný JavaScript súbor
 * Autor: Školský projekt
 * Popis: Všetky interaktívne prvky stránky
 * Pravidlo: Žiadny inline onclick — iba addEventListener
 */

// ============================================================
// 1. DARK MODE — prepínač tmavého režimu
// ============================================================

/**
 * Funkcia na inicializáciu dark mode.
 * Načíta uloženú preferenciu z localStorage a nastaví tlačidlo.
 */
function initDarkMode() {
  const btn = document.getElementById('darkModeBtn');
  if (!btn) return;

  // Načítaj uloženú preferenciu
  const saved = localStorage.getItem('darkMode');
  if (saved === 'true') {
    document.body.classList.add('dark-mode');
    btn.textContent = '☀️';
  }

  // Počúvaj na kliknutie — len addEventListener, žiadny onclick
  btn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    btn.textContent = isDark ? '☀️' : '🌙';
    // Ulož preferenciu
    localStorage.setItem('darkMode', isDark);
  });
}

// ============================================================
// 2. NAVBAR — schovanie/zobrazenie pri scrollovaní
// ============================================================

/**
 * Navbar sa po scrolle dole trochu viac stmaví.
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.custom-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
      navbar.style.background = 'rgba(20, 24, 18, 0.98)';
    } else {
      navbar.style.background = 'rgba(28, 32, 25, 0.92)';
    }
  });
}

// ============================================================
// 3. KONTAKTNÝ FORMULÁR — validácia a Toast notifikácia
// ============================================================

/**
 * Funkcia na zobrazenie Bootstrap Toast notifikácie.
 */
function showSuccessToast() {
  const toastEl = document.getElementById('successToast');
  if (!toastEl) return;

  // Vytvor Bootstrap Toast inštanciu a zobraz ju
  const toast = new bootstrap.Toast(toastEl, {
    delay: 5000
  });
  toast.show();
}

/**
 * Označí input ako "touched" (dotyknutý) pri strate fokusu —
 * to umožní CSS :invalid zobraziť chybu len po interakcii.
 */
function initInputTouched() {
  const inputs = document.querySelectorAll('.custom-input');
  inputs.forEach(function (input) {
    input.addEventListener('blur', function () {
      input.classList.add('touched');
    });
  });
}

/**
 * Inicializácia kontaktného formulára.
 * Validuje polia a po úspešnom odoslaní zobrazí Toast.
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // Počúvaj na submit tlačidlo — len addEventListener
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Zastav natívne odoslanie

    // Označ všetky inputy ako touched (pre CSS validáciu)
    const inputs = form.querySelectorAll('.custom-input');
    inputs.forEach(function (input) {
      input.classList.add('touched');
    });

    // Skontroluj validitu formulára
    if (!form.checkValidity()) {
      // Scrolluj na prvý chybný input
      const firstInvalid = form.querySelector(':invalid');
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalid.focus();
      }
      return; // Zastav odoslanie
    }

    // Ak je formulár validný — zobraz Toast
    showSuccessToast();

    // Resetuj formulár po krátkom oneskorení
    setTimeout(function () {
      form.reset();
      // Odober triedy touched
      inputs.forEach(function (input) {
        input.classList.remove('touched');
      });
    }, 500);
  });

  // Inicializuj touched na inputoch
  initInputTouched();
}

// ============================================================
// 4. POČÍTADLO ZNAKOV V TEXTAREA
// ============================================================

/**
 * Zobrazí počet napísaných znakov v správe (textarea).
 */
function initCharCounter() {
  const textarea = document.getElementById('sprava');
  if (!textarea) return;

  // Vytvor a vlož counter element pod textarea
  const counter = document.createElement('div');
  counter.style.cssText = 'font-size:0.72rem; color:var(--stone); text-align:right; margin-top:0.3rem;';
  counter.textContent = '0 / 500 znakov';
  textarea.parentNode.insertBefore(counter, textarea.nextSibling.nextSibling);

  // Aktualizuj counter pri každom stlačení klávesy
  textarea.addEventListener('input', function () {
    const len = textarea.value.length;
    counter.textContent = len + ' / 500 znakov';
    if (len > 450) {
      counter.style.color = '#c0392b';
    } else {
      counter.style.color = 'var(--stone)';
    }
  });
}

// ============================================================
// 5. SMOOTH SCROLL pre interné kotvy
// ============================================================

/**
 * Pridá smooth scroll správanie pre všetky interné odkazy s #.
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ============================================================
// 6. ANIMÁCIA KARET — fade-in pri scrollovaní
// ============================================================

/**
 * Karty a sekcie sa animujú (fade-in) keď sa dostanú do výhľadu.
 * Používa IntersectionObserver API.
 */
function initScrollReveal() {
  // Pridaj CSS pre počiatočný stav
  const style = document.createElement('style');
  style.textContent = `
    .room-card, .exp-card, .testi-card, .stat-item {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .room-card.revealed, .exp-card.revealed, .testi-card.revealed, .stat-item.revealed {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  // Observer
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        // Pridaj oneskorenie podľa poradia
        setTimeout(function () {
          entry.target.classList.add('revealed');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  // Sleduj všetky karty
  document.querySelectorAll('.room-card, .exp-card, .testi-card, .stat-item').forEach(function (el) {
    observer.observe(el);
  });
}

// ============================================================
// INICIALIZÁCIA — spusti všetko po načítaní DOM
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  initDarkMode();
  initNavbarScroll();
  initContactForm();
  initCharCounter();
  initSmoothScroll();
  initScrollReveal();
});
