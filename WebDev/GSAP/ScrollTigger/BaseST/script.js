// let Page1 = document.createElement('Page1');
// Page1.style.height = '100%';
// Page1.style.width = '100%';
// Page1.style.backgroundColor = 'salmon';
// document.querySelector("body").appendChild(Page1);



// let Page2 = document.createElement('Page2');

// document.querySelector("body").appendChild(Page2);

// let Page3 = document.createElement('Page3');
// document.querySelector("body").appendChild(Page3);

gsap.from("#page1 #circle", {
    scale:0,
    delay:1,
    duration:2,
    rotate: 360
})

gsap.from("#page2 #circle", {
    scale:0,
    // delay:1,
    duration:2,
    rotate: 360,
    scrollTrigger : {
        trigger: "#page2 #circle",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 38%",
        scrub: 2
    }
})

gsap.from("#page3 #circle", {
    scale:0,
    duration:2,
    rotate: 360,
    scrollTrigger : {
        trigger: "#page3 #circle",
        scroller: "body",
        markers: true,
        start: "top 90%",
        end: "top 50%",
        scrub: 2
    }
})