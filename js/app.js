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
const navBar = document.querySelector('#navbar__list');
let allSections = document.querySelectorAll('section');
let fragment = document.createDocumentFragment();
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
for(let i=0; i<allSections.length; i++){
    let li = document.createElement('li');
    let a = document.createElement('a');
    let txt = document.createTextNode(allSections[i].getAttribute('data-nav'));
    a.appendChild(txt);
    a.classList.add('menu__link');
    li.appendChild(a);
    fragment.appendChild(li);
    //add event on click 
    li.addEventListener('click', function(){allSections[i].scrollIntoView()});
  }
  
  navBar.appendChild(fragment);
  
  

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
document.addEventListener('scroll',()=>{
    allSections.forEach((item)=>{
      const secBounds = item.getBoundingClientRect();
          if (secBounds.top>-20 && secBounds.top<200) {
              item.classList.add("your-active-class");
          }
          else   
          {
              item.classList.remove("your-active-class");
          }
      });
      
  })

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



