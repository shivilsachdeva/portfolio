console.log("Connected");




	
var t1 = new TimelineMax({paused: true});

t1.to(".one", 0.5, {
    y: 3,
    rotation: 45,
    ease: Expo.easeInOut,
    // delay: 0
});

t1.to(".two", 0.3, {
    y: 3,
    rotation: -45,
    ease: Expo.easeInOut,
    delay: -0.449
});

t1.to(".menu", 0.3, {
    top: "0%",
    position: "absolute",
    ease: Expo.easeInOut,
    delay: -0.2
});


t1.staggerFrom(".menu ul li", 0.6, {x: -300, opacity: 0, ease:Expo.easeInOut}, 0.2);

t1.reverse(); 
$(document).on("click", ".toggle-btn", function() {
    t1.reversed(!t1.reversed());
}); 

$(document).on("click", ".nav-link", function() {
    t1.reversed(!t1.reversed());
}); 
