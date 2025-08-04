const flap = document.getElementById('flap');
const paper = document.getElementById('paper');
const buttons = document.getElementById('buttons');
const noButton = document.getElementById('noButton');
const pageImage = document.getElementById('pageImage');
const pageText = document.getElementById('pageText');

const flapOpenSound = document.getElementById('flapOpenSound');
const slideOutSound = document.getElementById('slideOutSound');
const slideInSound = document.getElementById('slideInSound');
const flapCloseSound = document.getElementById('flapCloseSound');

function showPaper() {
  flap.classList.remove('flap-close');
  flap.classList.add('flap-open');
  flapOpenSound.play();

  setTimeout(() => {
    paper.classList.remove('hide');
    paper.classList.add('show');
    pageImage.classList.add('active');
    slideOutSound.play();
    buttons.style.opacity = '0';
    buttons.style.pointerEvents = 'none';
  }, 800);
}

function hidePaper() {
  paper.classList.remove('show');
  paper.classList.add('hide');
  slideInSound.play();

  setTimeout(() => {
    flap.classList.remove('flap-open');
    flap.classList.add('flap-close');
    flapCloseSound.play();
    buttons.style.opacity = '1';
    buttons.style.pointerEvents = 'auto';
    pageImage.classList.remove('active');
    pageText.classList.remove('active');
  }, 1000);
}

function returnToEnvelope() {
  hidePaper();
}

function showTextPage() {
  pageImage.classList.remove('active');
  pageText.classList.add('active');
}

function showImagePage() {
  pageText.classList.remove('active');
  pageImage.classList.add('active');
}

function moveNoButton() {
  const container = document.querySelector('.container');
  const maxX = container.clientWidth - noButton.offsetWidth;
  const maxY = container.clientHeight - noButton.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY + 200}px`;
}
