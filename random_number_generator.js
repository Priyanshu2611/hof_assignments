/*The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number.*/ 

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); 
}

// Function to display the time remaining
function displayTimeRemaining(seconds) {
    console.log(`Time remaining: ${seconds} seconds`);
}

// Function to delay execution for a given number of seconds
function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function main() {
    
    const delayDuration = 3;

    console.log(`Generating a random number after a delay of ${delayDuration} seconds...`);

    // Loop to display time remaining every second
    for (let i = delayDuration; i > 0; i--) {
        displayTimeRemaining(i);
        await delay(1); // Wait for 1 second
    }

    // Generate and display the random number
    const randomNumber = generateRandomNumber();
    console.log(`Random number generated: ${randomNumber}`);
}

main();
