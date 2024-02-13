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
    index++;

    if (index < text.length) {
        setTimeout(type, 150); // Adjust typing speed here
    }
}

type(); // Start the typing effect
