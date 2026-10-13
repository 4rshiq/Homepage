const themeSwitch = document.querySelector("#switchSizeSm"); // select switch
const background = document.querySelector("body"); //select body
const navbar = document.querySelector(".navbar"); //select navbar
const actives = document.querySelectorAll(".active");
const footer = document.querySelector("footer");
const savedTheme = localStorage.getItem("theme") || "light"; //saves the current theme
const cards = document.querySelectorAll(".container_item");
const elements = document.querySelectorAll(".ele");

// Apply the saved theme
navbar.setAttribute("data-bs-theme", savedTheme);
background.classList.toggle("dark", savedTheme === "dark");
footer.classList.toggle("dark", savedTheme === "dark");
for(const element of elements){
    element.classList.toggle("dark_element", savedTheme === "dark");
}
for(const card of cards){ 
    card.classList.toggle("darkcard", savedTheme === "dark");
}

for (const active of actives) {
    active.classList.toggle("dark", savedTheme === "dark");
}


// Synchronize and listen to the switch, if it exists
if (themeSwitch) {
    themeSwitch.checked = savedTheme === "dark";

    themeSwitch.addEventListener("change", () => {
        const theme = themeSwitch.checked ? "dark" : "light";

        navbar.setAttribute("data-bs-theme", theme);
        background.classList.toggle("dark", theme === "dark");
        footer.classList.toggle("dark", theme === "dark");
        
        for(const card of cards){ 
            card.classList.toggle("darkcard", theme === "dark");
        }
        for(const element of elements){
        element.classList.toggle("dark_element", theme === "dark");
        }
        for (const active of actives) {
        active.classList.toggle("dark", theme === "dark");
        }

        localStorage.setItem("theme", theme);
    });
}
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();
