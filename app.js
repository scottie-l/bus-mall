'use strict';

const allImages = []; // storage array for images
const totalClicks = 0; // var to track total clicks

// Var list of vars needed
function Image(url, name) {
    this.clicks = 0;
    this.url = `img/${url}`;
    this.name = name;
    // this.timesShown = timesShown;
    allImages.push(this);
}

console.log(allImages);

// Image rendering
// let picsImageEl = document.getElementsByClassName('pics');
let picLeftImageEl = document.getElementById('picLeft');
let picCenterImageEl = document.getElementById('picCenter');
let picRightImageEl = document.getElementById('picRight');

function renderPics() {
    let leftImageIndex = Math.floor(Math.random() * allImages.length);
    let centerImageIndex = Math.floor(Math.random() * allImages.length);
    let rightImageIndex = Math.floor(Math.random() * allImages.length);
    
    do (leftImageIndex === centerImageIndex) {
        centerImageIndex = Math.floor(Math.random() * allImages.length);
    }   
        while (leftImageIndex === rightImageIndex) {
            rightImageIndex = Math.floor(Math.random() * allImages.length);
            }
                while (rightImageIndex === centerImageIndex){
                    centerImageIndex = Math.floor(Math.random() * allImages.length);
                }

                let left = allImages[leftImageIndex];
                let center = allImages[centerImageIndex];
                let right = allImages[rightImageIndex];

                picLeftImageEl.src = left.url;
                picLeftImageEl.name = left.name;
                left.timesShown ++;
                picCenterImageEl.src = center.url;
                picCenterImageEl.name = center.name;
                center.timesShown ++;
                picRightImageEl.src = right.url;
                picRightImageEl.name = right.name;
                right.timesShown ++;
    }

    function handleclick(event) {
        event.preventDefault();
        let imageElement = event.target;
        console.log(imageElement.name);
        for (let i = 0; i < allImages.length; i++) {
            if (imageElement.name === allImages[i].name) {
                allImages[i].clicks ++;
                console.log(allImages[i]);
            }
        }
        renderPics();
}

picLeftImageEl = addEventListener('click', handleclick);
picCenterImageEl = addEventListener('click', handleclick);
picRightImageEl = addEventListener('click', handleclick);

new Image('bag.jpg', 'bag');
new Image('banana.jpg', 'banana');
new Image('bathroom.jpg', 'bathroom');
new Image('boots.jpg', 'boots');
new Image('breakfast.jpg', 'breakfast');
new Image('bubblegum.jpg', 'bubblegum');
new Image('chair.jpg', 'chair');
new Image('cthulhu.jpg','cthulhu');
new Image('dog-duck.jpg', 'dog-duck');
new Image('dragon.jpg', 'dragon');
new Image('pen.jpg', 'pen');
new Image('pet-sweep.jpg', 'pet-sweep');
new Image('scissors.jpg', 'scissors');
new Image('shark.jpg', 'shark');
new Image('sweep', 'sweep');
new Image('tauntaun.jpg', 'tauntaun');
new Image('unicorn,jpg', 'unicorn');
new Image('water-can', 'water-can');
new Image('wine-glass.jpg', 'wine-glass');
