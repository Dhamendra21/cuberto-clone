
function carousal(){
  let data = [
    {src:"https://cdn.cuberto.com/cb/upload/480b30071a8533b278c30dd7d9133f09.png",
        text:"Make Epic Website // Frontend development"
    },
    {
        src:'https://cdn.cuberto.com/cb/upload/885fbbc555395f745746b23b73f539f5.png',
        text:"cuberto mouse follower"
    },
    {
      src:'https://cdn.cuberto.com/cb/upload/ef20532e8de88a471d4bd1338dc93414.png',
      text:"UI/UR design tips/ volume 9"
    },
    {
      src:'https://cdn.cuberto.com/cb/upload/22762396e9f8195e6e3f33c6be52ac25.png',
      text:"Liquid navigation in After Effects "
    },
    {
      src:"https://cdn.cuberto.com/cb/upload/a1ed16046501be2d945ca6b223f26d14.png",
      text:"How to prepare your design portfolio on Behance"
    }
   
]
let carosouls = document.querySelector("#carosouls")
data.forEach(e=>{
    carosouls.innerHTML += `
    <div class="card flex-shrink-0 w-[100%]">
            <img src="${e.src}" alt="">
            <p class="text-2xl pt-3">${e.text}</p>
          </div>
    `
})
}

function shery(){
  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  
  });
  Shery.makeMagnet(".magnet")
  Shery.imageMasker(".p2-video" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Pause",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    
  });
  Shery.imageMasker(".grid-item" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Explore",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    
  });
  // Shery.imageMasker(".card" /* Element to target.*/, {
  //   //Parameters are optional.
  //   mouseFollower: true,
  //   text: "Explore",
  //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  //   duration: 1,
    
  // });
  

  

}
let video = document.querySelectorAll('video')
video.forEach(e=>{
  e.addEventListener('mouseenter',()=>{
    console.log("mouse aaya")
    e.play()
  })
  e.addEventListener('mouseleave',()=>{
    e.pause()
  })
})
function locomotive(){
  

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

// console.log(gsap)
function animation() {
  let tl = gsap.timeline();

let btn = document.querySelector('.btn')
btn.addEventListener('mouseenter',()=>{

  gsap.to(btn, {
    backgroundColor: "black",
    // y:"130%",
    color:"white",
    ease:'power3'
    // opacity:0
  });
})
btn.addEventListener("mouseleave",()=>{
  gsap.to(btn, {
    backgroundColor: "white",
    color:"black",
    // height:0,
    ease:'power3'
    // opacity:0
  });
})


tl.to(".p1-heading", {
  y:0,
  stagger:0.8,
  duration:2,
  ease:"power3"
})

gsap.to(".p4-text", {
  y:0,
  scrollTrigger:{
    trigger:'.page4',
    scroller:".main",
    markers:true,
    start: "top 50%"
  }
});

}   

carousal()
shery()
locomotive()
animation()
