
function setupVoiceRecognition(){
	
	$(document).ready(function(){

		if('webkitSpeechRecognition' in window){

			var message = document.querySelector('#mainTextbox');

			var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

			var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

			var grammar = '#JSGF V1.0;'

			var recognition = new SpeechRecognition();

			var speechRecognitionList = new SpeechGrammarList();

			speechRecognitionList.addFromString(grammar, 1);

			recognition.grammars = speechRecognitionList;

			recognition.lang = 'en-US';

			recognition.interimResults = false;

			recognition.onresult = function(event) {
				
				$("#micDot").slideUp(250);
				
				var last = event.results.length - 1;
				
				var command = event.results[last][0].transcript;
				
				if((document.getElementById("mainTextbox").value).length > 1){
					
					if((document.getElementById("mainTextbox").value).substring((0, 1) != " ")){
						
						if((document.getElementById("mainTextbox").value).substring((document.getElementById("mainTextbox").value).length - 1) != " "){
							
							document.getElementById("mainTextbox").value += " ";
							
						}
						
					}
					
				}
				
				document.getElementById("mainTextbox").value += command;
				
			};

			recognition.onspeechend = function() {
				
				recognition.stop();
				
				$("#micDot").slideUp(250);
				
			};

			recognition.onerror = function(event) {
				
				$("#micDot").slideUp(250);
				
				//document.getElementById("mainTextbox").value = 'Error occurred in recognition : ' + event.error;
				
			}
			
			document.querySelector('#micButton').addEventListener('click', function(){
				
				if(document.getElementById("micDot").style.display == "block"){
					
					recognition.stop();
					
					$("#micDot").slideUp(250);
					
				}
				
				else{
					
					recognition.start();
					
					$("#micDot").slideDown(250);
					
				}
				
			});
			
		}
		else{
			
			//Speech rec plugin
			
			try{
				
				window.plugins.speechRecognition.requestPermission(function (){
					
				}, function (err){
					
					
					
				});
				
				window.plugins.speechRecognition.isRecognitionAvailable(function(available){
					if(available){
						
						document.getElementById("micButton").addEventListener("click", function(){
							
							window.plugins.speechRecognition.startListening(function(result){
								// Show results in the console
								console.log(result);
							}, function(err){
								console.error(err);
							}, {
								language: "en-US",
								showPopup: false
							});
							
						});
						
					}
				}, function(err){
					
					console.error(err);
					
				});
				
			}
			
			catch(e){
				
				voiceRecNotSupported();
				
			}
			 
		}
		
	});
	
}

function voiceRecNotSupported(){
	
	$("#voiceRecognitonAlert").slideDown(250);
	
	document.getElementById("voiceRecognitonAlert").innerHTML = "Your browser does not support speech recognition";
	
}
