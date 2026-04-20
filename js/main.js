// ===== FILTRO ESERCIZI =====
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('#exercise-grid .card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // aggiorna bottone attivo
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === 'tutti' || card.dataset.level === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});
