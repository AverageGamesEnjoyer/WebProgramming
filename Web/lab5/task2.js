const trafficLight = document.getElementById('traffic-light');
const autoButton = document.getElementById('auto-button');
const customButton = document.getElementById('custom-button');
const switchButton = document.getElementById('switch-custom-button');
const trafficLightStatus = document.getElementById('traffic-light-status');

const lights = {
  red: 'img/tr-light-red.png',
  yellow: 'img/tr-light-yellow.png',
  green: 'img/tr-light-green.png',
  off: 'img/tr-light-off.jpg'
};

function changeLight(newLight) {
  trafficLight.src = lights[newLight];
  trafficLightStatus.textContent = `Color: ${newLight}`;
}

function blinkYellowLight(redDuration, yellowDuration, greenDuration) {
  let count = 0;
  const blinker = setInterval(() => {
    if (count % 2 === 0) {
      trafficLight.src = lights.yellow;
      trafficLightStatus.textContent = 'Color: yellow';
    } else {
      trafficLight.src = lights.off;
      trafficLightStatus.textContent = 'Color: off';
    }
    count++;
    if (count === 6) {
      clearInterval(blinker);
      startTrafficLight(redDuration, yellowDuration, greenDuration);
    }
  }, 500);
}

function startTrafficLight(redDuration, yellowDuration, greenDuration) {
  changeLight('red');
  setTimeout(() => {
    changeLight('yellow');
    setTimeout(() => {
      changeLight('green');
      setTimeout(() => {
        blinkYellowLight(redDuration, yellowDuration, greenDuration);
      }, greenDuration);
    }, yellowDuration);
  }, redDuration);
}

autoButton.addEventListener('click', () => {
  const redDuration = 5000, yellowDuration = 2000, greenDuration = 5000;
  startTrafficLight(redDuration, yellowDuration, greenDuration);
});

customButton.addEventListener('click', () => {
  const redDuration = parseInt(prompt("Enter the duration for red light in milliseconds"), 10);
  const yellowDuration = parseInt(prompt("Enter the duration for yellow light in milliseconds"), 10);
  const greenDuration = parseInt(prompt("Enter the duration for green light in milliseconds"), 10);
  startTrafficLight(redDuration, yellowDuration, greenDuration);
});

switchButton.addEventListener('click', () => {
  changeLight('off');
  const redButton = document.createElement('button');
  redButton.textContent = 'RED';
  redButton.className = "switch-buttons";
  redButton.addEventListener('click', () => changeLight('red'));

  const yellowButton = document.createElement('button');
  yellowButton.textContent = 'YELLOW';
  yellowButton.className = "switch-buttons";
  yellowButton.addEventListener('click', () => changeLight('yellow'));

  const greenButton = document.createElement('button');
  greenButton.textContent = 'GREEN';
  greenButton.className = "switch-buttons";
  greenButton.addEventListener('click', () => changeLight('green'));

  document.body.appendChild(redButton);
  document.body.appendChild(yellowButton);
  document.body.appendChild(greenButton);
});