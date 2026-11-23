/* AppVLab — sélecteur de langue FR/EN.
   Le contenu des deux langues est dans la page (data-l="fr" / data-l="en") :
   le français s'affiche sans JavaScript, la langue est posée avant l'affichage. */
(function () {
  "use strict";

  var root = document.documentElement;
  var KEY = "appvlab_lang";

  function valid(l) {
    return l === "fr" || l === "en";
  }

  function fromQuery() {
    try {
      var q = new URLSearchParams(location.search).get("lang");
      return valid(q) ? q : null;
    } catch (e) {
      return null;
    }
  }

  function fromStorage() {
    try {
      var s = localStorage.getItem(KEY);
      return valid(s) ? s : null;
    } catch (e) {
      return null;
    }
  }

  function initial() {
    var q = fromQuery();
    if (q) return q;
    var s = fromStorage();
    if (s) return s;
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("fr") === 0 ? "fr" : "en";
  }

  function remember(l) {
    try {
      localStorage.setItem(KEY, l);
    } catch (e) {}
  }

  var lang = initial();
  root.setAttribute("lang", lang);
  root.classList.add("js");

  function apply(l) {
    lang = l;
    root.setAttribute("lang", l);

    var title = root.getAttribute("data-title-" + l);
    if (title) document.title = title;

    var desc = root.getAttribute("data-desc-" + l);
    var meta = document.querySelector('meta[name="description"]');
    if (desc && meta) meta.setAttribute("content", desc);

    document.querySelectorAll("[data-aria-" + l + "]").forEach(function (el) {
      el.setAttribute("aria-label", el.getAttribute("data-aria-" + l));
    });

    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === l ? "true" : "false");
    });

    document.querySelectorAll('a[href*="privacy.appvlab.com"]').forEach(function (a) {
      try {
        var u = new URL(a.getAttribute("href"), location.href);
        u.searchParams.set("lang", l);
        a.setAttribute("href", u.toString());
      } catch (e) {}
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(lang);
    if (fromQuery()) remember(lang);
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var l = btn.getAttribute("data-lang");
        if (!valid(l) || l === lang) return;
        apply(l);
        remember(l);
      });
    });
  });
})();