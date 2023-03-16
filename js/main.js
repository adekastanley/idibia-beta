
paceOptions = {
  ajax: true,
  document:true

  }

Pace.on('done', ()=> {
  
  gsap.timeline()
  .add('p')
  .to('.pace',{
    transform: 'scale(10,1)',
    duration:4
  },'+= 0.2')
  .to('.pace', {
    duration: 1,
    height: '100%'
  },"-=3")
  .to('.loader-text', {
    delay: .2,
    duration: 3,
    opacity: 0,
    yPercent: 'BezierEasing(0.19,1,0.22,1)'
  },'p')
  .to('.hero-img', {
    duration: 2,
    delay: .3,
    y: -10,
    opacity: 1,
    ease: Expo.easeInOut
  }, "-=2.5")
})