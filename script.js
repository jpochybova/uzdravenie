/* uzdravenie.sk — small interactions (no framework, no dependencies) */
(function () {
  "use strict";

  var nav = document.getElementById("nav");
  var burger = document.getElementById("nav-burger");
  var mobile = document.getElementById("nav-mobile");

  /* ------------------------------------------------------------
     1. Nav: transparent over hero, frosted once scrolled
     ------------------------------------------------------------ */
  function onScroll() {
    nav.classList.toggle("nav--scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ------------------------------------------------------------
     2. Mobile menu toggle
     ------------------------------------------------------------ */
  function closeMenu() {
    mobile.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Otvoriť menu");
  }
  function toggleMenu() {
    var open = mobile.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Zavrieť menu" : "Otvoriť menu");
  }
  if (burger) burger.addEventListener("click", toggleMenu);
  mobile.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) closeMenu();
  });

  /* ------------------------------------------------------------
     3. Contact form → Formspree (AJAX, stays on page)
     Falls back to a normal form POST if JS/fetch is unavailable.
     ------------------------------------------------------------ */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  var FALLBACK =
    "Správu sa nepodarilo odoslať. Skúste to prosím znova, alebo mi napíšte " +
    "priamo na jela.sinkova@gmail.com či zavolajte na +421 903 737 720.";
  if (form && status && window.fetch) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var label = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Odosielam…";
      status.className = "form-status";
      status.textContent = "";

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            status.textContent = "Ďakujem! Vaša správa bola odoslaná, čoskoro sa vám ozvem.";
            status.classList.add("is-success");
          } else {
            status.textContent = FALLBACK;
            status.classList.add("is-error");
          }
        })
        .catch(function () {
          status.textContent = FALLBACK;
          status.classList.add("is-error");
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = label;
        });
    });
  }

  /* ------------------------------------------------------------
     4. Cookie consent (Google Consent Mode v2)
     Analytics stays denied until the visitor accepts.
     ------------------------------------------------------------ */
  var KEY = "uz-cookie-consent"; // "granted" | "denied"
  var banner = document.getElementById("cookie-banner");
  var acceptBtn = document.getElementById("cookie-accept");
  var declineBtn = document.getElementById("cookie-decline");
  var settingsBtn = document.getElementById("cookie-settings");

  function gtagSafe() {
    if (typeof window.gtag === "function") window.gtag.apply(window, arguments);
  }
  function applyConsent(state) {
    gtagSafe("consent", "update", {
      analytics_storage: state === "granted" ? "granted" : "denied"
    });
  }
  function showBanner() { if (banner) banner.hidden = false; }
  function hideBanner() { if (banner) banner.hidden = true; }
  function setConsent(state) {
    try { localStorage.setItem(KEY, state); } catch (e) {}
    applyConsent(state);
    hideBanner();
  }

  // On load: honour a previous choice, otherwise ask.
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved === "granted") {
    applyConsent("granted");
  } else if (saved === "denied") {
    applyConsent("denied");
  } else {
    showBanner();
  }

  if (acceptBtn) acceptBtn.addEventListener("click", function () { setConsent("granted"); });
  if (declineBtn) declineBtn.addEventListener("click", function () { setConsent("denied"); });
  // Footer "Nastavenia cookies" reopens the banner so consent can be changed/withdrawn.
  if (settingsBtn) settingsBtn.addEventListener("click", function (e) {
    e.preventDefault();
    showBanner();
  });
})();
