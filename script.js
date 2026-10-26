// const wishButton = document.getElementById('wishButton');
// const wishReveal = document.getElementById('wishReveal');

// wishButton.addEventListener('click', () => {
//   const isHidden = wishReveal.hidden;
//   wishReveal.hidden = !isHidden;
//   wishButton.innerHTML = isHidden
//     ? 'TON VŒU EST OUVERT <span>♥</span>'
//     : 'OUVRIR TON PETIT VŒU <span>↗</span>';
//   if (isHidden) wishReveal.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
// });




const wishButton = document.getElementById('wishButton');
const wishReveal = document.getElementById('wishReveal');

if (wishButton && wishReveal) {
  wishButton.addEventListener('click', () => {
    const isHidden = wishReveal.hidden;
    wishReveal.hidden = !isHidden;

    wishButton.innerHTML = isHidden
      ? 'TON VŒU EST OUVERT <span>♥</span>'
      : 'OUVRIR TON PETIT VŒU <span>↗</span>';

    if (isHidden) {
      wishReveal.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  });
}


/* OUVRIR LA CARTE PERSONNELLE */
const openMessage = document.getElementById('openMessage');
const letterOverlay = document.getElementById('letterOverlay');
const closeLetter = document.getElementById('closeLetter');

if (openMessage && letterOverlay) {
  openMessage.addEventListener('click', (event) => {
    event.preventDefault();
    letterOverlay.classList.add('show');
  });
}

function closePersonalLetter() {
  if (letterOverlay) {
    letterOverlay.classList.remove('show');
  }
}

if (closeLetter) {
  closeLetter.addEventListener('click', closePersonalLetter);
}

if (letterOverlay) {
  letterOverlay.addEventListener('click', (event) => {
    if (event.target === letterOverlay) {
      closePersonalLetter();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closePersonalLetter();
  }
});
