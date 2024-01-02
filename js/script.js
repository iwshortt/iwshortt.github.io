// ------------------------------------------------------- //
// ----------------------- Base -------------------------- //
// ------------------------------------------------------- //
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

// ------------------------------------------------------- //
// ----------------------- Rotate Element -------------------------- //
// ------------------------------------------------------- //
// const projectTop = document.querySelector('.project-top');

// document.addEventListener('mousemove', (e) => {
//     rotateElement(e, projectTop);
// });

// function rotateElement(event, element) {
//     // get mouse position
//     const x = event.clientX;
//     const y = event.clientY;

//     // find the middle of project ** fix to find the middle of the project-top div **
//     const middleX = window.innerWidth / 2;
//     const middleY = window.innerHeight / 2;

//     // get offset from middle
//     const offsetX = ((x - middleX) / middleX) * 3;
//     const offsetY = ((y - middleY) / middleY) * 3;
//     console.log(offsetX, offsetY);

//     element.style.setProperty('--rotateX', offsetY + 'deg');
//     element.style.setProperty('--rotateY', -1 * offsetX + 'deg');
// }

// ------------------------------------------------------- //
// --------------- viewport fix for mobile --------------- //
// ------------------------------------------------------- //
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});