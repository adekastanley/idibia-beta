//
// navigation
//

const toggler = document.querySelector(".nav-btn");


gsap.timeline()
.add("p")
.to(".nav-container", {
  delay: .8,
  duration: 3,
  opacity: 1,
  yPercent: "BezierEasing(0.19,1,0.22,1)",
},   "p");

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

// toggler.addEventListener('click', ()=> {
//   let closed = true;

//   if (closed){

//     closed = false

//   } else if (state === false ){

//     closed = true;

//   }
// })
