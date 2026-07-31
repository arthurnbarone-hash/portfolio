(function () {
  const line1 = "Olá, eu sou";
  const line2 = "Arthur Barone!";
  const emojis = ["📱", "✍🏻", "🎯", "📊", "💡", "🔍"];
  const el = document.getElementById("typewriter");
  let i = 0, j = 0, k = 0;
  let phase = 0;

  function render(emoji) {
    let html = '<span class="line-regular">' + line1.slice(0, i) + '</span>';
    html += '<br><span class="line-bold">' + line2.slice(0, j) + '</span>';
    html += '<br><span class="line-emoji">' + emoji + '</span><span class="cursor">|</span>';
    el.innerHTML = html;
  }

  function type() {
    if (phase === 0) {
      if (i < line1.length) {
        render("");
        i++;
        setTimeout(type, 60);
      } else {
        phase = 1;
        setTimeout(type, 300);
      }
    } else if (phase === 1) {
      if (j < line2.length) {
        render("");
        j++;
        setTimeout(type, 60);
      } else {
        phase = 2;
        setTimeout(type, 500);
      }
    } else if (phase === 2) {
      render(emojis[k]);
      k++;
      if (k >= emojis.length) k = 0;
      setTimeout(function () {
        render("");
        setTimeout(type, 400);
      }, 1200);
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
