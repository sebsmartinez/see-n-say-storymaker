// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;

// Arrays for random word selection
const subjects = ["dog", "cat", "robot", "alien", "wizard"];
const verbs = ["runs", "jumps", "flies", "eats", "sings"];
const adjectives = ["quick", "lazy", "happy", "sad", "angry"];
const objects = ["ball", "house", "car", "tree", "book"];
const places = ["park", "city", "beach", "forest", "mountain"];

var textToSpeak = ''; // Empty string to build the final sentence

// Get references to buttons
var subjectButton = document.getElementById("subjectButton");
var verbButton = document.getElementById("verbButton");
var adjectiveButton = document.getElementById("adjectiveButton");
var objectButton = document.getElementById("objectButton");
var placeButton = document.getElementById("placeButton");
var speakButton = document.getElementById("speakButton");
var generateButton = document.getElementById("generateButton"); // New button
var resetButton = document.getElementById("resetButton"); // New button

// Function to pick a random word from an array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate a random story
function generateStory() {
    textToSpeak = ''; // Clear previous content
    const subject = getRandomWord(subjects);
    const verb = getRandomWord(verbs);
    const adjective = getRandomWord(adjectives);
    const object = getRandomWord(objects);
    const place = getRandomWord(places);
    textToSpeak = `${subject} ${verb} ${adjective} ${object} ${place}.`;
}

// Function to speak the current textToSpeak content
function speakNow() {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(textToSpeak);
    // Actually speak the text
    synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handlers for the buttons that build the textToSpeak string
subjectButton.onclick = function() {
    const randomSubject = getRandomWord(subjects);
    textToSpeak += randomSubject + " ";
};

verbButton.onclick = function() {
    const randomVerb = getRandomWord(verbs);
    textToSpeak += randomVerb + " ";
};

adjectiveButton.onclick = function() {
    const randomAdjective = getRandomWord(adjectives);
    textToSpeak += randomAdjective + " ";
};

objectButton.onclick = function() {
    const randomObject = getRandomWord(objects);
    textToSpeak += randomObject + " ";
};

placeButton.onclick = function() {
    const randomPlace = getRandomWord(places);
    textToSpeak += randomPlace + " ";
};

// Onclick handler for the button that speaks the text contained in textToSpeak
speakButton.onclick = function() {
    speakNow();
};

// Onclick handler for the button that generates a random story
generateButton.onclick = function() {
    generateStory();
};

// Onclick handler for the button that resets the textToSpeak content
resetButton.onclick = function() {
    textToSpeak = ''; // Reset the string
};
