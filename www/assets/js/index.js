
$(document).ready(function() {
	
    $(window).scroll(function() {
		
		if(document.getElementById("mainNav").offsetWidth != 0)scroll(0,0);
		
	});
	
});

function openNav(){
	
	if(document.getElementById("mainNav").offsetWidth == 0){
		
		document.getElementById("mainNav").className = "navOpen";
		
		document.body.style.overflowY = "hidden";
		
		document.getElementById("sectionCover").style.display = "block";
		
	}
	
}

async function closeNav(){
	
	if(document.getElementById("mainNav").offsetWidth != 0){
		
		document.getElementById("mainNav").className = "navClosed";
		
		document.body.style.overflowY = "auto";
		
		document.getElementById("sectionCover").style.display = "none";
		
	}
	
}

function openSettings(){
	
	closeNav().then(location.href = "settings.html");
	
}


