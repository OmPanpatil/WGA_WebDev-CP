gsap.to("#page2 #imag3", {
    // scale:0,
    // duartion:3,
    // rotate: 360,
    // scrollTrigger : {
    //     trigger : "#page2 #imag3",
    //     scroller: "body",
    //     markers: true,
    //     start: "top 80%",
    //     end: "top 45%",
    //     scrub:2
    // }

    width:"100%",
    scrollTrigger : {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub:2,
        pin:true
        
    }
})