
function initiateStuff(){
	
	try{
		
		window.screen.lockOrientation("portrait");
		
	}
	
	catch{}
	
}

function openNav(){
	
	document.getElementById("navigation").className = "navOpen";
	
}

function closeNav(){
	
	document.getElementById("navigation").className = "navClosed";
	
}

function openSettings(){
	
	closeNav();
	
	window.location = "software.html";
	
}

function closeSettings(){
	
	window.location = "index.html";
	
}


