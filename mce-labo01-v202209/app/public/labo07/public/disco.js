;(function () {

	let colors, first, second, third, mood,
		size = parseInt(window.innerWidth / 10) - 10,
		half = parseInt(window.innerWidth / 20);

	const htmlToElement = function(html) {
		var template = document.createElement('template');
		html = html.trim(); // Never return a text node of whitespace as the result
		template.innerHTML = html;

		return template.content.firstChild;
	}


	const minmax = function(min, max){
		maxi = parseFloat(max);
		mini = parseFloat(min);
		maximus = (maxi - mini) + 1;
		return (Math.floor(Math.random() * maximus) + mini);
	}


	const createColors = function (fmin, fmx, smin, smx, tmin, tmx){
		colors = '';
		fmin = typeof(fmin) != 'undefined' ? fmin : 0;
		fmx = typeof(fmx) != 'undefined' ? fmx : 255;
		smin = typeof(smin) != 'undefined' ? smin : 0;
		smx = typeof(smx) != 'undefined' ? smx : 255;
		tmin = typeof(tmin) != 'undefined' ? tmin : 0;
		tmx = typeof(tmx) != 'undefined' ? tmx : 255;

		$b = 0;

		document.getElementById('colorBLOCK').style.height = (3 * (size + 10)) + 'px';

		while($b <=100) {

			first = minmax(fmin,fmx);
			second = minmax(smin,smx);
			third = minmax(tmin,tmx);

			bg = 'background-color:rgb(' + first + ', ' + second + ', '+ third + ')';
			style = 'style="border-radius: '+ half +'px; width:'+ size +'px; height:'+ size +'px; '+ bg +'"';

			colors += '<div class="colorholder">';
			colors += '<div class="eaColor" '+ style +'></div></div>';
			$b++;
		}


		document.getElementById('colorBLOCK').innerHTML = colors;
	}

	const createColorsWithMood = function(mood) {
		switch (mood) {
			case 'red':
				createColors(200,255,0,255,0,255);
				break;
			case 'green':
				createColors(0,255,200,255,0,255);
				break;
			case 'blue':
				createColors(0,255,0,255,200,255);
				break;
			default:
				createColors();
				break;
		}
	}

	const refreshSongs = function() {
		fetch('songs')
			.then((response) => {
				return response.json();
			})
			.then((songs) => {

				let jukeboxElements = document.querySelectorAll('#jukebox option');
				jukeboxElements.forEach(jukeboxElement => {
					if (jukeboxElement.value != '') {
						jukeboxElement.remove();
					}
				});
				songs.forEach(song => {
					let songElement = htmlToElement('<option value="' + song.id + '"data-bpm="' + song.bpm + '"data-genre="' + song.genre + '">' + song.artist + " _ " + song.title + '</option>');

					// Get the parent element
					let parentDiv = document.getElementById('jukebox');

					// Insert the new element into before sp2
					parentDiv.appendChild(songElement)
				});
			})
			.catch((err) => console.log(err));
	};

	const activateLights = function(){
		const jukebox = document.getElementById('jukebox');
		const option = jukebox.options[jukebox.selectedIndex];

		const bpm = option.dataset.bpm;
		const genre = option.dataset.genre;

		window.clearInterval(dance);
		let color = '';
		switch (genre){
			case 'house':
				color = 'green';
				break;
			case 'electronic':
				color = 'red';
				break;
			
			case 'alternative techno':
				color = 'blue';
				break;
			
		}
		const timeout = (genre === 'rock'? (60.0/bpm)* 2000 : (60.0/bpm)* 1000)
		dance = setInterval(function(){
			createColorsWithMood(color)
		},timeout);
		console.log(option.dataset.genre);
	}

	const selectSong = function(songId) {
	}

	const addSong = function(song) {

	};

	const editSong = function(song) {

	};

	const pause = function() {

	}


	window.addEventListener('load', (event) => {

		refreshSongs();
		createColors();

		dance = setInterval(function() {
			createColorsWithMood(mood)
		}, 1000);

		// Stop dancing
		// window.clearInterval(dance);

	});

	// @todo
	// Event click listener for pause button
	document.getElementById('pause').addEventListener('click', function(){
		if(dance === 0){
			activateLights();
			dance = setInterval(function(){
				createColorsWithMood('blue')
			},100);
			document.querySelector('#pause .stop').innerHTML = 'Pause';
		}
		else{
			window.clearInterval(dance);
			dance = 0;
			document.querySelector('#pause .stop').innerHTML = 'Start';
		}
	})
	// @todo
	// Event change listener for song selector
	document.getElementById('jukebox').addEventListener('change', function(e){
		activateLights();
	})

	// @todo
	// Event click listener for add

	document.querySelector('input[type="submit"]').addEventListener('click', function(){
		const x = document.querySelector('input[type="submit"]');
		console.log(x.getElementsByName('title').value);
		console.log("vito is slim");
	})
	// @todo
	// Event click for edit

})();

