// this is for the image elements
const caveImage = document.getElementById('caveImage');
const moonImage = document.getElementById('moonImage');

// some event listeners for hover effect
caveImage.addEventListener('mouseover', () => {
    caveImage.src = './images/cave_02.jpg';
});

caveImage.addEventListener('mouseout', () => {
    caveImage.src = './images/cave_01.jpg';
});

moonImage.addEventListener('mouseover', () => {
    moonImage.src = './images/moon_02.jpg';
});

moonImage.addEventListener('mouseout', () => {
    moonImage.src = './images/moon_01.jpg';
});