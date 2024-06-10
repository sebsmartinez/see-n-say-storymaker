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

/* Functions
-------------------------------------------------- */
function speakNow(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the buttons that build the textToSpeak string
subjectButton.onclick = function() {
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    textToSpeak += randomSubject + " ";
};

verbButton.onclick = function() {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    textToSpeak += randomVerb + " ";
};

adjectiveButton.onclick = function() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    textToSpeak += randomAdjective + " ";
};

objectButton.onclick = function() {
    const randomObject = objects[Math.floor(Math.random() * objects.length)];
    textToSpeak += randomObject + " ";
};

placeButton.onclick = function() {
    const randomPlace = places[Math.floor(Math.random() * places.length)];
    textToSpeak += randomPlace + " ";
};

// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
    speakNow(textToSpeak);
    textToSpeak = ''; // Reset the string after speaking
}
