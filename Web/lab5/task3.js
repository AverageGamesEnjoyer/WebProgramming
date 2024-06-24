function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const ampmElement = document.getElementById('ampm');

    const formattedHours = formatTime(hours % 12 || 12);
    const formattedMinutes = formatTime(minutes);
    const formattedSeconds = formatTime(seconds);

    hoursElement.textContent = formattedHours;
    minutesElement.textContent = formattedMinutes;
    secondsElement.textContent = formattedSeconds;
    ampmElement.textContent = ampm;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function calculateBirthday() {
    const currentDate = new Date();
    const birthdayInput = document.getElementById('brth-input');
    const birthdayDate = new Date(birthdayInput.value);

    const thisYearBirthday = new Date(currentDate.getFullYear(), birthdayDate.getMonth(), birthdayDate.getDate());
    const nextYearBirthday = new Date(currentDate.getFullYear() + 1, birthdayDate.getMonth(), birthdayDate.getDate());
    const nextBirthday = thisYearBirthday > currentDate ? thisYearBirthday : nextYearBirthday;

    const brthMilliseconds = nextBirthday.getTime() - currentDate.getTime();
    const brthMonths = Math.floor(brthMilliseconds / (1000 * 60 * 60 * 24 * 30)); //1000 мс * 60 с * 60 хв * 24 год * 30 днів
    const brthDays = Math.floor(brthMilliseconds / (1000 * 60 * 60 * 24));
    const brthHours = Math.floor((brthMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // Спочатку залишок від ділення загальної кількості мілісекунд на (1000 мс * 60 с * 60 хв * 24 год)
    // Це дає кількість мілісекунд шо залишилися після віднімання повних днів
    const brthMinutes = Math.floor((brthMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    // Спочатку залишок від ділення загальної кількості мілісекунд на (1000 мс * 60 с * 60 хв)
    // Це дає кількість мілісекунд шо залишилися після віднімання повних годин
    const brthSeconds = Math.floor((brthMilliseconds % (1000 * 60)) / 1000);
    // Спочатку залишок від ділення загальної кількості мілісекунд на (1000 мс * 60 с)
    // Це дає кількість мілісекунд шо залишилися після віднімання повних хвилин
    const result = `Until the next birthday:
       ${brthMonths} month, ${brthDays} days, ${brthHours} hours, ${brthMinutes} minutes, ${brthSeconds} seconds`;
    alert(result);
}

let countdownInterval; 
function countdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval); 
    }
    const inputDateTime = document.getElementById('countdown-time').value;
    const convertInput = new Date(inputDateTime).getTime();

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const difference = convertInput - now;

        if (difference < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown-result').innerHTML = "Час вийшов!";
            return; // перервати функцію якшо час вийшов
        }

    //кількість повних днів ділена на кількість мілісекунд в одній добі
    let days = Math.floor(difference / (1000 * 60 * 60 * 24)); 

    // кількість повних годин, що залишилися після віднімання повних днів, 
    // остача для отримання залишку від помноження мілісекунд в одній добі,
    // а потім ділим цей залишок на кількість мілісекунд в одній годині
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 

    // кількість повних хвилин, що залишилися після віднімання повних днів і годин,
    // остача для отримання залишку мілісекунд, що не увійшли в повні години,
    // і ділим це на кількість мілісекунд в одній хвилині
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); 

    // кількість повних секунд, що залишилися після віднімання повних днів, годин і хвилин,
    // остача для отримання залишку мілісекунд, який не увійшов в повні хвилини,
    // і ділим це на кількість мілісекунд в одній секунді
    let seconds = Math.floor((difference % (1000 * 60)) / 1000); 

        document.getElementById('countdown-result').innerHTML = "Залишилось: " + days + " днів " + hours + " годин " + minutes + " хвилин " + seconds + " секунд ";
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    updateClock();
    setInterval(updateClock, 1000);

    const countdownButton = document.querySelector(".countdown-button");
    countdownButton.addEventListener("click", countdown);

    const birthdayButton = document.getElementById("br-button");
    birthdayButton.addEventListener("click", calculateBirthday);
});