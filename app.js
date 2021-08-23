// opening animation
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

//   elem-to-animate, {animation-to-complete, duration, stagger} 
tl.to('.text', {y: "0%", duration: 1, stagger: 0.25});

tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.25}); // slide window upwards to fill view 
tl.to('.intro', {y: "-100%", duration: 1.5}, "-=1.5"); // start a second sooner 

tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");

// button hover animation
function onbutton(x){
    (x.classList.contains("bpurple")) ? x.style.color = "#DDCDE8" : x.style.color = "red";
}

function offbutton(x){
    x.style.color = "black";
}

// scrolling animations
// navbar
window.onscroll = function() {stickyNav();};
var navbar = document.getElementById("navbar");
var navtop = navbar.offsetTop;

function stickyNav(){
    (window.pageYOffset > navtop) ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// projects
const scroll_elem = document.querySelectorAll(".js-scroll");

// first hide all projects
scroll_elem.forEach( (el) => {
    el.classList.add("scrolled-proj-hidden"); 
});

// returns true if elem is "in view"
const in_view = (el, off) => {
    const top = el.getBoundingClientRect().top;
    return ( top <= (window.innerHeight - off) );
}

const scroll_animation = () => {
    scroll_elem.forEach((el) => {
        if(in_view(el, 150)){ 
            if(el.classList.contains("project-n")){
                el.classList.add("scrolled-proj-nm"); 
                el.classList.remove("scrolled-proj-hidden-nm");
            }
            else{
                el.classList.add("scrolled-proj-img"); 
                el.classList.remove("scrolled-proj-hidden-img");
            }
        }
        else{ 
            if(el.classList.contains("project-n")){
                el.classList.remove("scrolled-proj-nm"); 
                el.classList.add("scrolled-proj-hidden-nm");
            }
            else{
                el.classList.remove("scrolled-proj-img"); 
                el.classList.add("scrolled-proj-hidden-img");
            }
        }
    })
}

window.addEventListener("scroll", scroll_animation);
