document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", () => {
    if(window.innerWidth > 1392){   
        const tl = gsap.timeline({delay: 2})
    gsap.set(".portrait", {
        transformOrigin: "center center",
        scale: 1.2
    })
    tl.to(".portrait", {
        duration: 1,
        scale: 1,
        ease: "power2.inOut"
    }).from(".portrait", {
        duration: 0.75,
        xPercent:-50, 
        left:"50%", 
        yPercent:-50, 
        top:"50%",
        x:0, 
        y:'75%',
        ease: "power3.inOut"
    }, "start");

    let cardIntro = new SplitType(".cardIntro h2", {
        types: "words, lines"
    });

    tl.from(".cardIntro", {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        y: 100,
        x: 300,
        ease: "power2.inOut"
    }, "start").from(".cardIntro .vector-design", {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        rotate: -20,
        scale: 0,
        ease: "power2.inOut"
    }, "start").from(cardIntro.lines, {
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        y: 15,
        stagger: 0.2,
        ease: "power2.inOut"
    }, "start");
    tl.from(".navbar", {
        delay: 0.1,
        duration: 0.5,
        scale: 0,
        y: 50,
        ease: "power2.inOut",
    }, "start").from(".logo , .nav-links a", {
        delay: 0.6,
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: "power2.inOut"
    }, "start");
    tl.from(".projects", {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        x: -400,
        ease: "power2.inOut",
    }, "start").from(".project-name, .current-project .links", {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power2.inOut",
    }, "start").from(".current-project-image", {
        delay: 1,
        duration: 1,
        opacity: 0,
        ease: "power2.inOut",
    }, "start").from(".project-list li p", {
        delay: 1,
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.5,
        ease: "power2.inOut",
    }, "start");

    let about = new SplitType(".about h2", {
        types: "words, lines"
    });
    tl.from(".about", {
        duration: 1,
        opacity: 0,
        scale: 0,
        y: -200,
        x: 500,
        ease: "power2.inOut",
    }, "start").from(".about .vector-design", {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        scale: 0,
        rotate: -20,
        ease: "power2.inOut",
    }, "start").from(about.lines, {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        y: 15,
        stagger: 0.2,
        ease: "power2.inOut",
    }, "start");
    tl.from(".contact", {
        duration: 1,
        opacity: 0,
        scale: 0,
        y: -200,
        x: 50,
        ease: "power2.inOut",
    }, "start").from(".contact .contact-text ,.contact h2 , .contact a", {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: "power2.inOut",
    }, "start");
    tl.from(".socials", {
        duration: 1,
        opacity: 0,
        scale: 0,
        y: -200,
        x: -500,
        ease: "power2.inOut",
    }, "start").from(".socials .social-links a", {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: "power2.inOut",
        }, "start");
    }
});
});

if(window.innerWidth > 673 && window.innerWidth < 1392){
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(true);
    const tl = gsap.timeline({delay: 2})
    gsap.set(".portrait", {
        transformOrigin: "center center",
        width: "100%",
        scale: 1.2
    })
    tl.to(".portrait", {
        duration: 1,
        scale: 1,
        width: "35%",
        ease: "power2.inOut"
    }).from(".portrait", {
        duration: 0.75,
        xPercent: -50,  
        yPercent: -50, 
        top:"50%",
        x:50, 
        y:'50%',
        ease: "power3.inOut"
    }, "start");

    cardIntro = new SplitType(".cardIntro h2", {
        types: "words, lines"
    });

    tl.from(".cardIntro", {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        y: 100,
        x: 300,
        ease: "power2.inOut"
    }, "start").from(".cardIntro .vector-design", {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        rotate: -20,
        scale: 0,
        ease: "power2.inOut"
    }, "start").from(cardIntro.lines, {
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        y: 15,
        stagger: 0.2,
        ease: "power2.inOut"
    }, "start");
    tl.from(".navbar", {
        delay: 0.1,
        duration: 0.5,
        scale: 0,
        y: 50,
        ease: "power2.inOut",
    }, "start").from(".logo , .nav-links a", {
        delay: 0.6,
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: "power2.inOut"
    }, "start");
    about = new SplitType(".about h2", {
        types: "words, lines"
    });
    tl.from(".about", {
        duration: 1,
        opacity: 0,
        scale: 0,
        y: -200,
        x: 500,
        ease: "power2.inOut",
    }, "start").from(".about .vector-design", {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        scale: 0,
        rotate: -20,
        ease: "power2.inOut",
    }, "start").from(about.lines, {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        y: 15,
        stagger: 0.2,
        ease: "power2.inOut",
    }, "start");
    tl.from(".contact", {
        duration: 1,
        opacity: 0,
        scale: 0,
        y: -200,
        x: 50,
        ease: "power2.inOut",
    }, "start").from(".contact .contact-text ,.contact h2 , .contact a", {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: "power2.inOut",
    }, "start");
    const tl2 = gsap.timeline();
    tl2.from(".projects", {
        duration: 1,
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: ".projects",
            start: "-20% 80%",
            end: "80% bottom",
            scrub: 2, 
        },
        ease: "power2.inOut",
    }, "start").from(".project-name, .current-project .links", {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power2.inOut",
    }, "start").from(".current-project-image", {
        delay: 1,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".projects",
            start: "top 60%",
            end: "80% bottom",
            scrub: 2
        },
        ease: "power2.inOut",
    }, "start").from(".project-list li p", {
        delay: 1,
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 1,
        scrollTrigger: {
            trigger: ".projects",
            start: "top 60%",
            end: "80% bottom",
            scrub: 2
        },
        ease: "power2.inOut",
    }, "start");
    tl.from(".socials", {
        duration: 1,
        y: -10,
        scrollTrigger: {
            trigger: ".socials",
            start: "top 93%",
            end: "80% bottom",
            scrub: 2
        },
        ease: "power2.inOut",
    }, "start").from(".socials .social-links a", {
        duration: 1,
        opacity: 0, 
        y: 20,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".socials",
            start: "top bottom",
            end: "50% 90%"
        },
        ease: "power2.inOut",
        },"start");
    
}

