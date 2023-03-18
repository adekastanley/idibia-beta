//
// navigation
//

const toggler = document.querySelector(".nav-btn");


gsap.timeline()

.to(".nav-container", {
  delay: 3,
  duration: 1,
  opacity: 1,
  yPercent: "BezierEasing(0.19,1,0.22,1)",
}, );

let closed = true;
toggler.addEventListener("click", () => {
  if (closed) {
    closed = false;
    gsap.timeline().to(".ul-wrapper", {
      x: 0,
    });
  } else {
    closed = true;
    gsap.timeline().to(".ul-wrapper", {
      x: -250,
    });
  }
});

paceOptions = {
  ajax: true,
  document: true,
};

Pace.on("done", () => {
  gsap
    .timeline()
    .add("p")
    .to(
      ".pace",
      {
        transform: "scale(10,1)",
        duration: 4,
      },
      "+= 0.2"
    )
    .to(
      ".pace",
      {
        duration: 1,
        height: "100%",
      },
      "-=3"
    )
    .to(
      ".loader-text",
      {
        delay: 0.2,
        duration: 3,
        opacity: 0,
        yPercent: "BezierEasing(0.19,1,0.22,1)",
      },
      "p"
    )
    .to(
      ".hero-img",
      {
        duration: 2,
        delay: 0.3,
        y: -10,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      "-=2.5"
    );
});





setTimeout(() => {
  const containers = document.querySelectorAll('.container');
  containers.forEach((target)=> {
    target.style.display = 'flex'
  })
}, 3000);

// 
// section 2
// 


// particles 
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

// text 

gsap.registerPlugin(ScrollTrigger);
gsap.timeline()



gsap.timeline()
  .from(".section-2-top-text", {
    delay: 1,
    duration: 1,
    opacity: 0,
    y: 80,
    yPercent: "BezierEasing(0.19,1,0.22,1)",
    scrollTrigger: {
      trigger: ".section-2-top-text",
      start: "top 90%",
      end: "bottom 60%",
      scrub: true
    }
  });

gsap.timeline()
  .from(".section-2-bottom-text", {
    delay: 2,
    duration: 1,
    opacity: 0,
    y: 80,
    yPercent: "BezierEasing(0.19,1,0.22,1)",
    scrollTrigger: {
      trigger: ".section-2-bottom-text",
      start: "top 90%",
      end: "bottom 60%",
      scrub: true
    }
  })
  .from(".service", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: .5,
    yPercent: "BezierEasing(0.19,1,0.22,1)",
    scrollTrigger: {
      trigger: ".section-3",
      start: "top 60%",
      end: "bottom 80%",
      scrub: true
    }
  })

  .from(".left-tag-container", {

    duration: 1,
    opacity: 0,
    x: -200,

    yPercent: "BezierEasing(0.19,1,0.22,1)",
    scrollTrigger: {
      trigger: ".section-3",
      start: "top bottom",
      end: "bottom 80%",
      scrub: true
    }
  })


// gsap.timeline()
//   .from(".one",{xPercent: -100})
//     // .from(".two",{xPercent: 100})
//     // .from(".three",{yPercent: 100})

// ScrollTrigger.create({
//   animation: '.one',
//   trigger: ".section-3",
//   start:  "top center",
//   end: "+=4000",
//   scrub: true,
//   pin: true,
//   anticipatePin: 1

// })

// 
// 
// carousel
// 
// 


const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);