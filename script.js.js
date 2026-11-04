
// Select all tab buttons
const tabButtons = document.querySelectorAll(".tab-btn");

// Select all tab content sections
const tabContents = document.querySelectorAll(".tab-content");

// Add click event to every button
tabButtons.forEach(button => {

    button.addEventListener("click", function() {

        // Remove active class from all buttons
        tabButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Hide all content sections
        tabContents.forEach(content => {
            content.classList.remove("active");
        });

        // Highlight the clicked button
        this.classList.add("active");

        // Get the selected content ID
        const targetId = this.getAttribute("data-target");

        // Display the selected content
        document.getElementById(targetId).classList.add("active");

    });

});
