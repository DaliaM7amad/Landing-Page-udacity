// Build menu 
document.addEventListener('DOMContentLoaded', createNavMenu);
const sections = document.getElementsByTagName('section');
const myUl = document.querySelector('ul');

// this function create li menu elements then append them to the ul of the navbar
function createNavMenu(){

    const fragment = document.createDocumentFragment(); 

    for (const section of sections) {
        const liItem = document.createElement('li');
        liItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.getAttribute("data-nav")}</a>`;
        fragment.appendChild(liItem);
    }
    myUl.appendChild(fragment);
}


// Add class 'active' to section and link when near top of viewport 

document.addEventListener('scroll', activeSection);

function activeSection(){
    for (const section of sections) {
        // store the link to add active class
        const link = document.querySelector(`a[href = "#${section.id}"]`);
        if(section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top <= 400)
        {
            section.classList.add('your-active-class');
            link.classList.add('active-a');
        }
        else
        {
            section.classList.remove('your-active-class');
            link.className.search('active-a') === -1 ? null : link.classList.remove('active-a') ;
        }
    }
}

// smooth scroll

//using delegation to avoid multiple events

myUl.addEventListener('click', function(event){
    event.preventDefault();
    const clickedSectionId = event.target.getAttribute('href').substring(1);
    const clickedSection = document.getElementById(clickedSectionId);
    clickedSection.scrollIntoView({behavior:"smooth", block:"center"});
});





