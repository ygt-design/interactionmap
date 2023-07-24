// Function to get a random position within the container
function getRandomPosition(container) {
    var containerRect = container.getBoundingClientRect();
    var xPos = Math.random() * (containerRect.width - 100); // Subtract the element's width to keep it within the container.
    var yPos = Math.random() * (containerRect.height - 100); // Subtract the element's height to keep it within the container.

    return {
        x: xPos,
        y: yPos
    };
}

// Use jQuery to wait for the document to be ready before executing the script.
$(document).ready(function () {
    var container = document.querySelector('.container');

    // Function to float an image to a random position within the container
    function floatImage(image) {
        var newPosition = getRandomPosition(container);
        image.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    }

    // Get all elements with the class "draggable"
    var draggableElements = document.querySelectorAll('.draggable');

    // Loop through each draggable element and float it to a random position initially
    for (var i = 0; i < draggableElements.length; i++) {
        floatImage(draggableElements[i]);
    }

    // Use setInterval to update the positions of the images every 1000 milliseconds (1 second)
    setInterval(function () {
        for (var i = 0; i < draggableElements.length; i++) {
            floatImage(draggableElements[i]);
        }
    }, 1000);
});
