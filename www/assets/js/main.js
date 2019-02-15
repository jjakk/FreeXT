
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




