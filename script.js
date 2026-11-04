
const themeToggle = document.getElementById("theme-toggle");

const themeIcon = document.getElementById("theme-icon");

const themeText = document.getElementById("theme-text");


// Function to apply theme

function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark-mode");

        themeIcon.textContent = "☀️";

        themeText.textContent = "Light Mode";

    } else {

        document.body.classList.remove("dark-mode");

        themeIcon.textContent = "🌙";

        themeText.textContent = "Dark Mode";

    }

}


// Load saved theme from Local Storage

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {

    applyTheme(savedTheme);

} else {

    applyTheme("light");

}


// Toggle between themes

themeToggle.addEventListener("click", function() {

    const isDark = document.body.classList.contains("dark-mode");

    const newTheme = isDark ? "light" : "dark";

    applyTheme(newTheme);

    // Save preference in Local Storage

    localStorage.setItem("theme", newTheme);

});
