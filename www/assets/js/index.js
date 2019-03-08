
var showDelete = true;

var deleteingNotes = false;

window.addEventListener("load", loadFunction());

function loadFunction(){
	
	$(document).ready(function(){
		
		if(localStorage.getItem("textboxFont") != "default"){
			
			document.getElementById("noteTitleInput").style.fontFamily = localStorage.getItem("textboxFont");
			
			document.getElementById("mainTextbox").style.fontFamily = localStorage.getItem("textboxFont");
			
		}
		
		else{
			
			document.getElementById("noteTitleInput").style.fontFamily = "robotoRegular";
			
			document.getElementById("mainTextbox").style.fontFamily = "robotoRegular";
			
		}
		
		if(localStorage.getItem("voiceRecognitionEnabled") == "true"){
			
			document.getElementById("micContainer").style.display = "block";
			
			setupVoiceRecognition();
			
		}
		
		else{
			
			document.getElementById("micContainer").style.display = "none";
			
		}
		
		if(localStorage.getItem("txtExportEnabled") == "true"){
			
			document.getElementById("saveTxtContainer").style.display = "block";
			
		}
		
		else{
			
			document.getElementById("saveTxtContainer").style.display = "none";
			
		}
		
		$("#mainContainer").fadeIn(250);
		
	});
	
	settingsOpen = false;
	
}

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push(keys[i]);
    }

    return values;
	
}

function createNewElement(elementTag, elementId, parentElement){
	
	var element = document.createElement(elementTag);
	var t = document.createTextNode("");
	element.appendChild(t);
	parentElement.appendChild(element);
	
	return element;
	
}

function openNav(){
	
	if(document.getElementById("mainNav").offsetWidth == 0){
		
		//Makes Notes Options
		
		document.getElementById("mainNav").innerHTML = "";
		
		settingsButton = createNewElement("div", null, document.getElementById("mainNav"));
		
		settingsButton.className = "navOption";
		
		settingsButton.onclick = function(){openSettings()};
		
		settingsButton.innerHTML = "Settings";
		
		var notes = allStorage();
		
		for(var i = 0; i < notes.length; i++){
			
			if(notes[i].substring(0, 5) == "note-"){
				
				newNote = createNewElement("div", null, document.getElementById("mainNav"));
				
				newNote.className = "navOption";
				
				newNote.innerText = notes[i].substring(5);
				
				newNote.onclick = function(){openNote(this)};
				
				newNote.onmousedown = function(){startDeleteHold();};
				
				newNote.ontouchstart = function(){startDeleteHold();};
				
				async function startDeleteHold(){
					
					showDelete = true;
					
					setTimeout(function(){
						
						if(showDelete && !deleteingNotes){
							
							//On Successful Tap and Hold
							
							navigator.vibrate(50);
							
							deleteingNotes = true;
							
							for(var i = 1; i < document.getElementsByClassName("navOption").length; i++){
								
								document.getElementsByClassName("navOption")[i].innerHTML = document.getElementsByClassName("navOption")[i].innerText;
								
								noteX = createNewElement("div", null, document.getElementsByClassName("navOption")[i]);
								
								noteX.className = "deleteButton";
								
								noteX.innerHTML = "<br/><i class='fa fa-trash'></i>";
								
								noteX.onclick = (function(){deleteNote(this);});
								
							}
							
							$(".deleteButton").fadeIn(500);
							
							$(".deleteButton").css("transition", "0.25s;");
							
						}
						
					}, 1000);
					
				};
				
				document.body.onmouseup = function(){showDelete = false;};
				
				document.body.ontouchend = function(){showDelete = false;};
				
			}
			
		}
		
		//Opens Nav
		
		document.getElementById("mainNav").className = "navOpen";
		
		document.documentElement.style.overflowY = "hidden";
		
		document.body.style.overflowY = "hidden";
		
		document.getElementById("sectionCover").style.display = "block";
		
	}
	
}

function closeNav(){
	
	if(document.getElementById("mainNav").offsetWidth != 0){
		
		deleteingNotes = false;
		
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

function saveNote(){
	
	noteTitle = document.getElementById("noteTitleInput").value;
	
	noteContents = document.getElementById("mainTextbox").value;
	
	//Empty Contents - Does not work
	
	if(noteContents == ""){
		
		document.getElementById("saveAlert").innerText = "Please enter notes.";
		
		document.getElementById("saveAlert").style.color = "red";
		
		$(document).ready(async function(){
			
			if(getComputedStyle(document.getElementById("saveAlert"), null).display == "none"){
				
				$("#saveAlert").slideDown(500);
				
				await sleep(2000);
				
				$("#saveAlert").slideUp(500);
				
			}
			
		});
		
	}
	
	//Has contents
	
	else{
		
		if(noteTitle == ""){
			
			if(noteContents.length >= 15){
				
				noteTitle = noteContents.substring(0, 14);
				
			}
			
			else{
				
				noteTitle = noteContents;
				
			}
			
		}
		
		localStorage.setItem("note-" + noteTitle, noteContents);
		
		document.getElementById("saveAlert").innerText = "Note Saved!";
		
		document.getElementById("saveAlert").style.color = "black";
		
		$(document).ready(async function(){
			
			if(getComputedStyle(document.getElementById("saveAlert"), null).display == "none"){
				
				$("#saveAlert").slideDown(500);
				
				await sleep(2000);
				
				$("#saveAlert").slideUp(500);
				
			}
			
		});
		
	}
	
}

function openNote(option){
	
	if(!deleteingNotes){
		
		document.getElementById("noteTitleInput").value = option.innerText;
		
		document.getElementById("mainTextbox").value = localStorage.getItem("note-" + option.innerText);
		
		closeNav();
		
	}
	
}

function makeNewNote(){
	
	document.getElementById("noteTitleInput").value = "";
	
	document.getElementById("mainTextbox").value = "";
	
}

function deleteNote(ele){
	
	localStorage.removeItem("note-" + ele.parentElement.innerText.split('\n')[0]);
	
	ele.parentElement.style.transition = "0s";
	
	$(document).ready(function(){
		
		$(ele.parentElement).slideUp(250);
		
	});
	
}

function saveAsTxt(){
	
	fileTitle = document.getElementById("noteTitleInput").value;
	
	fileContents = document.getElementById("mainTextbox").value;
	
	//Empty Contents - Does not work
	
	if(fileContents == ""){
		
		document.getElementById("txtAlert").innerText = "Please enter notes.";
		
		document.getElementById("txtAlert").style.color = "red";
		
		$(document).ready(async function(){
			
			if(getComputedStyle(document.getElementById("txtAlert"), null).display == "none"){
				
				$("#txtAlert").slideDown(500);
				
				await sleep(2000);
				
				$("#txtAlert").slideUp(500);
				
			}
			
		});
		
	}
	
	//Has contents
	
	else{
		
		if(fileTitle == ""){
			
			if(fileContents.length >= 15){
				
				fileTitle = fileContents.substring(0, 14);
				
			}
			
			else{
				
				fileTitle = fileContents;
				
			}
			
		}
		
		try{
			
			var path = "file:///storage/emulated/0/Download";
			var filename = fileTitle + ".txt";

			window.resolveLocalFileSystemURL(path, function(dir) {
				dir.getFile(filename, {create:true}, function(fileEntry) {
					
				});
			});
			
		}
		
		catch(e){
			
			download(fileTitle + ".txt", fileContents);
			
		}
		
	}
	
}
