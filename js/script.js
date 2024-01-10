// ------------------------------------------------------- //
// --------------- navigation burger menu ---------------- //
// ------------------------------------------------------- //
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => { // created new eventListener due to 'bubbling' and 'scope'
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});
nav.addEventListener('click', (e) => { // closes nav overlay when 'a' tag is clicked
    const navLinks = document.querySelectorAll('nav a');
    for (let i = 0; i < navLinks.length; i++) {
        if (e.target === navLinks[i] || e.target === navToggle) {
            primaryNav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
        }
    }
});

// ------------------------------------------------------- //
// --------------- light/dark mode toggle ---------------- //
// ------------------------------------------------------- //
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    // 1. add class darkmode to the body
    document.body.classList.add('dark-mode');
    // 2 update darkmode in the localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    // 1. remove class darkmode from the body
    document.body.classList.remove('dark-mode');
    // 2 update darkmode in the localStorage
    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// ------------------------------------------------------- //
// --------------- viewport fix for mobile --------------- //
// ------------------------------------------------------- //
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});