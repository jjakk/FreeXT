
function loadFunction(){
	
	$(document).ready(function(){
		
		$("#mainContainer").fadeIn(250);
		
	});
	
	settingsOpen = false;
	
}

window.addEventListener("load", loadFunction());

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
	
	console.log(option)
	
	document.getElementById("noteTitleInput").value = option.innerText;
	
	document.getElementById("mainTextbox").value = localStorage.getItem("note-" + option.innerText);
	
	closeNav();
	
}

function makeNewNote(){
	
	document.getElementById("noteTitleInput").value = "";
	
	document.getElementById("mainTextbox").value = "";
	
}
