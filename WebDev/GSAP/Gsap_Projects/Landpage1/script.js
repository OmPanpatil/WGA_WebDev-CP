let tl = gsap.timeline()

tl.from("#nav h3", {
    y: -60,
    delay:0.2,
    opacity:0,
    duration:1.5,
    ease:"power2.inOut",
    stagger :0.4
})

tl.from("#main h1",{
    x: -500,
    delay:0.5,
    opacity:0,
    duration:0.8,
    stagger:0.25
});

tl.from("img", {
    x:100,
    rotate: 45,
    opacity:0,
    duration:1.5,
    stagger:0.5
})

// tl.from("foot", {
//     y: 300,
//     opacity:0,
//     duration:1.5,
//     delay:0.2,
//     stagger:0.5
// })

gsap.from("#namee", {
    y: 300,
    opacity:0,
    duration:1,
    delay:6.4,
    // stagger:0.5
})

gsap.from("#basee", {
    y: 300,
    opacity:0,
    duration:1,
    delay:6.4,
    // stagger:0.5
})