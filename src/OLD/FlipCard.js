document.addEventListener('DOMContentLoaded', () => {
    const flipCard = document.querySelector('.flip-card');
    flipCard.addEventListener('click', () => {
      flipCard.querySelector('.flip-card-inner').classList.toggle('flipped');
    });
  });