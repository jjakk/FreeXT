
var inCordova = false;

function sleep(seconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, seconds);
  });
}

function initiateStuff(){
	
	if(!!window.cordova){
		
        console.log("In cordova");
		
		inCordova = true;
		
    }
	
   else{
		
		console.log("Not in cordova");
		
		inCordova = false;
		
	}
	
	if(inCordova){
		
		screen.orientation.lock('portrait');
		
	}
	
}

function openNav(){
	
	document.getElementById("navigation").className = "navOpen";
	
}

function closeNav(){
	
	document.getElementById("navigation").className = "navClosed";
	
}

async function openSettings(){
	
	closeNav();
	
	if(window.matchMedia("(max-width: 600px)").matches){
		
		await sleep(500);
		
	}
	
	else{
		
		await sleep(1000);
		
	}
	
	
	window.location = "software.html";
	
}

function closeSettings(){
	
	window.location = "index.html";
	
}


