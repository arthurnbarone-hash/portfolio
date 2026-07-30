(function () {
  const line1 = "Olá, eu sou";
  const line2 = "Arthur Barone!";
  const el = document.getElementById("typewriter");
  let i = 0, j = 0;
  let phase = 0;

  function type() {
    if (phase === 0) {
      if (i < line1.length) {
        el.innerHTML = '<span class="line-regular">' + line1.slice(0, i + 1) + '</span><br><span class="line-bold"></span><span class="cursor">|</span>';
        i++;
        setTimeout(type, 60);
      } else {
        phase = 1;
        setTimeout(type, 300);
      }
    } else if (phase === 1) {
      if (j < line2.length) {
        el.innerHTML = '<span class="line-regular">' + line1 + '</span><br><span class="line-bold">' + line2.slice(0, j + 1) + '</span><span class="cursor">|</span>';
        j++;
        setTimeout(type, 60);
      } else {
        el.innerHTML = '<span class="line-regular">' + line1 + '</span><br><span class="line-bold">' + line2 + '</span><span class="cursor">|</span>';
      }
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
