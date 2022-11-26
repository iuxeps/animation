// import Bootstrap from 'bootstrap';
// import Fancybox from 'fancybox';
// import Swiper from 'swiper';

// Gsap.js
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    const section = document.querySelectorAll('.section');
    const imgs = document.querySelectorAll('.section__img');

    for (let index = 0; index < section.length; index++) {
        const element = section[index];
        element.style.zIndex = "-" +index;
    }

    gsap.utils.toArray(".section__img").forEach(img => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: img,
                start: "center center",
                end: () => "+=" + section[0].offsetHeight,
                scrub: true,
                pin: true,
                pinSpacing: false,
                ease: 'power2.easeOut'
            },
        });

        // tl.fromTo(img, { yPercent: 0, y: 0 }, { yPercent: 0 });
    });


    gsap.utils.toArray(".section__title").forEach(title => {
        const anim = gsap.to(title, {
            y: 0,
            duration: .5,
        });

        ScrollTrigger.create({
            trigger: title,
            animation: anim,
        });
    });

    gsap.utils.toArray(".section__text").forEach(text => {
        const anim = gsap.to(text, {
            y: 0,
            x: 0,
            duration: .5
        });

        ScrollTrigger.create({
            trigger: text,
            animation: anim,
        });
    });

    gsap.utils.toArray(".section__button").forEach(icon => {
        const anim = gsap.to(icon, {
            y: 0,
            x: 0,
            duration: 1
        });

        ScrollTrigger.create({
            trigger: icon,
            animation: anim,
        });
    });



});
