const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

/*   elem-to-animate, {animation-to-complete, duration, stagger} */
tl.to('.text', {y: "0%", duration: 1, stagger: 0.25});

tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.25}); /* slide window upwards to fill view */
tl.to('.intro', {y: "-100%", duration: 1.5}, "-=1.5"); /* start a second sooner */

tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");

function onbutton(x){
    x.style.color = "#DDCDE8";
}

function offbutton(x){
    x.style.color = "black";
}

window.onscroll = function() {stickyNav()};
var navbar = document.getElementById("navbar");
var navtop = navbar.offsetTop;

function stickyNav(){
    (window.pageYOffset > navtop) ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}