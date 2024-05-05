// script.js

// Function to display a message when the page loads
function displayWelcomeMessage() {
    alert("Welcome to my website! Enjoy your stay.");
}

function changeHeadingColor() {
    var heading = document.querySelector("h1");
    heading.style.color = "red";
}

window.onload = displayWelcomeMessage;
