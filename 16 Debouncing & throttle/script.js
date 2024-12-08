// Get references to HTML elements
const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");

// Function to update text content of an element
function updateText(element, text) {
    element.textContent = text;
}

// Debounce function to delay execution of a callback
function debounce(callback, delay = 1000) {
    let timeoutId; // Variable to store the timeout ID

    // The debounced function
    function debounced(...args) {
        // Clear the previous timeout
        clearTimeout(timeoutId);
        // Set a new timeout to execute the callback after the delay
        timeoutId = setTimeout(() => {
            callback(...args);
        }, delay);
    }

    // Return the debounced function
    return debounced;
}

// Create a debounced version of updateText for debounceText element
const updateDebounceText = debounce((text) => updateText(debounceText, text));

console.log(updateDebounceText);

// Event listener for input event
input.addEventListener("input", (e) => {
    // Update defaultText element with the current input value
    updateText(defaultText, e.target.value);
    // Update debounceText element with debounced input value
    updateDebounceText(e.target.value);
});
