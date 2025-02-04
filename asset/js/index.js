
        // Toggle dark/light mode on button click
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        darkModeToggle.addEventListener('click', () => {
            // Toggle the dark-mode class on the body
            body.classList.toggle('dark-mode');
            
            // Update the button's text and icon based on the current mode
            if (body.classList.contains('dark-mode')) {
                darkModeToggle.innerHTML = '<i class="bi bi-brightness-high"></i>';
            } else {
                darkModeToggle.innerHTML = '<i class="bi bi-brightness-low"></i> ';
            }
        });
   
