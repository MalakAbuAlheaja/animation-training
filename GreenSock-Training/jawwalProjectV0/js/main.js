
gsap.registerPlugin(ScrollTrigger);

function init() { 
    
   //Animation of vedio
       let vedio = gsap.timeline({
        scrollTrigger:{
        trigger:".intro",
        start:"top 40%",
        end:"bottom top",
        toggleActions:"restart none none reset",
        // markers:true
    }})

    .to("#uke", {width:'50%' ,height:"100%",ease:"back" ,duration:3}, "<2")
    .from("#headertitle", {y:'400', opacity:0, ease:"back", duration:2}, "<2")


// Animation of firstblock section
        let split = new SplitText(".headerTitle");

        let tl = gsap.timeline({
            scrollTrigger:{
            trigger:"#first-block",
            start:"top 10%",
            end:"bottom top",
            toggleActions:"restart none none reset",
            // markers:true
        }})
            .from(split.chars, {yPercent:-200,  stagger:0.05, duration:0.3, ease:"back"})
            .from(split.chars, {opacity:0, stagger:0.05, duration:0.2}, 0)
            .from(".headerText", {y:300, opacity:0, ease:"back", duration:2}, "<2")
            .from(".white-btn", {y:300, opacity:0, ease:"back", duration:1}, "<1");
     

// Animation of second-block section
    
    let second = gsap.timeline({
        scrollTrigger:{
        trigger:"#second-block",
        start:"top 40%",
        end:"bottom top",
        toggleActions:"restart none none reset",
        // markers:true
    }})
        .to("#mobile", {scaleX:'0.4',scaleY:'0.43',duration:2}, "<0")
        .to("#second-block", {backgroundColor:"#000"}, "<0")
        .from(".second-block-title", {y:300, opacity:0, ease:"back", duration:1}, "<1")
        .from(".second-block-desc", {y:300, opacity:0,ease:"back", duration:1}, "<0")
        .from(".counter", {y:220, opacity:0, stagger:{from :"end" , each:0.6}, ease:"back", duration:1}, "<1")
        .from(".counter-text", {scale:1.5, stagger:{from :"end" , each:0.4},ease:"back", duration:1}, "<0.5")
        .staggerFromTo('.number3 li',11,{y:15}, {y:-200} , +0.15,"<0.5")
        .staggerFromTo('.number2 li',11,{y:15}, {y:-200 } , +0.15,"<0.5")
        .staggerFromTo('.number1 li',11,{y:15}, {y:-200 } , +0.15,"<0.5")
        .to(".second-hero", {rotate:"-90", ease:"Power3.easeIn", duration:2}, "<2")
        .to(".second-hero", {y:'-210', duration:1}, "<0")
        .to(".second-hero", {x:"500", ease:"Power3.easeIn", duration:5,opacity:0}, "<0.5");
        
    // Animation of counters   
        var item = $(".zoom");
        for (i=0; i<item.length; i++) {
          tl0 = gsap.timeline({
            scrollTrigger:{
                trigger:"#second-block",
            }})
            
          .from(item[i], 1, {scale:1,delay:i*2})
          .to(item[i], 1, {scale:1.2}, "+=1")
          .to(item[i], 1, {scale:1}, "+=1");
        };
        var item = $(".zoom1");
        for (i=0; i<item.length; i++) {
          tl1 = gsap.timeline({
            scrollTrigger:{
                trigger:"#second-block",
            }})
            
          .from(item[i], 1, {scale:1,delay:i*2})
          .to(item[i], 1, {scale:1.2}, "+=1")
          .to(item[i], 1, {scale:1}, "+=1");
        };

        var item = $(".zoom2");
        for (i=0; i<item.length; i++) {
          tl2 = gsap.timeline({
            scrollTrigger:{
                trigger:"#second-block",
            }})
            
          .from(item[i], 1, {scale:1,delay:i*2})
          .to(item[i], 1, {scale:1.2}, "+=1")
          .to(item[i], 1, {scale:1}, "+=1");
        } ;
       
        
        
// Animation of third-block section
    
    let third = gsap.timeline({
        scrollTrigger:{
        trigger:"#third-block",
        start:"top 40%",
        end:"bottom top",
        toggleActions:"restart none none reset",
    }})
    .from(".third-block-title", {x:300, opacity:0, ease:"back", duration:1}, "<0")
    .from(".third-block-desc1", {x:300, opacity:0,ease:"back",duration:1}, "<0")
    .from(".third-block-desc2", {x:300, opacity:0,ease:"back",duration:1}, "<0.2")
    .from(".current-program", {y:70, opacity:0,ease:"back",duration:1}, "<0")
    .from(".change-program", {y:60, opacity:0,ease:"back",duration:1}, "<0")
    .from(".arrow", {y:80,ease:"bounce",duration:7}, "<0")
    .from(".choosen-program", {y:50, opacity:0,ease:"back",duration:1}, "<0");
    
    let gift = gsap.timeline({
      scrollTrigger:{
      trigger:"#gift",
      start:"top 20%",
      end:"bottom top",
      toggleActions:"restart none none reset",
      markers:true
  }})
   .to(".gift-title", {y:'-750', ease:"back", duration:2}, "<0")
   .to("#gift1", {y:'-300', opacity:1,ease:"back", duration:3}, "<2")
   .to("#gift1", {scale:1, opacity:1,ease:"back", duration:1}, "<1")
   .to(".gift-title", {opacity:0, ease:"back", duration:1}, "<0")

  ;

 



  //Animation of feature
        // let split2 = new SplitText(".title");
        // let tl2 = gsap.timeline({
        //     scrollTrigger:{
        //     trigger:"#features",
        //     start:"top 50%",
        //     end:"bottom top",
        //     toggleActions:"restart none none reset"
        // }})
        // .from('.icon', {x:-50,duration: 2, rotationY:180, stagger:0.05,ease:"back"})
        // // .from(split2.chars, {yPercent:-100,  stagger:1, duration:0.3, ease:"back"})
        // .from(split2.chars, {opacity:0, stagger:0.03, duration:0.2}, 0)
        // .from(".title", {y:100, opacity:0, ease:"back", duration:1}, "<2")
        // .from(".desc", {y:100, opacity:0, stagger:0.3, ease:"back", duration:1}, "<1");
        


        //Animation of About-us
        // let split3 = new SplitText(".article-title");
        // let tl3 = gsap.timeline({
        //     scrollTrigger:{
        //     trigger:"#about-us",
        //     start:"top 50%",
        //     end:"bottom top",
        //     toggleActions:"restart none none reset"
        // }})
        // .from(".media-container", {y:100, opacity:0, ease:"back", duration:3}, "<1")
        // .from(split3.chars, {opacity:0, stagger:0.08, duration:1}, 0)
        // .from(".article-desc", {x:-100, opacity:0, ease:"back", duration:2}, "<2")
        // .from(".ico", {x:200, opacity:0, stagger:0.5, ease:"rough", duration:1}, "<1");



      //Animation of our work

    //   let tl4 = gsap.timeline({
    //     scrollTrigger:{
    //     trigger:"#our-work",
    //     start:"top 50%",
    //     end:"bottom top",
    //     toggleActions:"restart none none reset"
    // }})
    // .from(".section-title", {y:100, opacity:0, ease:"back", duration:0.8})
    // .from(".tab-label", {x:100, opacity:0, stagger:0.2, ease:"rough", duration:1}, 0)
    // .from(".tab-content", {y:-100, opacity:0, ease:"back", duration:0.5}, 0)
    // .from(".our-work-container", {x:100, height:'150%',width:'150%',opacity:0, stagger:0.2, ease:"rough"}, "<1");

    
    
    //Animation of WHAT WE DO
    // let split5 = new SplitText(".services-title");
    // let tl5 = gsap.timeline({
    //     scrollTrigger:{
    //     trigger:"#services",
    //     start:"top 50%",
    //     end:"bottom top",
    //     toggleActions:"restart none none reset"
    // }})
    // .from("#services", {y:-100, duration:0.8})
    // .from(split5.chars, {opacity:0, stagger:0.3, duration:1}, 0)
    // .from(".service-text", {x:-100,opacity:0, stagger:0.3, ease:"rough"}, "<1")
    // .from(".service-ico", {y:100,opacity:0, stagger:0.4, ease:"rough"}, "<1");
    
    // //Animation of latest-news
    // let split6 = new SplitText(".latest-news-title ");
    // let tl6 = gsap.timeline({
    //     scrollTrigger:{
    //     trigger:"#latest-news",
    //     start:"top 50%",
    //     end:"bottom top",
    //     toggleActions:"restart none none reset"
    // }})
    
    // .from(split6.chars, {x:100, opacity:0, stagger:0.3, duration:1}, 0)
    // .from(".latest-left", {x:-100,opacity:0, ease:"rough"}, "<1")
    // .from(".latest-right", {x:100,opacity:0,  ease:"rough"}, 0);
    
    
    // //Animation of Contact us

    // let split7 = new SplitText(".contact-title ");
    // let tl7 = gsap.timeline({
    //     scrollTrigger:{
    //     trigger:"#contact",
    //     start:"top 50%",
    //     end:"bottom top",
    //     toggleActions:"restart none none reset"
    // }})
    
    // .from(split7.chars, {y:50, opacity:0, stagger:0.3, duration:0.8}, 0)
    // .from(".contact-left", {x:-100,opacity:0, ease:"rough"}, "<1")
    // .from(".contact-center", {y:100,opacity:0,  ease:"rough"}, 0)
    // .from(".p-desc", {y:-20,opacity:0, stagger:0.4, ease:"back"}, "<0.5")
    // .from(".contact-right", {x:100,opacity:0,  ease:"rough"}, 0)
    // .from(".form-input", {x:100,opacity:0, stagger:0.4, ease:"rough"}, "<0.5");

 
}

window.addEventListener('load', function(){
    init();
});