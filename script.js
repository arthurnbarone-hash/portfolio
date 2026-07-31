(function () {
  const line1 = "Olá, eu sou";
  const line2 = "Arthur Barone!";
  const emojis = [
    "https://cdn.jsdelivr.net/npm/apple-color-emoji@1.0.1/images/d83d-dcf2.png",
    "https://cdn.jsdelivr.net/npm/apple-color-emoji@1.0.1/images/270d-d83c-dffb.png",
    "https://cdn.jsdelivr.net/npm/apple-color-emoji@1.0.1/images/d83c-dfaf.png",
    "https://cdn.jsdelivr.net/npm/apple-color-emoji@1.0.1/images/d83d-dcca.png",
    "https://cdn.jsdelivr.net/npm/apple-color-emoji@1.0.1/images/d83d-dca1.png",
    "https://cdn.jsdelivr.net/npm/apple-color-emoji@1.0.1/images/d83d-dd0d.png"
  ];
  const el = document.getElementById("typewriter");
  let i = 0, j = 0, k = 0;
  let phase = 0;

  function cursor() {
    return '<span class="cursor">|</span>';
  }

  function render(emojiImg) {
    let html;
    if (phase === 0) {
      html = '<span class="line-regular">' + line1.slice(0, i) + cursor() + '</span>';
    } else if (phase === 1) {
      html = '<span class="line-regular">' + line1 + '</span><br>' +
        '<span class="line-bold">' + line2.slice(0, j) + cursor() + '</span>';
    } else {
      html = '<span class="line-regular">' + line1 + '</span><br>' +
        '<span class="line-bold">' + line2 + '</span><br>' +
        '<span class="line-emoji">' + (emojiImg ? '<img src="' + emojiImg + '" alt="">' : '') + cursor() + '</span>';
    }
    el.innerHTML = html;
  }

  function type() {
    if (phase === 0) {
      if (i < line1.length) {
        render();
        i++;
        setTimeout(type, 60);
      } else {
        render();
        phase = 1;
        setTimeout(type, 400);
      }
    } else if (phase === 1) {
      if (j < line2.length) {
        render();
        j++;
        setTimeout(type, 60);
      } else {
        render();
        phase = 2;
        setTimeout(type, 500);
      }
    } else {
      render(emojis[k]);
      k++;
      if (k >= emojis.length) k = 0;
      setTimeout(function () {
        render();
        setTimeout(type, 500);
      }, 1400);
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
