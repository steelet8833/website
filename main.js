const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', themeToggle.checked);
});

const textElement = document.getElementById('text');
const cursorElement = document.getElementById('cursor');
const text = "Hello, world!";
let index = 0;

function type() {
    textElement.textContent += text[index];

    // Align the cursor 5px to the right of the current text length
    cursorElement.style.left = `${(index + 1) * 0.6}em`;

    index++;

    if (index === text.length) {
        // Add 5px padding between the cursor and the text after the text has finished outputting
        cursorElement.style.left = `${(index + 1) * 0.6}em`;
    }

    if (index < text.length) {
        setTimeout(type, 150); // Adjust typing speed here
    }
}

type(); // Start the typing effect

// Manually set the first tab as active on load
document.getElementById('front-end').style.display = 'block';

function openTab(evt, skillName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(skillName).style.display = "block";
    evt.currentTarget.className += " active";
}