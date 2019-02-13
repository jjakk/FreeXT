
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



