    // Darkmode JS
    // Select the button
    const btn = document.querySelector(".darkmode-switch");
    // Select all elements with the class "dark"
    const darkElements = document.querySelectorAll(".dark");
    // Select the theme preference from localStorage
    const currentTheme = localStorage.getItem("theme");
  
    // If the current theme in localStorage is "light"
    if (currentTheme == "light") {
        // then remove the dark class from all dark elements
        darkElements.forEach((el) => {
            el.classList.remove("dark");
        });
        // Set the inner text of the darkmode button
        document.getElementById("darkmode-switch").innerText = "Dark mode: OFF";
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



    // Image gallery
    document.addEventListener('DOMContentLoaded', function() {
        const flexitems = document.querySelectorAll('.flexitem');
        const overlay = document.querySelector('.overlay');
        const closeBtn = document.querySelector('.close-btn');
        const largeImage = document.querySelector('.gallery-large');

        if (!closeBtn) {
            return;
        }


        closeBtn.addEventListener('click', function() {
            overlay.style.display = 'none';
        });

        overlay.addEventListener('click', function() {
            overlay.style.display = 'none'
        });
    
        flexitems.forEach(container => {
            const smallImage = container.querySelector('.gallery-small')
            smallImage.addEventListener('click', function() {
                overlay.style.display = 'flex';
                largeImage.src = smallImage.src;
                largeImage.alt = smallImage.alt;
            });

        });
    });


    // Next page function =)
    nextPage = (currentURL) => {
        console.log(currentURL)
        const currentPage = currentURL.split('/').pop();
        const pages = ['index.html', 'about.html', 'gallery.html', 'resources.html'];
        const currentPageIndex = pages.indexOf(currentPage);
        if (currentPageIndex >= pages.length - 1 || currentPageIndex === -1) {
            console.log(currentPage)
            if (currentPage === "") {
                location.href = pages[1];
            }
            location.href = pages[0];
            return;
        }
        location.href = pages[currentPageIndex + 1];
    }
    