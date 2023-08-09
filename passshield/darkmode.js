const darkmodeSwitch = document.getElementById("darkmode-switch");
const body = document.body;

// Check if dark mode preference is saved in local storage
const isDarkMode = localStorage.getItem("darkmode") === "true";

// Apply dark mode if preference is set to dark
if (isDarkMode) {
    body.classList.add("darkmode");
    darkmodeSwitch.checked = true;
}

// Toggle dark mode
darkmodeSwitch.addEventListener("change", () => {
    body.classList.toggle("darkmode");
    const darkmodeEnabled = body.classList.contains("darkmode");
    localStorage.setItem("darkmode", darkmodeEnabled);
});
