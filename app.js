// Global Variables
let duckContainer = document.getElementById("img-container");
let result = document.getElementById("results");
let button = document.getElementById("btn");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

let click = 0; // This is used for click count
let maxClick = 3; // This is max clicks the user is allowed
let usedDucks = [];

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

  while (duck1 === duck2 || duck2 === duck3 || duck1 === duck3) {
    console.log("Keeps looping the image count");
    duck1 = getRandomNum();
    duck2 = getRandomNum();
    duck3 = getRandomNum();
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

  usedDucks = [];
  usedDucks.push(duck1, duck2, duck3);
}

//  This Funcation is the event listerner of the section with 2 images

function buttonClick(event) {
  console.log("tim rocks");
  if (event.target === duckContainer) {
    alert("Please only click the images");
  } else {
    // In this else we've clicked on an image, so lets do all below
    click++; // Keep track of image total clicks
    let clickDuck = event.target.alt; //  Check if the Duck we clicked on's name matches the current looping Duck

    for (let i = 0; i < OddDuck.allDuckArray.length; i++) {
      // Loop through an amount of times equal to the number of goats
      if (clickDuck === OddDuck.allDuckArray[i].name) {
        // Chck if the duck we clicked on's name matches the current looping Duck
        OddDuck.allDuckArray[i].click++;
        break; // Once its found no need for it to keep looking
      }
    }
    if (click === maxClick) {
      // Once the clicks have reached max clicks then it will stop the image click
      duckContainer.removeEventListener("click", buttonClick);

      // Now the button will light up to be able to click .
      button.addEventListener("click", renderChart); // was renderesults
      // Style button
      button.className = "clicks-allowed";
      duckContainer.classname = "not-voting";
    } else {
      renderOddDuck();
    }
  }
}

// This renders results after max clicks

// function renderResults() {
//   let ul = document.getElementById("results"); // Creating it by Element
//   for (let i = 0; i < OddDuck.allDuckArray.length; i++) {
//     // Loops through the array of all pics
//     let li = document.createElement("li"); // Creates a list items for each one
//     li.textContent = `${OddDuck.allDuckArray[i].name} had ${OddDuck.allDuckArray[i].views}view(s) and was clicked ${OddDuck.allDuckArray[i].click} time(s).`; // Add the text to the output ( Name of Image , How many times it came on the screen and how many clicks each one got)
//     ul.appendChild(li); // This appends each one to a List item
//   }
//   button.removeEventListener("click", renderResults); // This stops the button from being clicked again.
// }

function renderChart() {
  let duckLikes = [];
  let duckViews = [];
  let duckName = [];

  for (let i = 0; i < OddDuck.allDuckArray.length; i++) {
    duckLikes.push(OddDuck.allDuckArray[i].click);
    duckViews.push(OddDuck.allDuckArray[i].views);
    duckName.push(OddDuck.allDuckArray[i].name);
  }
  console.log(duckName);
  console.log(duckLikes);
  console.log(duckViews);

  const data = {
    labels: duckName,
    datasets: [
      {
        label: "likes",
        backgroundColor: "#3E2D40",
        borderColor: "#fffff",
        borderWidth: 1,
        data: duckLikes,
      },
      {
        label: "views",
        backgroundColor: " #F5BD02",
        borderColor: "#fffff",
        borderWidth: 1,
        data: duckViews,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const canvasChart = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(canvasChart, config);
  // document.querySelector(".chart-container").classList.add("show");
}

new OddDuck("bag", "./img/bag.jpeg");
new OddDuck("banana", "./img/banana.jpeg");
new OddDuck("bathroom", "./img/bathroom.jpeg");
new OddDuck("boots", "./img/boots.jpeg");
new OddDuck("breafast", "./img/breakfast.jpeg");
new OddDuck("bubblegum", "./img/bubblegum.jpeg");
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

duckContainer.addEventListener("click", buttonClick);
