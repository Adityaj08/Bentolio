//Random Background Generator
function randomNumber(min, max) {
    return String(Math.floor(Math.random() * (max - min + 1) + min)).padStart(3, '0');
}

const generatedNumber = randomNumber(1, 350);
document.querySelector('.portrait img').src = `https://www.fffuel.co/images/dddepth-preview/dddepth-${generatedNumber}.jpg`;

const split = new SplitType(".name", {
    types: "chars, words"
});

const preLoader = gsap.timeline({delay: 1, repeat: -1});

preLoader.from(split.chars, {
    duration: 1,
    opacity: 0,
    y: 20,
    stagger: 0.05,
    ease: "power2.inOut"
});
preLoader.to(split.chars, {
    delay: 1,
    duration: 1,
    opacity: 0,
    y: -20,
    stagger: 0.05,
    ease: "power2.inOut"
});

document.addEventListener('DOMContentLoaded', () =>{
    window.addEventListener('load',()=>{
        gsap.to(".preloader", {
            duration: 1,
            yPercent: -100,
            ease: "power2.inOut",
            delay: 2,
        });
        document.body.style.overflow = "auto";
    });
});
