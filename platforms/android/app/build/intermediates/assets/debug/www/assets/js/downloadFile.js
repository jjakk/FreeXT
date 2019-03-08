
 function download(filename, text) {
	if(filename == ""){
		
		filename = "download.txt";
		
	}
    var a = document.body.appendChild(
        document.createElement("a")
    );
    var textToWrite = text;
    a.download = filename; 
    textToWrite = textToWrite.replace(/\n/g, "%0D%0A"); 
    a.href = "data:text/plain," + textToWrite;
    a.click();
}


