const galaxy = document.getElementById('galaxy');

function createStar(x, y) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  star.style.animationDelay = `${Math.random() * 3.5}s`; // Set random delay between 0 and 2 seconds
  galaxy.appendChild(star);
}

function generateRandomPosition() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * width;
  const y = Math.random() * height;
  return { x, y };
}

const numberOfStars = 54;
for (let i = 0; i < numberOfStars; i++) {
  const { x, y } = generateRandomPosition();
  createStar(x, y);
}

function changeBackgroundColor() {
    var body = document.querySelector("body");
    var windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      body.style.background = "linear-gradient(180deg, #000000 1.9%, #ffffff 100%)";
    } else {
      body.style.background = "linear-gradient(180deg, #000000 1.9%, rgba(51, 44, 180, 0.877) 100%)";
    }
  }
  window.addEventListener("resize", changeBackgroundColor);  
  //MAIN IMAGE
  // Get the image element
  const image = document.querySelector('Main-char');
  // Get the window width
  const windowWidth = window.innerWidth;
  // Calculate the new image width
  const newWidth = 500 * (windowWidth / 1280);
  // Set the new image width
  image.width = newWidth;