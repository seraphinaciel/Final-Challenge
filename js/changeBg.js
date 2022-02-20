const images = [
  "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"
];

const visual = document.querySelector(".visual");
const btn = document.querySelector(".visual button");

function changeBg() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];

  visual.style =`background : url("img/${chosenImage}") top center;background-size : cover;`;
}
changeBg();
btn.addEventListener("click", changeBg);

  // const bgImage = document.createElement("img");
  // bgImage.src = `img/${chosenImage}`;
  // visual.appendChild(bgImage);