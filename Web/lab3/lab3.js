// Task 1: Find the sum of the first 50 natural numbers using a while loop
function sumFirstFifty() {
    let sum = 0;
    let number = 1;
    while (number <= 50) {
        sum += number;
        number++;
    }
    console.log("Task 1 - Sum of the first 50 natural numbers: " + sum);
}

// Task 2: Compute the factorial of a user-provided number using a for loop
function factorial(n) {
    if (n < 0) {
        console.log("Task 2 - Factorial is not defined for negative numbers.");
        return;
    }
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log("Task 2 - Factorial of " + n + " is: " + fact);
}

// Task 3: Use switch to output the corresponding month for a given number (1 to 12)
function monthSwitch(monthNumber) {
    let month;
    switch (monthNumber) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
        default:
            month = "Invalid month number";
            break;
    }
    console.log("Task 3 - Month for number " + monthNumber + " is: " + month);
}

// Task 4: Return the sum of all even numbers in an array
function sumEvenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    console.log("Task 4 - Sum of all even numbers in the array: " + sum);
}

// Task 5: Arrow function to return the count of vowels in a string
const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log("Task 5 - Number of vowels in the string: " + count);
}

// Task 6: Return the result of raising base to the exponent power
function power(base, exponent) {
    let result = Math.pow(base, exponent);
    console.log("Task 6 - " + base + " raised to the power of " + exponent + " is: " + result);
}

// Example calls
sumFirstFifty();

let userNumber = parseInt(prompt("Enter a number to compute its factorial:"));
factorial(userNumber);

let monthNumber = parseInt(prompt("Enter a number (1-12) to get the corresponding month:"));
monthSwitch(monthNumber);

let numbersArray = [1, 2, 3, 4, 5, 6];
sumEvenNumbers(numbersArray);

let inputString = prompt("Enter a string to count its vowels:");
countVowels(inputString);

let base = parseInt(prompt("Enter the base number:"));
let exponent = parseInt(prompt("Enter the exponent:"));
power(base, exponent);
