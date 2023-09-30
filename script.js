let timeout;

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("inputField");
    const displayLabel = document.getElementById("displayLabel");

    inputField.addEventListener("input", () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            displayLabel.textContent = inputField.value;
        }, 1000); // Adjust the delay time here (e.g., 1500 for 1.5 seconds)
    });
});