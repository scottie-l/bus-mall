'use strict';

let allImages = []; // storage array for images
let totalClicks = 0; // var to track total number times voted, total of 25 votes

// Image rendering
// let picsImageEl = document.getElementsByClassName('pics');
let picLeftImageEl = document.getElementById('picLeft');
let picCenterImageEl = document.getElementById('picCenter');
let picRightImageEl = document.getElementById('picRight');

// Var list of vars needed
function Image(url, name) {
  this.clicks = 0;
  this.url = url;
  this.name = name;
  this.timesShown = 0;
  allImages.push(this);
}

console.log(allImages);

function renderPics() {
  let leftImageIndex = Math.floor(Math.random() * allImages.length);
  let centerImageIndex = Math.floor(Math.random() * allImages.length);
  let rightImageIndex = Math.floor(Math.random() * allImages.length);

  if (leftImageIndex === centerImageIndex) {
    centerImageIndex = Math.floor(Math.random() * allImages.length);
  }
  if (leftImageIndex === rightImageIndex) {
    rightImageIndex = Math.floor(Math.random() * allImages.length);
  }
  if (rightImageIndex === centerImageIndex) {
    centerImageIndex = Math.floor(Math.random() * allImages.length);
  }

  console.log(leftImageIndex);

  let left = allImages[leftImageIndex];
  left.timesShown ++;
  let center = allImages[centerImageIndex];
  center.timesShown ++;
  let right = allImages[rightImageIndex];
  right.timesShown ++;

  console.log(left.url);

  picLeftImageEl.src = left.url;
  picLeftImageEl.name = left.name;
  left.timesShown++;
  picCenterImageEl.src = center.url;
  picCenterImageEl.name = center.name;
  center.timesShown++;
  picRightImageEl.src = right.url;
  picRightImageEl.name = right.name;
  right.timesShown++;
  console.log(left.timesShown);
}

function handleclick(event) {
  event.preventDefault();
  let imageElement = event.target;
  console.log(imageElement.name);
  console.log(imageElement);
  for (let i = 0; i < allImages.length; i++) {
    if (imageElement.name === allImages[i].name) {
      allImages[i].clicks++;
      console.log(allImages[i]);
    }
  }
  renderPics();
  totalClicks ++;
}

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

picLeftImageEl = addEventListener('click', handleclick);
picCenterImageEl = addEventListener('click', handleclick);
picRightImageEl = addEventListener('click', handleclick);