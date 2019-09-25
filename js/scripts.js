//Get asses to Dom element
const header = documents.querySelector('header');
const blueButton = document.getElementById('color-button-blue');
const brownButton = document.getElementById('color-button-brown');
const greenButton = document.getElementById('color-button-green');
const noneButton = document.getElementById('color-button-none');
//click event listeners
blueButton,addEventListener('click', () => {
    header.classList.add('blue-backgound', 'text-white');
});