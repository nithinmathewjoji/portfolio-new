const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Load stored theme preference from localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    toggleButton.textContent = "Switch to Light Mode";
}

// Toggle Theme on Button Click
toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "Switch to Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "Switch to Dark Mode";
    }
});
