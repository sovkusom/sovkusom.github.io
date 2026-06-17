const cards = document.querySelectorAll('.food-card');
const modal = document.getElementById('foodModal');

const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

const closeBtn = document.querySelector('.close');

cards.forEach(card => {

    card.addEventListener('click', () => {

        modalImage.src = card.dataset.image;
        modalTitle.textContent = card.dataset.title;
        modalDescription.textContent = card.dataset.description;

        modal.style.display = 'flex';
    });

});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});