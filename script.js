//problem 1. Write a function that displays current date & time in your browser.


function displayDateTime() {
    let now = new Date();
    document.write(` ${now} <br><br>`);
}

displayDateTime();

// problem 2. Write a function that takes first & last name and then it greets the user using his full name.

function greetUser() {
    let firstName = prompt(`Please enter your first name:`);
    let lastName = prompt(`Please enter your last name:`);
    const fullName = (`${firstName} ${lastName}`);
    document.write(`Welcome, ${fullName}!<br><br>`);
}

greetUser();

// problem 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

function addTwoNumbers() {
    let num1 = parseFloat(prompt(`Enter the first number:`));
    let num2 = parseFloat(prompt(`Enter the second number:`));
    const sum = num1 + num2;
    document.write(`The sum of ${num1} and ${num2} is: ${sum}<br><br>`);
}

addTwoNumbers();

// problem 4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and 
// show the desired result in your browser.

function calculator() {
    let num1 = parseFloat(prompt(`Enter the first number:`));
    let num2 = parseFloat(prompt(`Enter the second number:`));
    let operator = prompt(`Enter the operator (+, -, *, /):`);
    let result;

if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
    result = num1 / num2;
} else {
    document.write(`Invalid operator! Please use +, -, *, or /.`);
    return;
}
    document.write(`The result of ${num1} ${operator} ${num2} is: ${result}<br><br>`);
}
calculator();

// Problem 5. Write a function that squares its argument. 

function squareNumber() {
    let number = parseFloat(prompt(`Enter a number:`));
    let squared = number * number;
    document.write(`The square of ${number} is: ${squared}<br><br>`);
}

squareNumber();

// Problem 6. Write a function that computes factorial of a number. 

let num = prompt("Enter a number:");

function factorial() {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    document.write(`factorial of ${num} is ${result}<br><br>`);
}

factorial();

//Problem 7. Write a function that take start and end number as inputs & display counting in your browser.

let startNum = parseInt(prompt(`Please enter start number for counting`));
let endtNum = parseInt(prompt(`Please enter end number for counting`));
result = "";
function counting() {
    for (let i= startNum; i <= endtNum; i++) {
result = i + " ,";
document.write(`${result}`);
    }
}

counting()

//Problem 8. Write a nested function that computes hypotenuse of a right angle triangle.  
// Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs. 
// Outer function : calculateHypotenuse() 
// Inner function: calculateSquare()

let base = parseFloat(prompt(`Please enter the base of the triangle:`));
let perpendicular = parseFloat(prompt(`Please enter the perpendicular of the triangle:`));
function calculateHypotenuse() {
    function calculateSquare(num) {
        return num * num;
    }

    let hypotenuseSquared = calculateSquare(base) + calculateSquare(perpendicular);
    let hypotenuse = Math.sqrt(hypotenuseSquared);
    document.write(`The hypotenuse of the triangle is: ${hypotenuse}<br><br>`);
}   
calculateHypotenuse();


//Problem 9. Write a function that calculates the area of a rectangle. A = width * height 
// Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables

function calculateAreaOfRectangle(width, height) {
    let area = width * height;
    document.write(`The area of the rectangle is: ${area}<br><br>`);
}   
// i. Arguments as value
calculateAreaOfRectangle(5, 10);
// ii. Arguments as variables
let width = parseFloat(prompt(`Please enter the width of the rectangle:`));
let height = parseFloat(prompt(`Please enter the height of the rectangle:`));
calculateAreaOfRectangle(width, height);


// Problem 10. Write a JavaScript function that checks whether a passed string is palindrome or not?   
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

function isPalindrome(str) {
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    if (cleanedStr === reversedStr) {
        document.write(`"${str}" is a palindrome.<br><br>`);
    } else {   
        document.write(`"${str}" is not a palindrome.<br><br>`);
    }
}

let inputString = prompt(`Please enter a string to check if it's a palindrome:`);
isPalindrome(inputString);


// Problem 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the 
// string in upper case.  
// EXAMPLE STRING : 'the quick brown fox'  
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capitalizeFirstLetter(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }   
    let capitalizedStr = words.join(' ');
    document.write(`Capitalized String: ${capitalizedStr}<br><br>`);
}   
let inputStr = prompt(`Please enter a string to capitalize the first letter of each word:`);
capitalizeFirstLetter(inputStr);



// Problem 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  
// EXAMPLE STRING : 'Web Development Tutorial'  
// EXPECTED OUTPUT : 'Development'

function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';   
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }   
    }
    document.write(`The longest word in the string is: ${longestWord}<br><br>`);
}

let inputStringForLongestWord = prompt(`Please enter a string to find the longest word:`);
findLongestWord(inputStringForLongestWord);


// Problem 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.  
// Sample arguments : 'JSResourceS.com', 'o' 

function countLetterOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    document.write(`The letter "${letter}" occurs ${count} times in the string "${str}".<br><br>`);
}
let inputStringForLetterCount = prompt(`Please enter a string to count occurrences of a letter:`);
let inputLetter = prompt(`Please enter the letter to count in the string:`);
countLetterOccurrences(inputStringForLetterCount, inputLetter);



// Problem 14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here. 
// Create a function called calcCircumference: 
// • Pass the radius to the function. 
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN". 
// Create a function called calcArea: 
// • Pass the radius to the function. 
// • Calculate the area based on the radius, and output "The area is NN". 
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    document.write(`The circumference of the circle is: ${circumference.toFixed(2)}<br><br>`);
}
function calcArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    document.write(`The area of the circle is: ${area.toFixed(2)}<br><br>`);
}
let radius = parseFloat(prompt(`Please enter the radius of the circle:`));
calcCircumference(radius);
calcArea(radius);

















