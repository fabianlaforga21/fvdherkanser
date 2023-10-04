// JavaScript Document
console.log("hi");

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const parallaxSection = document.querySelector('.scrollding');

if (!prefersReducedMotion.matches) {
    let scrollPosition = 0;
    window.addEventListener('scroll', () => {
        scrollPosition = window.scrollY;
        parallaxSection.style.backgroundPositionX = `${-scrollPosition}px`;
    });
}





