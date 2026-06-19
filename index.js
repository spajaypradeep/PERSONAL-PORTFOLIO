// 1. Find the button in the HTML using its ID
const themeButton = document.getElementById('toggle');

// 2. Add an event listener to wait for a click
themeButton.addEventListener('click', () => {
    
    // 3. Toggle the class 'dark-theme' on the <body> tag
    document.body.classList.toggle('dark-theme');
    
    // 4. Change the button text based on which mode is active
    if (document.body.classList.contains('dark-theme')) {
        themeButton.innerText = "☀️ Light Mode";
    } else {
        themeButton.innerText = "⚡ Dark Mode";
    }
});