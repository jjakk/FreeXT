
function loadFunction(){
	
	$(document).ready(function(){
		
		$("#mainContainer").fadeIn(500);
		
	});
}

window.addEventListener("load", loadFunction());

function openNav(){
	
	if(document.getElementById("mainNav").offsetWidth == 0){
		
		document.getElementById("mainNav").className = "navOpen";
		
		document.documentElement.style.overflowY = "hidden";
		
		document.body.style.overflowY = "hidden";
		
		document.getElementById("sectionCover").style.display = "block";
		
	}
	
}

function closeNav(){
	
	if(document.getElementById("mainNav").offsetWidth != 0){
		
		document.getElementById("mainNav").className = "navClosed";
		
		document.documentElement.style.overflowY = "visible";
		
		document.body.style.overflowY = "auto";
		
		document.getElementById("sectionCover").style.display = "none";
		
	}
	
}

async function closeNavCallback(callback){
	
	closeNav();
	
	if(window.matchMedia("(max-width: 600px)").matches){
		
		await sleep(500 * (((document.getElementById("mainNav").offsetWidth / document.documentElement.clientWidth) * 100)/65));
		
	}
	else{
		
		await sleep(1000 * (((document.getElementById("mainNav").offsetWidth / document.documentElement.clientWidth) * 100)/40));
		
	}
	
	callback();
	
}

function openSettings(){
	
	closeNavCallback(function(){
		
		$(document).ready(function(){
			
			$("#mainContainer").fadeOut(500, function(){
				
				loadSettings();
				
			});
			
		});
		
	});
	
}


