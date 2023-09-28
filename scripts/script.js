// JavaScript Document
console.log("hi");

const parallaxSection = document.querySelector('.scrollding');
let scrollPosition = 0;

window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;


    parallaxSection.style.backgroundPositionX = `${-scrollPosition}px`;
});