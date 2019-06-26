function initAudioPlayer(){
		audio = new Audio();
		audio.src = tracks[0];
		audio.loop = true;
		// Set object references
		playbtn = _("playpausebtn");
		mutebtn = _("mutebtn");
		seekslider = _("seekslider");
		curtimetext = _("curtimetext");
		durtimetext = _("durtimetext");
		play1 = _('play1');
		play2 = _('play2');
		play3 = _('play3');
		// Add Event Handling

		playbtn.addEventListener("click",playFirst);
		mutebtn.addEventListener("click", mute);
		//seekslider.addEventListener("mousedown", function(event){ seeking=true; seek(event); });
		//seekslider.addEventListener("mousemove", function(event){ seek(event); });
		seekslider.addEventListener("mouseup",function(){ seeking=false; });
		audio.addEventListener("timeupdate", function(){ seektimeupdate(); });
		play1.addEventListener('click',player1);
		play2.addEventListener('click',player2);
		play3.addEventListener('click',player3);
		// Functions
		function playFirst() {
			playbtn.innerHTML = "<img src = 'icons/pause.png' class = 'button'>";
			play1.className = "album_main";
			play2.className = "album";
			play3.className = "album";
			//player.className = "player1";
			audio.play();
			playbtn.removeEventListener("click",playFirst);
			playbtn.addEventListener("click",playPause);
		}

		function playPause(){
			if(audio.paused){
			   audio.play();
			   playbtn.innerHTML = "<img src = 'icons/pause.png' class = 'button'>";
		    } else {
			    audio.pause();
			    playbtn.innerHTML = "<img src = 'icons/play.png' class = 'button'>";
		    }
		}
		function mute(){
			if(audio.muted){
			    audio.muted = false;
			    mutebtn.innerHTML = "<img src = 'icons/mute.png' class = 'button'>";
		    } else {
			    audio.muted = true;
			    mutebtn.innerHTML = "<img src = 'icons/muted.png' class = 'button'>";
		    }
		}
		function seek(event){
		    if(seeking){
			    seekslider.value = event.clientX - seekslider.offsetLeft;
		        seekto = audio.duration * (seekslider.value / 100);
		        audio.currentTime = seekto;
		    }
	    }
	    function seektimeupdate(){
			var nt = audio.currentTime * (100 / audio.duration);
			seekslider.value = nt;
			var curmins = Math.floor(audio.currentTime / 60);
		    var cursecs = Math.floor(audio.currentTime - curmins * 60);
		    var durmins = Math.floor(audio.duration / 60);
		    var dursecs = Math.floor(audio.duration - durmins * 60);
			if(cursecs < 10){ cursecs = "0"+cursecs; }
		    if(dursecs < 10){ dursecs = "0"+dursecs; }
		    if(curmins < 10){ curmins = "0"+curmins; }
		    if(durmins < 10){ durmins = "0"+durmins; }
			curtimetext.innerHTML = curmins+":"+cursecs;
		    durtimetext.innerHTML = durmins+":"+dursecs;
		}

		function player1() {
			audio.src = tracks[0];
			playbtn.innerHTML = "<img src = 'icons/pause.png' class = 'button'>";
			play1.className = "album_main";
			play2.className = "album";
			play3.className = "album";
			//player.className = "player1";
			audio.play();
		}
		function player2() {
			audio.src = tracks[1];
			playbtn.innerHTML = "<img src = 'icons/pause.png' class = 'button'>";
			play1.className = "album";
			play2.className = "album_main";
			play3.className = "album";
			//player.className = "player2";
			audio.play();
		}
		function player3() {
			audio.src = tracks[2];
			playbtn.innerHTML = "<img src = 'icons/pause.png' class = 'button'>";
			play1.className = "album";
			play2.className = "album";
			play3.className = "album_main";
			//player.className = "player3";
			audio.play();
		}
	}
	initAudioPlayer();
