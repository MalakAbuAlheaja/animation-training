$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '30%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// pin again
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: 0.4
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);


	// parallax scene

	var parallaxTl = new TimelineMax();
	parallaxTl
		.from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
		.from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)
		;

	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.bcg-parallax',
		triggerHook: 1,
		duration: '100%'
	})
	.setTween(parallaxTl)
	.addTo(controller);

	// loop through each .project element
	$('.project').each(function(){

		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook: 0.9
		})
		.setClassToggle(this, 'fade-in') // add class to project01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75C695',
			colorEnd: 'pink'
		}) // this requires a plugin
		.addTo(controller);

	});

	//animation of  fade-in text

	$('.fade').each(function() { 
		// build a tween
		var tween = TweenMax.from($(this), 0.3, {autoAlpha: 0, scale: 0.5, y: '+=30', ease:Linear.easeNone});
		// build a scene
		var scene = new ScrollMagic.Scene({
		  triggerElement: this
		})
		.setTween(tween) // trigger a TweenMax.to tween
		.addTo(controller);
	  });

	  // animation of playing vedio

	  var ukeVid = document.getElementById('uke');
	  
	  // build scene
	  var scene = new ScrollMagic.Scene({triggerElement: "#uke", duration: 500})
			.addTo(controller)
			.addIndicators() // add indicators (requires plugin)
	
			.on("enter", function () {
				ukeVid.play();
			})
			.on("leave", function () {
				ukeVid.pause();
			})

		//Animation of sequance object
		var tween = TweenMax.staggerFromTo(".animate4", 2, {left: 700}, {left: 0, ease: Back.easeOut}, 0.15);
		var scene5 = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: 300})
			.setTween(tween)
			.addIndicators({name: "staggering"}) // add indicators (requires plugin)
			.addTo(controller);
					

		//Animation of fliping 

		var tween = TweenMax.to("#project01 img", 4, {rotationY: 360});
		var scene6 = new ScrollMagic.Scene({triggerElement: "#project01 img"})
			.setTween(tween)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

		var tween = TweenMax.to("#project03 img", 4, {rotationY: 180})
		var scene7 = new ScrollMagic.Scene({triggerElement: "#project03 img"})
			.setTween(tween)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);


		//Animation resize of element
		var scene = new ScrollMagic.Scene({triggerElement: "#project04 img"})
							// trigger animation by adding a css class
			.setClassToggle("#project04 img", "zap")
			.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
			.addTo(controller);


		//Animation of wipes
		var wipeAnimation = new TimelineMax()
		.fromTo("#project02", 0.2, {x: "-50%"}, {x: "0%",y:"0%" ,ease: Linear.easeNone})  // in from left
		// .fromTo("#uke", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

	// create scene to pin and link animation
		new ScrollMagic.Scene({
			triggerElement: "#project02",
			triggerHook: "onLeave",
			duration: "50%"
		})
		.setPin("#project02")
		.setTween(wipeAnimation)
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);

		var wipeAnimation = new TimelineMax()
		.fromTo("#project03", 0.2, {x: "-50%"}, {x: "0%", ease: Linear.easeNone})  // in from left
		.fromTo("#project04", 0.2, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
		// .fromTo("#uke", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

	// create scene to pin and link animation
		new ScrollMagic.Scene({
			triggerElement: "#project03",
			triggerHook: "onLeave",
			duration: "50%"
		})
		.setPin("#project03")
		.setTween(wipeAnimation)
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);



	//Animation of section

	new ScrollMagic.Scene({triggerElement: "#project02"})
		.setTween("#project02 ", {y: "5%", ease: Linear.easeNone})
		.addIndicators()
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: ".t2"})
		.setTween(".t2 ", {y: "-50%", ease: Linear.easeNone})
		.addIndicators()
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: ".p2"})
		.setTween(".p2 ", {y: "-50%", ease: Linear.easeNone})
		.addIndicators()
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#uke"})
		.setTween("#uke", {y: "20%", ease: Linear.easeNone})
		.addIndicators()
		.addTo(controller);
		
	new ScrollMagic.Scene({triggerElement: "#imagesequence"})
		.setTween("#imagesequence", {y: "60%", ease: Linear.easeNone})
		.addIndicators()
		.addTo(controller);


// Animation of sequance image 
	var images = [
		"./img/example_imagesequence_01.png",
		"./img/example_imagesequence_02.png",
		"./img/example_imagesequence_03.png",
		"./img/example_imagesequence_04.png",
		"./img/example_imagesequence_05.png",
		"./img/example_imagesequence_06.png",
		"./img/example_imagesequence_07.png"
	];

	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = {curImg: 0};

// create tween
	var tween = TweenMax.to(obj, 0.5,
		{
		curImg: images.length - 1,	// animate propery curImg to number of images
		roundProps: "curImg",				// only integers so it can be used as an array index
		repeat: 3,									// repeat 3 times
		immediateRender: true,			// load first image automatically
		ease: Linear.easeNone,			// show every image the same ammount of time
		onUpdate: function () {
		  $("#myimg").attr("src", images[obj.curImg]); // set the image source
		}
	}
);

// init controller
		var controller = new ScrollMagic.Controller();
		var scene = new ScrollMagic.Scene({triggerElement: "#sequance", duration: 500})
			.setTween(tween)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);


			new ScrollMagic.Scene({
				triggerElement: ".paris",
				triggerHook: 0.9, // show, when scrolled 10% into view
				duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
				offset: 50 // move trigger to center of element
			})
			.setClassToggle(".paris", "visible") // add class to reveal
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);





	});



