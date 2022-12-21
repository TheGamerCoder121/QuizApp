var select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  }, 
  animationWindow = select('#animationWindow'),    
    animData = {
		wrapper: animationWindow,
		animType: 'svg',
		loop: true,
		prerender: true,
		autoplay: true,
		path: './assets/icons8-secured-letter.json',
  rendererSettings: {
    //context: canvasContext, // the canvas context
    //scaleMode: 'noScale',
    //clearCanvas: false,
    //progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
    //hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
  }   
	}, anim;

	anim = bodymovin.loadAnimation(animData);
 anim.addEventListener('DOMLoaded', onDOMLoaded);
 anim.setSpeed(1);

function onDOMLoaded(e){
 
 anim.addEventListener('complete', function(){});
}

ScrubBodymovinTimeline(anim)