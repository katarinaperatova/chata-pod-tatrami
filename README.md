# 🏔️ Chata pod Tatrami — Horský penzión

Školský webový projekt — responzívna webstránka horského penziónu v Tatranskej Lomnici.

## 🔗 Live demo

👉 **[Otvoriť GitHub Pages](https://tvoje-meno.github.io/chata-pod-tatrami/)**

---

## 📁 Štruktúra projektu

```
chata-pod-tatrami/
├── index.html          # Hlavná stránka
├── o-nas.html          # O penzióne
├── kontakt.html        # Kontakt a rezervácia
├── assets/
│   ├── css/
│   │   └── style.css   # Vlastný CSS štýl
│   └── js/
│       └── script.js   # Externý JavaScript
└── README.md
```

---

## ✅ Splnené požiadavky

### 📄 HTML
- ✅ Správna štruktúra — `<!DOCTYPE html>`, `<html lang="sk">`, `<head>`, `<body>`
- ✅ Meta tagy — `charset`, `viewport`, `description`
- ✅ Sémantické tagy — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- ✅ Funkčné odkazy medzi všetkými stránkami vrátane navigácie
- ✅ Všetky obrázky majú atribút `alt`

### 🎨 Bootstrap 5
- ✅ Responzívna Navbar s hamburger menu na mobile
- ✅ Grid systém — `col-12 col-md-6 col-lg-4` pre karty
- ✅ Karty s `ratio-16x9`, `object-fit-cover`, `shadow`
- ✅ Bootstrap Carousel (min. 4 obrázky)
- ✅ Bootstrap Accordion (FAQ, min. 4 položky)
- ✅ Bootstrap Toast (notifikácia po odoslaní formulára)
- ✅ Formulárové triedy — `form-control`, `form-label`, `form-select`, `form-check`
- ✅ Footer s kontaktom, odkazmi a copyrightom

### 🖌️ CSS
- ✅ Vlastná farebná schéma — `--bs-primary` a ďalšie CSS premenné
- ✅ `transition` — hover efekty na kartách a tlačidlách
- ✅ `@keyframes` animácie — `fadeUp`, `heroZoom`, `scrollBounce`, `toastSlideIn`
- ✅ CSS validácia formulára — `:valid`, `:invalid`, `:focus`, `.invalid-hint`

### ⚙️ JavaScript (`assets/js/script.js`)
- ✅ Všetok kód v externom súbore
- ✅ Iba `addEventListener` — žiadny inline `onclick`
- ✅ Dark mode (prepínač + uloženie do localStorage)
- ✅ Toast notifikácia po odoslaní formulára
- ✅ Počítadlo znakov v textarea
- ✅ Scroll reveal animácie (IntersectionObserver)
- ✅ Komentáre ku každému JS bloku

---

## 📄 Stránky

### `index.html` — Hlavná stránka
- Hero sekcia s animovaným pozadím, nadpisom a tlačidlami
- Stats strip (4 štatistiky)
- O penzióne — text + obrázky vedľa seba
- 3 karty izieb s `ratio-16x9` a Bootstrap Grid
- Bootstrap Carousel so 5 obrázkami
- Sekcia zážitkov (4 karty)
- Call to Action
- Recenzie hostí (3 karty)

### `o-nas.html` — O penzióne
- Nadpis a perex
- 3 odseky textu o histórii
- 2× obrázok s `<figcaption>`
- Hodnoty penziónu
- Bootstrap Accordion — FAQ (5 položiek)
- CTA sekcia

### `kontakt.html` — Kontakt
- Kontaktný formulár s `<fieldset>` a `<legend>` (2 skupiny)
- CSS validácia — `:valid`, `:invalid`, `.invalid-hint`
- Radio tlačidlá pre účel návštevy
- Checkbox pre súhlas s GDPR
- Kontaktné údaje vedľa formulára
- Toast notifikácia po odoslaní

---

## 🛠️ Technológie
- HTML5 + sémantické tagy
- CSS3 (vlastné premenné, animácie, flexbox, grid)
- Bootstrap 5.3.3
- Vanilla JavaScript (ES6+)
- Google Fonts — Cormorant Garamond + Jost

---

## 🚀 Ako spustiť lokálne

1. Stiahnite repozitár:
   ```bash
   git clone https://github.com/tvoje-meno/chata-pod-tatrami.git
   ```
2. Otvorte `index.html` v prehliadači — nevyžaduje server.

---

## 🌐 GitHub Pages — ako nasadiť

1. Nahrajte projekt na GitHub (verejný repozitár)
2. Settings → Pages → Source: `main` branch → `/root`
3. Stránka bude dostupná na `https://meno.github.io/chata-pod-tatrami/`

---

*Školský projekt — Webové technológie 2025*
