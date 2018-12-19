let subtitles;
//let subtitlesFixed;
//let char = [];
//let deleting = false;
let musicremoval = false;
let deafremoval = true;

//let progress = document.getElementById("progress");

function copyText() {
  var copyText = document.getElementById("textOutput");
  copyText.select();
  document.execCommand("copy");
  //alert("Copied to clipboard: " + copyText.value);
}

function translateSubs() {
		document.getElementById("textOutput").innerHTML = "";    	
	    subtitles = document.getElementById("textInput").value;
	    //char = subtitles.split('');
	    let a = subtitles;
	    
	    if (deafremoval) {
	    	a = subtitles.replace(/\[[\w\s]+\]/gi, "");
		}
	    if (musicremoval) {
	    	a = a.replace(/[♪♫]+/gi, "");
	    }	a = a.replace(/\[[♪♫]+\]/gi, "");

		document.getElementById("textOutput").innerHTML = a;
	    console.log(document.getElementById("deafremoval").value);
	    console.log(document.getElementById("musicremoval").value);
	    /*
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
		    	if (char[i] == "[" || char[i] == "]" || char[i] == "(" || char[i] == ")" || char[i] == "{" || char[i] == "}") {
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
		    //document.getElementById("progress").innerHTML = Math.floor((i+1)/char.length*100) + "%";
		    //console.log(Math.floor((i+1)/char.length*100));
	    }

	    //printing out the new subtitles
	    for (var i = 0; i < char.length; i++) {
		    //document.getElementById("textOutput").innerHTML += char[i];
	    }
	    char.length = 0;
	    */
	}