'use strict';

// Gloal variables
let allImages = []; // storage array for images
let likeCounter = 0; // total number of votes/image
let leftImageOnPage; // Left image displayed on pg. Unused
let centerImageOnPage; // Center image displayed on pg. Unused
let rightImageOnPage; // Right image displayed on pg. Unused
let previouslyPickedImages = []; // new array with selected images inside. Unused

// DOM references
const resultsButton = document.getElementById('resultsButton');
const leftImageEl = document.getElementById('picLeft'); // HTML ref to id pic on the left
const centerImageEl = document.getElementById('picCenter'); // HTML ref to pic in the center
const rightImageEl = document.getElementById('picRight'); // HTML ref to pic on the right
const allPicsContainerEl = document.getElementsByClassName('pics'); // HTML ref to container holding L, C, R, id's. Unused

// Constructor function
const Image = function (url, name) {
  this.clicks = 0; // # of times image clicked on
  this.imageUrl = url; // url to image ref.
  this.name = name; // name of image ref.
  this.timesShown = 0; // track number of times image shown
  allImages.push(this); // push images into starting array
};

console.log(allImages);

function renderPics() {
  // function to get random images to display
  let leftImageOnPage = Math.floor(Math.random() * allImages.length);
  let centerImageOnPage = Math.floor(Math.random() * allImages.length);
  let rightImageOnPage = Math.floor(Math.random() * allImages.length);

  // statement to get different image displayed in all 3 boxes
  if (leftImageOnPage === centerImageOnPage) {
    leftImageOnPage = Math.floor(Math.random() * allImages.length);
  }
  if (leftImageOnPage === rightImageOnPage) {
    leftImageOnPage = Math.floor(Math.random() * allImages.length);
  }
  if (centerImageOnPage === leftImageOnPage) {
    centerImageOnPage = Math.floor(Math.random() * allImages.length);
  }
  if (centerImageOnPage === rightImageOnPage) {
    centerImageOnPage = Math.floor(Math.random() * allImages.length);
  }
  if (rightImageOnPage === leftImageOnPage) {
    rightImageOnPage = Math.floor(Math.random() * allImages.length);
  }
  if (rightImageOnPage === centerImageOnPage) {
    rightImageOnPage = Math.floor(Math.random() * allImages.length);
  }

  console.log(leftImageOnPage);
  console.log(centerImageOnPage);
  console.log(rightImageOnPage);

  // statement to increment images that've been shown
  let left = allImages[leftImageOnPage];
  leftImageEl.src = left.imageUrl;
  leftImageEl.name = left.name;
  left.timesShown++;
  let center = allImages[centerImageOnPage];
  centerImageEl.src = center.imageUrl;
  centerImageEl.name = center.name;
  center.timesShown++;
  let right = allImages[rightImageOnPage];
  rightImageEl.src = right.imageUrl;
  rightImageEl.name = right.name;
  right.timesShown++;
  console.log(left.timesShown, center.timesShown, right.timesShown);
}

// function to handle clicks on page
function handleclick(event) {
  event.preventDefault();
  let imageElement = event.target;
  console.log(imageElement.name);
  console.log(imageElement.imageUrl);
  for (let i = 0; i < allImages.length; i++) {
    if (imageElement.name === allImages[i].name) {
      allImages[i].clicks++;
      console.log(allImages[i]);
    }
  }
  likeCounter++;
  renderPics();
  if (likeCounter === 25) { // function to stop voting and populate results
    leftImageEl.removeEventListener('click', handleclick);
    centerImageEl.removeEventListener('click', handleclick);
    rightImageEl.removeEventListener('click', handleclick);
  }
  console.log(likeCounter);
}

// stopping display of images & render button to view results
function handleButtonClick(event) {
  event.preventDefault();
  let list = document.querySelector('ul');
  for (let i = 0; i < allImages.length; i++) {
    let li = document.createElement('li');
    li.innerText = allImages[i].name + ' had ' + allImages[i].clicks + ' votes, and was seen ' + allImages[i].timesShown + ' times';
    list.appendChild(li);
  }
  renderChart();
}

// new image array items
new Image('img/bag.jpg', 'bag');
new Image('img/banana.jpg', 'banana');
new Image('img/bathroom.jpg', 'bathroom');
new Image('img/boots.jpg', 'boots');
new Image('img/breakfast.jpg', 'breakfast');
new Image('img/bubblegum.jpg', 'bubblegum');
new Image('img/chair.jpg', 'chair');
new Image('img/cthulhu.jpg', 'cthulhu');
new Image('img/dog-duck.jpg', 'dog-duck');
new Image('img/dragon.jpg', 'dragon');
new Image('img/pen.jpg', 'pen');
new Image('img/pet-sweep.jpg', 'pet-sweep');
new Image('img/scissors.jpg', 'scissors');
new Image('img/shark.jpg', 'shark');
new Image('img/sweep.png', 'sweep');
new Image('img/tauntaun.jpg', 'tauntaun');
new Image('img/unicorn.jpg', 'unicorn');
new Image('img/water-can.jpg', 'water-can');
new Image('img/wine-glass.jpg', 'wine-glass');

renderPics();

// event listeners
leftImageEl.addEventListener('click', handleclick);
centerImageEl.addEventListener('click', handleclick);
rightImageEl.addEventListener('click', handleclick);
resultsButton.addEventListener('click', handleButtonClick);

// Chartjs function


