
window.addEventListener("load", function initiateStuff(){
	
	if(localStorage.getItem("textboxFont") == null){
		
		localStorage.setItem("textboxFont", "default");
		
	}
	
	if(localStorage.getItem("txtExportEnabled") == null){
		
		localStorage.setItem("txtExportEnabled", "false");
		
	}
	
});