if(window.innerWidth < 673){
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(true);
    const tl = gsap.timeline({delay: 2})
    gsap.set(".portrait", {
        transformOrigin: "center center",
        scale: 0.8
    })
    tl.to(".portrait", {
        duration: 1,
        scale: 1,
        ease: "power2.inOut"
    }).from(".portrait", {
        duration: 0.75,
        yPercent:-150, 
        top:"50%",
        x:0, 
        y:'60%',
        ease: "power3.inOut"
    }, "start");

    tl.from(".navbar", {
        delay: 0.1,
        duration: 0.5,
        scale: 0,
        y: 50,
        ease: "power2.inOut",
    }, "start").from(".logo , .nav-links a", {
        delay: 0.6,
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: "power2.inOut"
    }, "start");
    cardIntro = new SplitType(".cardIntro h2", {
        types: "words, lines"
    });
    tl.from(".cardIntro", {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        y: 100,
        ease: "power2.inOut"
    }, "start").from(".cardIntro .vector-design", {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        rotate: -20,
        scale: 0,
        ease: "power2.inOut"
    }, "start").from(cardIntro.lines, {
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        y: 15,
        stagger: 0.2,
        ease: "power2.inOut"
    }, "start");
    const tl2 = gsap.timeline();
    about = new SplitType(".about h2", {
        types: "words, lines"
    });
    tl2.from(".about", {
        duration: 1,
        opacity: 0,
        y: -200,
        scrollTrigger: {
            trigger: ".about",
            start: "30% 80%",
            end: "bottom 60%",
            scrub: 2
        },  
        ease: "power2.inOut",
    }, "start").from(".about img", {
        duration: 1,
        opacity: 0,
        scale: 0,
        rotate: -20,
        scrollTrigger: {
            trigger: ".about",
            start: "bottom 80%",
            end: "bottom 60%",
            scrub: 2, 
        },
        ease: "power2.inOut",
    }).from(about.lines, {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        y: 15,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".about",
            start: "bottom 80%",
            end: "bottom 60%",
            scrub: 2, 
        },
        ease: "power2.inOut",
    });
    const tl3 = gsap.timeline();
    tl3.from(".contact .contact-text ,.contact h2 , .contact a", {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".contact",
            start: "50% bottom",
            end: "bottom 60%",
            scrub: 2
        },
        ease: "power2.inOut",
    }, "start");
    const tl4 = gsap.timeline();
    tl4.from(".projects", {
        duration: 1,
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: ".projects",
            start: "-20% 80%",
            end: "80% bottom",
            scrub: 2, 
        },
        ease: "power2.inOut",
    }, "start").from(".project-name, .current-project .links", {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power2.inOut",
    }, "start").from(".current-project-image", {
        delay: 1,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".projects",
            start: "top 60%",
            end: "80% bottom",
            scrub: 2
        },
        ease: "power2.inOut",
    }, "start").from(".project-list li p", {
        delay: 1,
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 1,
        scrollTrigger: {
            trigger: ".current-project-image",
            start: "top 60%",
            end: "80% bottom",
            scrub: 2
        },
        ease: "power2.inOut",
    }, "start");
}


window.addEventListener("resize", () => {
    cardIntro = new SplitType(".cardIntro h2", {
        types: "words, lines"
    });
    about = new SplitType(".about h2", {
        types: "words, lines"
    });
});


