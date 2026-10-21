// Plug-in style features: dark mode switch + back-to-top button.

(function () {
  var body = document.body;
  var toggle = document.getElementById("theme-toggle");
  var topBtn = document.getElementById("back-to-top");

  // --- Dark mode (remembers the choice when the browser allows it) ---
  function setDark(on) {
    body.classList.toggle("dark", on);
    if (toggle) {
      toggle.textContent = on ? "Light mode" : "Dark mode";
      toggle.setAttribute("aria-pressed", String(on));
    }
  }

  var saved = null;
  try { saved = localStorage.getItem("ch09-theme"); } catch (e) {}
  setDark(saved === "dark");

  if (toggle) {
    toggle.addEventListener("click", function () {
      var on = !body.classList.contains("dark");
      setDark(on);
      try { localStorage.setItem("ch09-theme", on ? "dark" : "light"); } catch (e) {}
    });
  }

  // --- Back to top ---
  if (topBtn) {
    window.addEventListener("scroll", function () {
      topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
