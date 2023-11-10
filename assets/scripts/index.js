  // Darkmode JS

    // Select the button
    const btn = document.querySelector(".darkmode-switch");
    // Select all elements with the class "dark"
    const darkElements = document.querySelectorAll(".dark");
    // Select the theme preference from localStorage
    const currentTheme = localStorage.getItem("theme");
  
    // If the current theme in localStorage is "dark"
    if (currentTheme == "light") {
    // then remove the dark class from all dark elements
    darkElements.forEach((el) => {
        el.classList.remove("dark");
    });
    document.getElementById("darkmode-switch").innerText = "OFF";
    }
  
    // Listen for a click on the button 
    btn.addEventListener("click", function() {
        // Toggle the .dark class on each click
        darkElements.forEach((el) => {
            el.classList.toggle("dark");
        });

        let theme = "light";
        // If the body contains the .dark-theme class...
        if (document.body.classList.contains("dark")) {
            // ...then let's make the theme dark
            theme = "dark";
            // update the button text
            document.getElementById("darkmode-switch").innerText = "Dark mode: ON";
        }
        else {
            // update the button text
            document.getElementById("darkmode-switch").innerText = "Dark mode: OFF";
        }

        // Then save the choice in localStorage
        localStorage.setItem("theme", theme);
    });