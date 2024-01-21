/*Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.*/

// Function to check if a string is a valid URL
function isValidURL(input) {
    // Regular expression for matching valid URLs
    const urlRegex = /^(http|https):\/\/[\w\d\-._~:/?#[\]@!$&'()*+,;=]+[.][a-zA-Z]+$/;

    // Test the input against the regular expression
    const isMatch = urlRegex.test(input);

    // Print a message indicating if the input matches the conditions or not
    if (isMatch) {
        console.log(`"${input}" is a valid URL.`);
    } else {
        console.log(`"${input}" is not a valid URL.`);
    }
}

// Examples
isValidURL("http://www.example.com");
isValidURL("https://subdomain.example.org");
isValidURL("ftp://invalid.url");
isValidURL("https://123.invalid");
