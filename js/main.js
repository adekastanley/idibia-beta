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
      // end: "bottom top",
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
      // end: "bottom top",
      scrub: true
    }
  });


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