const categoryBtns = document.querySelectorAll('.dessert-categories__btn');
const cards = document.querySelectorAll('.dessert-card');

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.category;

    cards.forEach(card => {
      if (category === 'all' || card.dataset.tag === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});