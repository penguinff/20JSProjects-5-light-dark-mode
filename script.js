const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// Dark or Light Theme
function colorMode(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        toggleLightDarkMode(DARK_THEME);
    } else {
        toggleSwitch.checked = false;
        toggleLightDarkMode(LIGHT_THEME);
    }
}

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_breakfast_${color}.svg`;
    image2.src = `img/undraw_cooking_${color}.svg`;
    image3.src = `img/undraw_tasting_${color}.svg`;
}

// Light or Dark Style
function toggleLightDarkMode(currentTheme) {
    nav.style.backgroundColor = currentTheme === LIGHT_THEME ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = currentTheme === LIGHT_THEME ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = currentTheme === LIGHT_THEME ? 'Light Mode' : 'Dark Mode';
    currentTheme === LIGHT_THEME ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    currentTheme === LIGHT_THEME ? imageMode(LIGHT_THEME) : imageMode(DARK_THEME);
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        localStorage.setItem('theme', DARK_THEME);
        colorMode(DARK_THEME)
    } else {
        localStorage.setItem('theme', LIGHT_THEME);
        colorMode(LIGHT_THEME)
    }
}

// Event Listen
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    colorMode(currentTheme);
}