function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}


function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes');
    
    boxesContainer.innerHTML = '';

    
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
    }
}


function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
}


const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const inputAmount = document.querySelector('input');

createButton.addEventListener('click', function() {
    const amount = inputAmount.value;
    
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
    
        inputAmount.value = '';
    } else {
        alert('Please enter a number between 1 and 100');
    }
});