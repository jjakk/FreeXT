
function openNav(){
	
	if(document.getElementById("mainNav").offsetWidth == 0){
		
		document.getElementById("mainNav").className = "navOpen";
		
		document.documentElement.style.overflowY = "hidden";
		
		document.body.style.overflowY = "hidden";
		
		document.getElementById("sectionCover").style.display = "block";
		
	}
	
}

async function closeNav(){
	
	if(document.getElementById("mainNav").offsetWidth != 0){
		
		document.getElementById("mainNav").className = "navClosed";
		
		document.documentElement.style.overflowY = "auto";
		
		document.body.style.overflowY = "auto";
		
		document.getElementById("sectionCover").style.display = "none";
		
	}
	
}

function openSettings(){
	
	closeNav().then(location.href = "settings.html");
	
}


