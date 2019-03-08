
window.addEventListener("load", function initiateStuff(){
	
	if(localStorage.getItem("textboxFont") == null){
		
		localStorage.setItem("textboxFont", "default");
		
	}
	
	//if(localStorage.getItem("voiceRecognitionEnabled") == null){
		
		localStorage.setItem("voiceRecognitionEnabled", "false");
		
	//}
	
	if(localStorage.getItem("txtExportEnabled") == null){
		
		localStorage.setItem("txtExportEnabled", "false");
		
	}
	
});
