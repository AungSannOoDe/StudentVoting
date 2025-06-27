"use Strict";
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
// const t1=gsap.timeline({repeat:-1,yoyo:true})

let text = document.querySelectorAll("[data-role]")
let split = SplitText.create(text, { type: "chars,words,lines" });
let C=document.getElementById("heroSection")
let School=document.getElementById("SchoolImg")
const Outer=document.getElementById("scroll-section-outer")
const Inner=document.getElementById("scroll-section-inner")


   document.addEventListener('DOMContentLoaded', function() {
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:C,
            start: "top 80%",
            toggleActions:"play none none none"
        }
    });
    tl.from(School,{
        scale: 0,
        duration: 0.8,  // Slightly longer for smoother transition
        ease: "back.out(1.7)",
        immediateRender: false  // E
    })
    .to(School, {
        scale: 1.05,    // Slightly overshoot for bounce effect
        duration: 0.5,
        ease: "power2.out"
    })
    .to(School, {
        scale: 1,       // Settle back to normal scale
        duration: 0.3
    });




    tl.from(split.chars, {
        y: -100,
        opacity: 0,
        rotation: "random(-80, 80)",
        duration: 0.3,
        ease: "back",
        stagger: 0.05,
    })
    .to(document.getElementById("Spice"), {
      duration: 1.6,
      text: "Welcome",
      ease: "power2.inOut",
      repeat:-1,yoyo:true
    }, "+=0.5"); 

    gsap.fromTo(document.getElementById("scroll"),{
    y:-20
    },{
        y:0,
        duration:1,
        ease: "bounce.Out",
        repeat:-1,
        yoyo:true
    })

    gsap.fromTo(Inner,{
        translateX:0
    },{
        translateX:"-500vw",
        ease:"none",
        duration:1,
        scrollTrigger:{
            trigger:Outer,
            start:"top top",
            end:"2000 top",
            scrub:0.6,
            pin:true
        }
    }
    )
    const sliderImages = document.querySelectorAll('.slider-img');
    const trackImages = document.querySelectorAll('.track-img');
    // Initialize GSAP animations
    gsap.set('  .slider-img:not(.active)', { scale: 0.9 });
    gsap.set('   .slider-img.active', { scale: 1 });
    gsap.set('  .track-img:not(.active)', { scale: 0.9 });
    gsap.set('   .track-img.active', { scale: 1 });

    sliderImages.forEach(img => {
      img.addEventListener('click', function() {
        // Remove active class from all images
        sliderImages.forEach(i => {
          i.classList.remove('active');
          gsap.to(i, { 
            scale: 0.9, 
            duration: 0.7, 
            ease: "power2.out" 
          });
        });
            
        // Add active class to clicked image
        this.classList.add('active');
            
        // Animate the active image
        gsap.to(this, { 
          scale: 1, 
          duration: 0.7, 
          ease: "power2.out" 
        });
            
        // Optional: Center the active image in view
        this.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest', 
          inline: 'center' 
        });
      });
    });
    trackImages.forEach(img => {
      img.addEventListener('click', function() {
        // Remove active class from all images
        trackImages.forEach(i => {
          i.classList.remove('active');
          gsap.to(i, { 
            scale: 0.9, 
            duration: 0.7, 
            ease: "power2.out" 
          });
        });
            
        // Add active class to clicked image
        this.classList.add('active');
            
        // Animate the active image
        gsap.to(this, { 
          scale: 1, 
          duration: 0.7, 
          ease: "power2.out" 
        });
            
        // Optional: Center the active image in view
        this.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest', 
          inline: 'center' 
        });
      });
    });
    // Make slider responsive
    function handleResize() {
      if (window.innerWidth < 768) {
        // Mobile adjustments
        document.querySelectorAll('  .slider-img').forEach(img => {
          img.classList.remove('active');
        });
        document.querySelectorAll('  .track-img').forEach(img => {
            img.classList.remove('active');
          });
        // Activate the middle image by default on mobile
        document.querySelectorAll(' .slider-img')[3].classList.add('active');
        document.querySelectorAll(' .track-img')[3].classList.add('active');

      }
    }
    // Initial call and event listener
    handleResize();
    window.addEventListener('resize', handleResize);  
  });

