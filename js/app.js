/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const allSections = document.querySelectorAll("section");
const navbarList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function addSections() {
    const sectionArray = Array.from(allSections);
    const sectionWrite = sectionArray.map((elem, i) => {
        return `<a href="#${elem.id}"><li class='${elem.className} menu__link' key=${i} data-link='${elem.id}'>${elem.dataset.nav}</li></a>`;
    });
    navbarList.insertAdjacentHTML("beforeend", sectionWrite);
}

// Add class 'active' to section when near top of viewport

function addClass() {
    window.addEventListener("scroll", function (event) {});
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

document.addEventListener("DOMContentLoaded", function (event) {
    addSections();
});

// Scroll to section on link click

// Set sections as active
document.addEventListener("DOMContentLoaded", function (event) {
    addClass();
});
