// Global Variables
let result = document.getElementById("results");
let button = document.getElementById("btn");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

let click = 0; // This is used for click count
let maxClick = 3; // This is max clicks the user is allowed

function oddDuck(name, src) {
  // Constructor with key value pairs.
  this.name = name;
  this.src = src;
  this.click = 0;
  this.views = 0;

  oddDuck.allDuckArray.push(this); // This code runs every time the constructor is called
}

oddDuck.allDuckArray = []; //

function getRandomNum() {
  return Math.floor(Math.random() * oddDuck.length); // This creates a random number for the images
}

new oddDuck("bag", "./img/bag.jpeg");
new oddDuck("banana", "./img/banana.jpeg");
new oddDuck("bathroom", "./img/bathroomn.jpeg");
new oddDuck("boots", "./img/boots.jpeg");
new oddDuck("breafast", "./img/breakfast.jpeg");
new oddDuck("bubblegum", ".img/bubblegum.jpeg");
new oddDuck("chair", "./img/chair.jpeg");
new oddDuck("cthulhu", "./img/cthulhu.jpeg");
new oddDuck("dog-duck", "./img/dog-duck.jpeg");
new oddDuck("dragon", "./img/dragon.jpeg");
new oddDuck("pen", "./img/pen.jpeg");
new oddDuck("pet-sweep", "./img/pet-sweep.jpeg");
new oddDuck("scissors", "./img/scissors.jpeg");
new oddDuck("shark", "./img/shark.jpeg");
new oddDuck("sweep", "./img/sweep.jpeg");
new oddDuck("tauntaun", "./img/tauntaun.jpeg");
new oddDuck("unicorn", "./img/unicorn.jpeg");
new oddDuck("water-can", "./img/water-can.jpeg");
new oddDuck("wine-glass", "./img/wine-glass.jpeg");
