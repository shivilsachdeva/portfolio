console.log("Connected");
    

// NAVIGATION
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


// SLIDER
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children); 
const nextBtn = document.querySelector('.carousel-btn-right');
const prevBtn = document.querySelector('.carousel-btn-left');
const dotNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotNav.children); 
const slideWidth = slides[0].getBoundingClientRect().width;

// slide position loop function
    const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'; 
    }

// update dot class function
const updateDots = (currentDot, targetDot) => { 
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
    }

const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
    if (targetIndex === 0){
        prevBtn.classList.add('is-hidden'); 
        console.log("That's a wrap, son.");
        nextBtn.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevBtn.classList.remove('is-hidden'); 
        console.log("That's a wrap, son.");
        nextBtn.classList.add('is-hidden'); 
    } else {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.remove('is-hidden');
    }
}

// const unlinkArrows = (slides, prevBtn, nextBtn, targetIndex) => {
//     console.log("LOGGED ARROW UNLINK");
//     if (targetIndex === 0){
//         prevBtn.removeEventListener('click', moveToSlide); 
//     } else if (targetIndex === slides.length - 1) {
//         nextBtn.removeEventListener('click', moveToSlide); 
//     }
// }

// function call for slide position
    slides.forEach(setSlidePosition); 

// function - move to target slide
    const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'; 
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    }

// right [next] button
    nextBtn.addEventListener('click', e => { 
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling; 
    const currentDot = dotNav.querySelector('.current-slide'); 
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide); 

    moveToSlide(track, currentSlide, nextSlide); 
    updateDots(currentDot, nextDot);
    // unlinkArrows(slides, prevBtn, nextBtn, nextIndex);
    hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
    });

// left [prev] button
prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling; 
    const currentDot = dotNav.querySelector('.current-slide'); 
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide); 


    moveToSlide(track, currentSlide, prevSlide); 
    updateDots(currentDot, prevDot);
    // unlinkArrows(slides, prevBtn, nextBtn, prevIndex);
    hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
    });

// dot navigation
dotNav.addEventListener('click', e => {
    // set current + targets
    const targetDot = e.target.closest('button');
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotNav.querySelector('.current-slide'); 
    // find index of next slide dot
    const targetIndex = dots.findIndex(dot => dot === targetDot); 
    const targetSlide = slides[targetIndex]; 

    moveToSlide(track, currentSlide, targetSlide); 
    updateDots(currentDot, targetDot);
    // unlinkArrows(slides, prevBtn, nextBtn, targetIndex);
    hideShowArrows(slides, prevBtn, nextBtn, targetIndex);
    });

 