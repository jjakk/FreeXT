
async function loadSettings(){
	
	document.body.style.background = "#282828";
	
	await sleep(250);
	
	if(localStorage.getItem("textboxFont") != "default"){
		
		document.getElementById("fontSelect").value = localStorage.getItem("textboxFont");
		
	}
	
	$(document).ready(function(){
		
		$("#settingsContainer").fadeIn(500);
		
	});
	
	settingsOpen = true;
	
};

function openIndex(){
	
	$(document).ready(function(){
		
		$("#settingsContainer").fadeOut(250, async function(){
			
			document.body.style.background = "#fffd8c";
			
			await sleep(500);
			
			loadFunction();
			
		});
		
	});
	
}

function setFont(ele){
	
	localStorage.setItem("textboxFont", ele.value);
	
	if(localStorage.getItem("textboxFont") != "default"){
		
		document.getElementById("fontSelect").style.fontFamily = localStorage.getItem("textboxFont");
		
	}
	
	else{
		
		document.getElementById("fontSelect").style.fontFamily = "roboto";
		
	}
	
}



