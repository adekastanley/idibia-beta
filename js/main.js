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


// 
// section one - services
// 



setTimeout(() => {
  const containers = document.querySelectorAll('.container');
  containers.forEach((target)=> {
    target.style.display = 'block'
  })
}, 6000);