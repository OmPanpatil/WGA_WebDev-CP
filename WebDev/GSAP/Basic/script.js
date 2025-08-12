let train = gsap.timeline();

train.to("#box",{
    x: 1000,
    backgroundColor : "red",
    duration: 2,
    rotate: 360,
    delay: 1,
    scale: 0.2
})

train.from("#circle", {
    x:1000,
    backgroundColor: "blue",
    duration: 3,
    rotate: 180,
    delay:1.5,
    scale: 0.5
})