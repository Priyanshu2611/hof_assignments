/*The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output.*/

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to delay execution for 2 seconds
function delayAndReverse(input) {
    setTimeout(function () {
        const reversedString = reverseString(input);
        console.log(`Reversed string after 2 seconds: ${reversedString}`);
    }, 2000);
}

// Example usage
const input = "Hello, World!";
console.log(`Original string: ${input}`);
delayAndReverse(input);