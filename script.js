let subtitles;
let subtitlesFixed;
let char = [];
let deleting = false;
let musicremoval = false;
let deafremoval = true;

document.getElementById("demo");

function translateSubs() {
		document.getElementById("demo").innerHTML = "";    	
	    subtitles = document.getElementById("textInput").value;
	    char = subtitles.split('');
	    
	    for (var i = 0; i < char.length; i++) {
	    	//removing music lyrics
	    	if (musicremoval == true) {
		    	if (char[i] == "♪" || char[i] == "♫") {
		    		char[i] = "";
		    		if (deleting == false) {
		    			deleting = true;
		    		}
		    		else {
		    			deleting = false;
		    		}
		    	}
		    }
		    //removing the text for deaf people
		    if (deafremoval == true) {
		    	if (char[i] == "[" || char[i] == "]" || char[i] == "(" || char[i] == ")") {
		    		char[i] = "";
		    		if (deleting == false) {
		    			deleting = true;
		    		}
		    		else {
		    			deleting = false;
		    		}
		    	}
		    	if (deleting == true) {
		    		char[i] = "";
		    	}
		    }
	    }

	    //printing out the new subtitles
	    for (var i = 0; i < char.length; i++) {
		    document.getElementById("demo").innerHTML += char[i];    	
	    }
	    char.length = 0;
	    
	}