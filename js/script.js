console.log("js/script.js");

const submitBtn = document.getElementById("submitBtn");
const themeToggle = document.getElementById("themeToggle");
const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsSection");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
}

if (toggleSkills && skillsSection) {
    toggleSkills.addEventListener("click", function () {
        skillsSection.classList.toggle("hidden");
    });
}

if (submitBtn) {
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");

        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";

        if (name === "" || email === "") {
            alert("Please fill in all required fields.");
        } else {
            alert("Form submitted successfully!");
        }
    });
}