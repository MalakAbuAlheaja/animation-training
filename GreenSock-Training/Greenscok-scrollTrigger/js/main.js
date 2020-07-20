
gsap.registerPlugin(ScrollTrigger);

function init() { 
    //animation of topbar
    gsap.to(['#topbar', 'header'], { y:-120, scrollTrigger:{
        trigger: '#topbar',
        start: 'top top',
        scrub:true,
   }}) ;

 
// animation of fadeing bg and text 
    gsap.to('#intro', {opacity:0, scrollTrigger:{
            trigger: '#intro',
            start: 'top top',
            scrub:true,
       }}) ;

       gsap.to('#headertitle', {y:-400, scrollTrigger: {
        trigger: '#intro',
        start: 'top top',
        scale: 0.5,
        ease:Linear.easeNone,
        scrub:true,
    }});
       
// Animation of firstblock section
        let split = new SplitText(".headerTitle");

        let tl = gsap.timeline({
            scrollTrigger:{
            trigger:"#first-block",
            start:"top 50%",
            end:"bottom top",
            toggleActions:"restart none none reset"
        }})
        .from(split.chars, {yPercent:-100,  stagger:0.05, duration:0.3, ease:"back"})
        .from(split.chars, {opacity:0, stagger:0.05, duration:0.2}, 0)
        .from(".headerText", {y:100, opacity:0, ease:"back", duration:2}, "<2")
        .from(".white-btn", {y:100, opacity:0, ease:"back", duration:1}, "<1")
        .set('#first-block', {backgroundColor:'#2b4d66'});

        
  //Animation of feature
        let split2 = new SplitText(".title");
        let tl2 = gsap.timeline({
            scrollTrigger:{
            trigger:"#features",
            start:"top 50%",
            end:"bottom top",
            toggleActions:"restart none none reset"
        }})
        .from('.icon', {x:-50,duration: 2, rotationY:180, stagger:0.05,ease:"back"})
        // .from(split2.chars, {yPercent:-100,  stagger:1, duration:0.3, ease:"back"})
        .from(split2.chars, {opacity:0, stagger:0.03, duration:0.2}, 0)
        .from(".title", {y:100, opacity:0, ease:"back", duration:1}, "<2")
        .from(".desc", {y:100, opacity:0, stagger:0.3, ease:"back", duration:1}, "<1");
        


        //Animation of About-us
        let split3 = new SplitText(".article-title");
        let tl3 = gsap.timeline({
            scrollTrigger:{
            trigger:"#about-us",
            start:"top 50%",
            end:"bottom top",
            toggleActions:"restart none none reset"
        }})
        .from(".media-container", {y:100, opacity:0, ease:"back", duration:3}, "<1")
        .from(split3.chars, {opacity:0, stagger:0.08, duration:1}, 0)
        .from(".article-desc", {x:-100, opacity:0, ease:"back", duration:2}, "<2")
        .from(".ico", {x:200, opacity:0, stagger:0.5, ease:"rough", duration:1}, "<1");



      //Animation of our work

      let tl4 = gsap.timeline({
        scrollTrigger:{
        trigger:"#our-work",
        start:"top 50%",
        end:"bottom top",
        toggleActions:"restart none none reset"
    }})
    .from(".section-title", {y:100, opacity:0, ease:"back", duration:0.8})
    .from(".tab-label", {x:100, opacity:0, stagger:0.2, ease:"rough", duration:1}, 0)
    .from(".tab-content", {y:-100, opacity:0, ease:"back", duration:0.5}, 0)
    .from(".our-work-container", {x:100, height:'150%',width:'150%',opacity:0, stagger:0.2, ease:"rough"}, "<1")

    
    
    //Animation of WHAT WE DO
    let split5 = new SplitText(".services-title");
    let tl5 = gsap.timeline({
        scrollTrigger:{
        trigger:"#services",
        start:"top 50%",
        end:"bottom top",
        toggleActions:"restart none none reset"
    }})
    .from("#services", {y:-100, duration:0.8})
    .from(split5.chars, {opacity:0, stagger:0.3, duration:1}, 0)
    .from(".service-text", {x:-100,opacity:0, stagger:0.3, ease:"rough"}, "<1")
    .from(".service-ico", {y:100,opacity:0, stagger:0.4, ease:"rough"}, "<1")
    
    //Animation of latest-news
    let split6 = new SplitText(".latest-news-title ");
    let tl6 = gsap.timeline({
        scrollTrigger:{
        trigger:"#latest-news",
        start:"top 50%",
        end:"bottom top",
        toggleActions:"restart none none reset"
    }})
    
    .from(split6.chars, {x:100, opacity:0, stagger:0.3, duration:1}, 0)
    .from(".latest-left", {x:-100,opacity:0, ease:"rough"}, "<1")
    .from(".latest-right", {x:100,opacity:0,  ease:"rough"}, 0)
    
    
    //Animation of Contact us

    let split7 = new SplitText(".contact-title ");
    let tl7 = gsap.timeline({
        scrollTrigger:{
        trigger:"#contact",
        start:"top 50%",
        end:"bottom top",
        toggleActions:"restart none none reset"
    }})
    
    .from(split7.chars, {y:50, opacity:0, stagger:0.3, duration:0.8}, 0)
    .from(".contact-left", {x:-100,opacity:0, ease:"rough"}, "<1")
    .from(".contact-center", {y:100,opacity:0,  ease:"rough"}, 0)
    .from(".p-desc", {y:-20,opacity:0, stagger:0.4, ease:"back"}, "<0.5")
    .from(".contact-right", {x:100,opacity:0,  ease:"rough"}, 0)
    .from(".form-input", {x:100,opacity:0, stagger:0.4, ease:"rough"}, "<0.5");

 
}

    window.addEventListener('load', function(){
        init();
    });