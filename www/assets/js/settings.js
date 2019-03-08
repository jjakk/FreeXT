
async function loadSettings(){
	
	document.body.style.background = "#282828";
	
	await sleep(250);
	
	$(document).ready(function(){
		
		if(localStorage.getItem("textboxFont") != "default"){
			
			document.getElementById("fontSelect").value = localStorage.getItem("textboxFont");
			
		}
		
		if(localStorage.getItem("voiceRecognitionEnabled") == "true"){
			
			document.getElementById("voiceRecognitionCheckbox").checked = true;
			
		}
		
		else{
			
			document.getElementById("voiceRecognitionCheckbox").checked = false;
			
		}
		
		$("#settingsHeader").addClass("slideDown");
		
		$("#settingsParagraph").addClass("slideUp");
		
		$("#settingsContainer").fadeIn(500, function(){
			
			document.getElementsByClassName("divider")[0].style.width = "50vw";
			
			document.getElementsByClassName("divider")[0].style.marginLeft = "-25vw";
			
			
			
		});
		
	});
	
	for(var i = 0; i < document.getElementById("fontSelect").children.length; i++){
		
		document.getElementById("fontSelect").children[i].style.fontFamily = document.getElementById("fontSelect").children[i].value;
		
	}
	
	settingsOpen = true;
	
};

function openIndex(){
	
	$(document).ready(function(){
		
		$("#settingsContainer").fadeOut(250, async function(){
			
			document.body.style.background = "#fffd8c";
			
			document.getElementsByClassName("divider")[0].style.width = "0px";
			
			document.getElementsByClassName("divider")[0].style.marginLeft = "0px";
			
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

function setVoiceRecognition(ele){
	
	if(ele.checked) localStorage.setItem("voiceRecognitionEnabled", true);
	
	else localStorage.setItem("voiceRecognitionEnabled", false);
	
}



