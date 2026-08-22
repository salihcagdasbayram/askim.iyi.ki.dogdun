// Floating hearts - lightweight, no lag
(function () {
  const container = document.getElementById('hearts');
  if (!container) return;

  const heartSymbols = ['♥', '♡', '❤', '💕'];
  const maxHearts = 18; // düşük tutuyoruz ki kasmasın

  function createHeart() {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    const size = 12 + Math.random() * 22;
    heart.style.fontSize = size + 'px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (8 + Math.random() * 12) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';

    container.appendChild(heart);

    // Temizlik - animasyon bitince sil
    setTimeout(() => {
      heart.remove();
    }, 20000);
  }

  // Başlangıçta birkaç tane
  for (let i = 0; i < 8; i++) {
    setTimeout(createHeart, i * 400);
  }

  // Sürekli ama seyrek üret
  setInterval(() => {
    if (container.children.length < maxHearts) {
      createHeart();
    }
  }, 1200);
})();
