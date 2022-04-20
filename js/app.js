// Build menu 
document.addEventListener('DOMContentLoaded', createNavMenu);
const sections = document.getElementsByTagName('section');

// this function create li menu elements then append them to the ul of the navbar
function createNavMenu(){

    const fragment = document.createDocumentFragment(); 
    const myUl = document.querySelector('ul');

    for (const section of sections) {
        const liItem = document.createElement('li');
        liItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.getAttribute("data-nav")}</a>`;
        fragment.appendChild(liItem);
    }
    myUl.appendChild(fragment);
}


// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', activeSection);

function activeSection(){
    for (const section of sections) {
        if(section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top <= 400)
        {
            section.classList.add('your-active-class');
        }
        else
        {
            section.classList.remove('your-active-class');
        }
    }
}


