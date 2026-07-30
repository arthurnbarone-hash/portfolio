(function () {
  const text = "Olá, eu sou Arthur Barone!";
  const el = document.getElementById("typewriter");
  let i = 0;

  function type() {
    if (i < text.length) {
      el.innerHTML = text.slice(0, i + 1) + '<span class="cursor">|</span>';
      i++;
      setTimeout(type, 60);
    } else {
      el.innerHTML = text + '<span class="cursor">|</span>';
    }
  }

  type();

  document.querySelectorAll(".menu a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
})();
