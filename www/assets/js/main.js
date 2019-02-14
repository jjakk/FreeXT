
function sleep(seconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, seconds);
  });
}

window.addEventListener("orientationchange", function(){
	
	screen.orientation.lock('portrait');
	
});

window.addEventListener("load", function initiateStuff(){
	
	
	
});

function openNav(){
	
	if(document.getElementById("mainNav").offsetWidth == 0){
		
		document.getElementById("mainNav").className = "navOpen";
		
		document.body.style.overflowY = "hidden";
		
		document.getElementById("mainTextbox").readOnly = true;
		
		document.getElementById("mainTextbox").style.cursor = "default";
		
	}
	
}

function closeNav(){
	
	if(document.getElementById("mainNav").offsetWidth != 0){
		
		document.getElementById("mainNav").className = "navClosed";
		
		document.body.style.overflowY = "auto";
		
		document.getElementById("mainTextbox").readOnly = false;
		
		document.getElementById("mainTextbox").style.cursor = "text";
		
	}
	
}

function swipeStart(event){
	
	tapStartX = event.pageX;
	
	tapStartY = event.pageY;
	
}

function swipeFinish(event){
	
	tapEndX = event.pageX;
	
	tapEndY = event.pageY;
	
	console.log(tapEndX)
	
	document.getElementById("mainNav").style.width = tapEndX;
	
}

function touchSwipeStart(event){
	
	tapStartX = event.touches[0].clientX;
	
	tapStartY = event.touches[0].clientY;
	
}

function touchSwipeEnd(event){
	
	tapEndX = event.changedTouches[0].clientX - tapStartX;
	
	tapEndY = event.changedTouches[0].clientY - tapStartY;
	
}