function renderChart() {
  let newName = [];
  let newClicks = [];
  let newTimesShown = [];
  for (let i = 0; i < allImages.length; i++) {
    console.log(allImages[i].name);
    newName.push(allImages[i].name);
    newClicks.push(allImages[i].clicks);
    newTimesShown.push(allImages[i].timesShown);
  }

  console.log(newName);

  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, { // called inside JS but defined in HTML, so thinks unused. @import?
    type: 'bar',
    data: {
      labels: newName,
      datasets: [
        {
          label: '# of Votes',
          data: newClicks,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', // red
            'rgba(54, 162, 235, 0.2)', // blue
            'rgba(255, 206, 86, 0.2)', // light orange
            'rgba(75, 192, 192, 0.2)', // light green
            'rgba(153, 102, 255, 0.2)', // light yellow
            'rgba(255, 159, 64, 0.2)', // light purple
            'rgba(246, 255, 51, 0.2)', // yellow
            'rgba(51, 213, 255, 0.2)', // lt. blue
            'rgba(58, 51, 255, 0.2)', // dark blue
            'rgba(200, 51, 255, 0.2)', // purple
            'rgba(255, 51, 174, 0.2)', // pink
            'rgba(255, 108, 108, 0.2)', //salmon
            'rgba(255, 181, 108, 0.2)', // peach
            'rgba(193, 255, 108, 0.2)', // neon green
            'rgba(108, 255, 241, 0.2)', // aqua green
            'rgba(144, 108, 255, 0.2)', // lavender
            'rgba(194, 240, 255, 0.2)', // sky blue
            'rgba(128, 36, 33, 0.2)', // maroon
            'rgba(33, 128, 44, 0.2)', // dark green
            'rgba(93, 33, 128, 0.2)'], // dark purple
          borderColor: [
            'rgba(255, 99, 132, 1)', // red
            'rgba(54, 162, 235, 1)', // blue
            'rgba(255, 206, 86, 1)', // light orange
            'rgba(75, 192, 192, 1)', // light green
            'rgba(153, 102, 255, 1)', //light yellow
            'rgba(255, 159, 64, 1)', // light purple
            'rgba(246, 255, 51, 1)', // yellow
            'rgba(51, 213, 255, 1)', // lt. blue
            'rgba(58, 51, 255, 1)', // dark blue
            'rgba(200, 51, 255, 1)', // purple
            'rgba(255, 51, 174, 1)', // pink
            'rgba(255, 108, 108, 1)', //salmon
            'rgba(255, 181, 108, 1)', // peach
            'rgba(193, 255, 108, 1)', // neon green
            'rgba(108, 255, 241, 1)', // aqua green
            'rgba(144, 108, 255, 1)', // lavender
            'rgba(194, 240, 255, 1)', // sky blue
            'rgba(128, 36, 33, 1)', // maroon
            'rgba(33, 128, 44, 1)', // dark green
            'rgba(93, 33, 128, 1)'], // dark purple
          borderWidth: 1
        },
        {
          label: '# of times shown',
          data: newTimesShown,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', // red
            'rgba(54, 162, 235, 0.2)', // blue
            'rgba(255, 206, 86, 0.2)', // light orange
            'rgba(75, 192, 192, 0.2)', // light green
            'rgba(153, 102, 255, 0.2)', // light yellow
            'rgba(255, 159, 64, 0.2)', // light purple
            'rgba(246, 255, 51, 0.2)', // yellow
            'rgba(51, 213, 255, 0.2)', // lt. blue
            'rgba(58, 51, 255, 0.2)', // dark blue
            'rgba(200, 51, 255, 0.2)', // purple
            'rgba(255, 51, 174, 0.2)', // pink
            'rgba(255, 108, 108, 0.2)', //salmon
            'rgba(255, 181, 108, 0.2)', // peach
            'rgba(193, 255, 108, 0.2)', // neon green
            'rgba(108, 255, 241, 0.2)', // aqua green
            'rgba(144, 108, 255, 0.2)', // lavender
            'rgba(194, 240, 255, 0.2)', // sky blue
            'rgba(128, 36, 33, 0.2)', // maroon
            'rgba(33, 128, 44, 0.2)', // dark green
            'rgba(93, 33, 128, 0.2)'], // dark purple
          borderColor: [
            'rgba(255, 99, 132, 1)', // red
            'rgba(54, 162, 235, 1)', // blue
            'rgba(255, 206, 86, 1)', // light orange
            'rgba(75, 192, 192, 1)', // light green
            'rgba(153, 102, 255, 1)', // light yellow
            'rgba(255, 159, 64, 1)', // light purple
            'rgba(246, 255, 51, 1)', // yellow
            'rgba(51, 213, 255, 1)', // lt. blue
            'rgba(58, 51, 255, 1)', // dark blue
            'rgba(200, 51, 255, 1)', // purple
            'rgba(255, 51, 174, 1)', // pink
            'rgba(255, 108, 108, 1)', //salmon
            'rgba(255, 181, 108, 1)', // peach
            'rgba(193, 255, 108, 1)', // neon green
            'rgba(108, 255, 241, 1)', // aqua green
            'rgba(144, 108, 255, 1)', // lavender
            'rgba(194, 240, 255, 1)', // sky blue
            'rgba(128, 36, 33, 1)', // maroon
            'rgba(33, 128, 44, 1)', // dark green
            'rgba(93, 33, 128, 1)'], // dark purple
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
