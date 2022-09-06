// Global Variables
let duckContainer = document.querySelector("main");
let result = document.getElementById("results");
let button = document.getElementById("btn");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

let click = 0; // This is used for click count
let maxClick = 3; // This is max clicks the user is allowed

function OddDuck(name, src) {
  // Constructor with key value pairs.
  this.name = name;
  this.src = src;
  this.click = 0;
  this.views = 0;

  OddDuck.allDuckArray.push(this); // This code runs every time the constructor is called
}

OddDuck.allDuckArray = []; //

function getRandomNum() {
  return Math.floor(Math.random() * OddDuck.allDuckArray.length); // This creates a random number for the images
}

// Render image to a numnber and check them against each other so cant get the same image

function renderOddDuck() {
  let duck1 = getRandomNum();
  let duck2 = getRandomNum();
  let duck3 = getRandomNum();

  while (image1 === image2 && image2 === image3) {
    console.log("Keeps looping the image count");
    image1 = getRandomNum();
    image2 = getRandomNum();
    image3 = getRandomNum();
  }

  //Set Image attributes for our images
  image1.src = OddDuck.allDuckArray[duck1].src; // This sets the image
  image2.src = OddDuck.allDuckArray[duck2].src; // ''
  image3.src = OddDuck.allDuckArray[duck3].src; // ''
  image1.alt = OddDuck.allDuckArray[duck1].name; // This sets the name of the pic
  image2.alt = OddDuck.allDuckArray[duck2].name; // ''
  image3.alt = OddDuck.allDuckArray[duck3].name; // ''

  OddDuck.allDuckArray[duck1].views++; // Increase the views when rendered
  OddDuck.allDuckArray[duck2].views++;
  OddDuck.allDuckArray[duck3].views++;
}

//  Now to do Button function

function buttonClick(event) {
  if (event.target === duckContainer) {
    alert("Please only click the images");
  }
  click++;
  let clickDuck = event.target.alt;

  for (let i = 0; i < OddDuck.allDuckArray.length; i++) {
    if (clickDuck === OddDuck.allDuckArray[i].name) {
      OddDuck.allDuckArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClick) {
    // Once the clicks have reached max clicks then it will stop the image click
    duckContainer.removeEventListener("click", buttonClick);

    // Now the button will light up to be able to click .
    button.addEventListener("click", renderResults);
    // Style button
    button.className = "clicks-allowed";
    duckContainer.classname = "not-voting";
  }
}

new OddDuck("bag", "./img/bag.jpeg");
new OddDuck("banana", "./img/banana.jpeg");
new OddDuck("bathroom", "./img/bathroomn.jpeg");
new OddDuck("boots", "./img/boots.jpeg");
new OddDuck("breafast", "./img/breakfast.jpeg");
new OddDuck("bubblegum", ".img/bubblegum.jpeg");
new OddDuck("chair", "./img/chair.jpeg");
new OddDuck("cthulhu", "./img/cthulhu.jpeg");
new OddDuck("dog-duck", "./img/dog-duck.jpeg");
new OddDuck("dragon", "./img/dragon.jpeg");
new OddDuck("pen", "./img/pen.jpeg");
new OddDuck("pet-sweep", "./img/pet-sweep.jpeg");
new OddDuck("scissors", "./img/scissors.jpeg");
new OddDuck("shark", "./img/shark.jpeg");
new OddDuck("sweep", "./img/sweep.jpeg");
new OddDuck("tauntaun", "./img/tauntaun.jpeg");
new OddDuck("unicorn", "./img/unicorn.jpeg");
new OddDuck("water-can", "./img/water-can.jpeg");
new OddDuck("wine-glass", "./img/wine-glass.jpeg");

renderOddDuck(); // Final render
