
function initiateStuff(){
	
	try{
		
		window.screen.lockOrientation("portrait");
		
	}
	
	catch{}
	
	$(document).ready(function() {
		
		$("body").fadeIn(500);
		
	});
	
}

function openNav(){
	
	document.getElementById("navigation").className = "navOpen";
	
}

function closeNav(){
	
	document.getElementById("navigation").className = "navClosed";
	
}

function openSettings(){
	
	closeNav();
	
	$(document).ready(function() {
		
		$("body").fadeOut(500, function (){window.location = "software.html";});
		
	});
	
}

function closeSettings(){
	
	$(document).ready(function() {
		
		$("body").fadeOut(500, function (){window.location = "index.html";});
		
	});
	
}


