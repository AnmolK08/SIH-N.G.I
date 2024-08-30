
function locomotiveJS(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}


function loaderAnimation(){
  var tl =gsap.timeline();

tl.from("#loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.1
})

tl.to("#loader h3",{
  x:-10,
  opacity:0, 
  stagger:0.1,
  duration:1
})

tl.to("#loader",{
  opacity:0
})
tl.from("#page1 nav #nav-2 a",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.5,
  delay:-0.5
})
//   tl.from("#page1-b h1",{
//     y:100,
//     opacity:0,
//     stagger:0.1,
//     duration:0.5,
//     delay:-0.5
//   })
tl.to("#loader",{
  display:"none"
})


}


locomotiveJS();
loaderAnimation();




const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
  container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
  container.classList.remove("active");
});

var joinButton = document.querySelector("#page1-b #button1");
var loginButton = document.querySelector("#page1 nav .nav-3  h3 a");
var closeButton = document.querySelector(".toggle-container .toggle .toggle-left .closed");
var closeButton2 = document.querySelector(".toggle-container .toggle-right .closed");

var loginPage = document.querySelector(".login-page");

loginButton.addEventListener("click", function(){
  gsap.to(loginPage,{
    top:"0",
    left:"0",
      opacity:1,
      duration:1,
      ease: "power2.out",
      display: "flex",
      justifyContent:"center",
      alignItems: "center "
  })

  

})
joinButton.addEventListener("click", function(){
  gsap.to(loginPage,{
    top:"0",
    left:"0",
      opacity:1,
      duration:1,
      ease: "power2.out",
      display: "flex",
      justifyContent:"center",
      alignItems: "center "
  })
  

})

closeButton.addEventListener("click", function(){
  gsap.to(loginPage,{
    top:"-100vh",
      opacity:0,
      display: "none",
      duration:2,
      ease: "power2.out"
  })
  console.log("bdkjefhw");
})

closeButton2.addEventListener("click", function(){
  gsap.to(loginPage,{
    top:"-100vh",
      opacity:0,
      display: "none",
      duration:2,
      ease: "power2.out"
  })
  console.log("bdkjefhw");
})

let menuopen = document.querySelector(".ri-menu-line");
var menuclose = document.querySelector(".ri-close-fill");

menuopen.addEventListener("click", function () {
document.querySelector("#nav-2").style.top = "4rem";
})
menuclose.addEventListener("click", function () {
  document.querySelector("#nav-2").style.top = "-15rem";
  })

