
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



