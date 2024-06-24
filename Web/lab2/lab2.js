// Оператори порівняння
function findMinMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { min, max };
}

function compareObjects(obj1, obj2) {
    for (let key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
    }
    return true;
}

// Логічні оператори
function isInRange(num, min, max) {
    return num >= min && num <= max;
}

function toggleBoolean(value) {
    return !value;
}

// Умовні розгалуження
function getGradeDescription(grade) {
    if (grade >= 90) {
        return 'відмінно';
    } else if (grade >= 75) {
        return 'добре';
    } else if (grade >= 60) {
        return 'задовільно';
    } else {
        return 'незадовільно';
    }
}

function getSeasonIf(month) {
    if (month === 12 || month === 1 || month === 2) {
        return 'Зима';
    } else if (month >= 3 && month <= 5) {
        return 'Весна';
    } else if (month >= 6 && month <= 8) {
        return 'Літо';
    } else if (month >= 9 && month <= 11) {
        return 'Осінь';
    } else {
        return 'Невідомий місяць';
    }
}

function getSeasonTernary(month) {
    return (month === 12 || month === 1 || month === 2) ? 'Зима' :
           (month >= 3 && month <= 5) ? 'Весна' :
           (month >= 6 && month <= 8) ? 'Літо' :
           (month >= 9 && month <= 11) ? 'Осінь' : 'Невідомий місяць';
}

// Функція для демонстрації роботи всіх функцій
function runProgram() {
    // Оператори порівняння
    let numbers = [3, 5, 7, 2, 8, -1, 4, 10, 12];
    let minMax = findMinMax(numbers);
    document.getElementById('minMax').innerText = `Min: ${minMax.min}, Max: ${minMax.max}`;

    let obj1 = { a: 1, b: 2, c: 3 };
    let obj2 = { a: 1, b: 2, c: 3 };
    let obj3 = { a: 1, b: 2, c: 4 };
    document.getElementById('compareObj1').innerText = `Compare obj1 and obj2: ${compareObjects(obj1, obj2)}`; // true
    document.getElementById('compareObj2').innerText = `Compare obj1 and obj3: ${compareObjects(obj1, obj3)}`; // false

    // Логічні оператори
    document.getElementById('range1').innerText = `Is 5 in range 1-10: ${isInRange(5, 1, 10)}`; // true
    document.getElementById('range2').innerText = `Is 15 in range 1-10: ${isInRange(15, 1, 10)}`; // false

    let isTrue = true;
    let isFalse = toggleBoolean(isTrue);
    document.getElementById('toggle').innerText = `Toggle true: ${isFalse}`; // false

    // Умовні розгалуження
    document.getElementById('grade').innerText = `Grade description for 85: ${getGradeDescription(85)}`; // добре

    document.getElementById('seasonIf').innerText = `Season for month 4 using if: ${getSeasonIf(4)}`; // Весна
    document.getElementById('seasonTernary').innerText = `Season for month 4 using ternary: ${getSeasonTernary(4)}`; // Весна
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('startButton').addEventListener('click', runProgram);
});
