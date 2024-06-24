const orBtn = document.getElementById('or-bulb');
const esBtn = document.getElementById('es-bulb');
const ledBtn = document.getElementById('led-bulb');
const bulbContainer = document.getElementById('bulb-container');

let currentBulbType = null;
let currentBulbOn = false;
let currentBrightness = 0; 
let inactivTimeout = 0;
const createBulbImage = (bulbType, isOn) => {
    const bulbImage = document.createElement('img');
    bulbImage.className = 'bulb-image';
    bulbImage.style.width = '300px';
    bulbImage.style.height = '300px';

    if (bulbType === 'ordinary') {
        if (isOn) {
            switch (currentBrightness) {
                case 0:
                    bulbImage.src = 'img/or-dark-bulb.jpeg';
                    break;
                case 50:
                    bulbImage.src = 'img/or-medium-bulb.png';
                    break;
                case 100:
                    bulbImage.src = 'img/or-bulb-on.png';
                    break;
            }
        } else {
            bulbImage.src = 'img/or-bulb-off.png';
        }
    } else if (bulbType === 'energy-saving') {
        bulbImage.src = isOn ? 'img/es-bulb-on.png' : 'img/es-bulb-off.png';
    } else if (bulbType === 'led') {
        bulbImage.src = isOn ? 'img/led-bulb-on.png' : 'img/led-bulb-off.png';
    }

    return bulbImage;
};

const createSwitchButton = () => {
    const switchBtn = document.createElement('button');
    switchBtn.textContent = currentBulbOn ? 'Off' : 'On';
    switchBtn.className = 'switch-btn';

    switchBtn.addEventListener('click', () => {
        currentBulbOn = !currentBulbOn;
        const newBulbImage = createBulbImage(currentBulbType, currentBulbOn);
        const oldBulbImage = bulbContainer.querySelector('.bulb-image');
        bulbContainer.replaceChild(newBulbImage, oldBulbImage);
        switchBtn.textContent = currentBulbOn ? 'Off' : 'On';

        if (currentBulbOn && currentBulbType === 'ordinary') {
            changeBrightness();
        }
        if (currentBulbOn) {
            resetInactivityTimeout();
        } else {
            clearTimeout(inactivTimeout);
        }
    });

    return switchBtn;
};

const clearBulbContainer = () => {
    bulbContainer.innerHTML = '';
    bulbContainer.classList.remove('hidden');
};

const changeBrightness = () => {
    const brightness = prompt('Enter brightness level (0 for dark, 50 for medium, 100 for high)');

    if (brightness === '0' || brightness === '50' || brightness === '100') {
        currentBrightness = parseInt(brightness);
        const newBulbImage = createBulbImage(currentBulbType, currentBulbOn);
        const oldBulbImage = bulbContainer.querySelector('.bulb-image');
        bulbContainer.replaceChild(newBulbImage, oldBulbImage);
    } else {
        alert('Invalid input. Please enter 0, 50, or 100.');
    }
};
const turnOffBulb = () => {
    if (currentBulbOn) {
        currentBulbOn = false;
        const newBulbImage = createBulbImage(currentBulbType, currentBulbOn);
        const oldBulbImage = bulbContainer.querySelector('.bulb-image');
        bulbContainer.replaceChild(newBulbImage, oldBulbImage);
        const switchBtn = bulbContainer.querySelector('.switch-btn');
        switchBtn.textContent = 'On';
    }
};

const resetInactivityTimeout = () => {
    if (currentBulbOn) {
        clearTimeout(inactivTimeout);
        inactivTimeout = setTimeout(turnOffBulb, 10000); 
    }
};

orBtn.addEventListener('click', () => {
    clearBulbContainer();
    currentBulbType = 'ordinary';
     currentBulbOn = false;
    const bulbImage = createBulbImage(currentBulbType, currentBulbOn);
    const switchBtn = createSwitchButton();
    bulbContainer.appendChild(bulbImage);
    bulbContainer.appendChild(switchBtn);
});

esBtn.addEventListener('click', () => {
    clearBulbContainer();
    currentBulbType = 'energy-saving';
    currentBulbOn = false;
    const bulbImage = createBulbImage(currentBulbType, currentBulbOn);
    const switchBtn = createSwitchButton();
    bulbContainer.appendChild(bulbImage);
    bulbContainer.appendChild(switchBtn);
});

ledBtn.addEventListener('click', () => {
    clearBulbContainer();
    currentBulbType = 'led';
    currentBulbOn = false;
    const bulbImage = createBulbImage(currentBulbType, currentBulbOn);
    const switchBtn = createSwitchButton();
    bulbContainer.appendChild(bulbImage);
    bulbContainer.appendChild(switchBtn);
});