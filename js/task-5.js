
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}

const bodyElement = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');


changeColorButton.addEventListener('click', function() {
const randomColor = getRandomHexColor();


    bodyElement.style.backgroundColor = randomColor;


    colorSpan.textContent = randomColor;


    colorSpan.style.color = invertColor(randomColor);
});


function invertColor(hex) {

    const num = parseInt(hex.slice(1), 16);

    const invertedNum = 0xFFFFFF ^ num;

    const invertedHex = '#' + invertedNum.toString(16).padStart(6, '0');

    return invertedHex;
}