
function initiateStuff(){
	
	buttonTransform = document.getElementById("navButton").style.transform;
	
	if(buttonTransform == "") buttonTransform = "rotate(0)";
	
}

function openNav(){
	
	buttonTransform = document.getElementById("navButton").style.transform;
	
	if(buttonTransform == "rotate(0)") buttonTransform = "rotate(90deg)";
	else if(buttonTransform == "rotate(90deg)") buttonTransform = "rotate(180deg)";
	else if(buttonTransform == "rotate(180deg)") buttonTransform = "rotate(270deg)";
	else if(buttonTransform == "rotate(270deg)") buttonTransform = "rotate(0)";
	
	console.log(buttonTransform);
	
}


