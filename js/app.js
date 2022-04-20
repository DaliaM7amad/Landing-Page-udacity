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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', createNavMenu);
const sections = document.getElementsByTagName('section');

// this function create li menu elements then append them to the ul of the navbar
function createNavMenu(event){

    const fragment = document.createDocumentFragment(); 
    const myUl = document.querySelector('ul');

    for (const section of sections) {
        const liItem = document.createElement('li');
        liItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.getAttribute("data-nav")}</a>`;
        fragment.appendChild(liItem);
    }
    myUl.appendChild(fragment);
}



