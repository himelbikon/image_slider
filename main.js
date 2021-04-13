let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let counter = 0;
let limite = 5;
let img = document.getElementById("frist_image");

nextBtn.addEventListener("click", nextSlider);
prevBtn.addEventListener("click", prevSlider);

setInterval(nextSlider, 3000);

function nextSlider() {
  if (counter + 1 >= limite) {
    counter = -1;
  }
  counter++;
  document.getElementById("carousel-slide").style.transform = 'translateX(' + (-(img.width) * counter) + 'px)';
}

function prevSlider() {
  if (counter <= 0) {
    counter = 5;
  }
  counter--;
  document.getElementById("carousel-slide").style.transform = 'translateX(' + (-(img.width) * counter) + 'px)';

}
