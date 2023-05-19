const images = ['cat1.jpg', 'dog1.jpg'];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = `url(img/${chosenImage})`;

function randomBackground() {
  document.body.style.backgroundImage = bgImage;
}

randomBackground();
setInterval(randomBackground, 1000);
