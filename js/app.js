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
const navbarUList = document.getElementById("navbar__list");
const sectionArray = Array.from(allSections);
const nav = document.getElementsByClassName("page__header");

let navbarItems;
let navbarLinks;

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
    const sectionWrite = sectionArray.map((elem, i) => {
        return `<a href="#${elem.id}"><li class='${elem.className} menu__link' key=${i} data-link='${elem.id}'>${elem.dataset.nav}</li></a>`;
    });
    navbarUList.insertAdjacentHTML("beforeend", sectionWrite);
    navbarItems = document.querySelectorAll(".menu__link");
    navbarLinks = document.querySelectorAll("#navbar__list a");
}

// Add class 'activeClass' to section when near top of viewport

function addClass() {
    let isOnView = function (elem) {
        let windowOffset = elem.getBoundingClientRect();
        return (
            windowOffset.top >= -500 &&
            windowOffset.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
                windowOffset.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    sectionArray.map((elem) => {
        window.addEventListener(
            "scroll",
            function (event) {
                if (isOnView(elem)) {
                    elem.classList.add("your-active-class");
                    document
                        .querySelector(`a#${elem.id}`)
                        .classList.add("activeClass");
                } else {
                    elem.classList.remove("your-active-class");
                    document
                        .querySelector(`a#${elem.id}`)
                        .classList.remove("activeClass");
                }
            },
            false
        );
    });
}

// Scroll to anchor ID using scrollTO event

function clickAnchor() {
    const navbarLinksArray = Array.from(navbarLinks);
    navbarLinksArray.map((a) => {
        a.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(a.hash).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
}

function hideNav() {
    nav[0].classList.remove("showNav");
    nav[0].classList.add("hideNav");

    window.addEventListener("scroll", function () {
        window.clearTimeout(timeout);
        nav[0].classList.remove("hideNav");
        nav[0].classList.add("showNav");
    });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
addSections();

// Scroll to section on link click
clickAnchor();

// Set sections as active
addClass();

//Hiding navbar after 3 seconds of not scrolling
let timeout 
setInterval(function () {
    timeout = setTimeout(function () {
        hideNav();
    }, 3000);
}, 3000);

// source: https://stackoverflow.com/questions/22528190/hide-show-a-div-after-a-few-seconds
