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
        return `<a id=${elem.id} href="#${elem.id}"><li class='${elem.className} menu__link' key=${i} data-link='${elem.id}'>${elem.dataset.nav}</li></a>`;
    });
    navbarUList.insertAdjacentHTML("beforeend", sectionWrite);
    navbarItems = document.querySelectorAll(".menu__link");
    navbarLinks = document.querySelectorAll("#navbar__list a");
}

// Add class 'activeClass' to section when near top of viewport

function addClass() {
    let isOnView = function (elem) {
        let bounding = elem.getBoundingClientRect();
        return (
            bounding.top <= 50 &&
            bounding.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    sectionArray.map((elem) =>{
        window.addEventListener(
            "scroll",
            function (event) {
                if (isOnView(elem)) {
                    elem.classList.add("your-active-class");
                    document.querySelector(`a#${elem.id}`).classList.add("activeClass")
                } else {
                    elem.classList.remove("your-active-class");
                    document.querySelector(`a#${elem.id}`).classList.remove("activeClass")
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
