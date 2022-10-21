/**
 * Clientside Scripting - Labo 02 - DOM
 * @author
 *
 **/
 
;(function() { 
	'use strict';

	// wait till DOM is loaded
	window.addEventListener('DOMContentLoaded', function() {
		console.log('do something');
		document.getElementById('buttonA').addEventListener('click', function(){
			const val = document.getElementById('textfield1').value;
			alert(val);
		});
	
		document.getElementById('buttonB').addEventListener('click', function(){
			const val = document.getElementById('textfield1').value = 'Hallo';
		});

		document.getElementById('buttonE').addEventListener('click', function(){
			const val = document.getElementById('button1').disabled = true;
		});

		document.getElementById('buttonF').addEventListener('click', function(){
			const val = document.getElementById('button1').click();
		});

		document.getElementById('buttonG').addEventListener('click', function(){
			const val = document.getElementById('checkbox1').checked = true;
		});

		document.getElementById('buttonH').addEventListener('click', function(){
			const checkbox2 = document.getElementById('checkbox2');
			checkbox2.checked = !checkbox2.checked;
		});

		//select1
		document.getElementById('buttonI').addEventListener('click', function(){
			const val = document.getElementById('select1').selectedIndex = '2';
		});

		document.getElementById('buttonJ').addEventListener('click', function(){
			const val = document.getElementById('select1').value;
			alert(val);
		});

		document.getElementById('buttonK').addEventListener('click', function(){
			const val = document.getElementById('cursus1').alt = 'cursus ritedekken';
			
		});

		document.getElementById('buttonL').addEventListener('click', function(){
			const val = document.getElementById('cursus1').src;
			document.getElementById('cursus2').src = val;
			
		});

		document.getElementById('buttonM').addEventListener('click', function(){
			const val = document.getElementById('cursus2').width = 160;
			
		});

		
		document.getElementById('buttonN').addEventListener('click', function(){
			const val = document.getElementById('place1').textContent = 'dit is plaats1';	
		});

		document.getElementById('buttonO').addEventListener('click', function(){
			const val = document.getElementById('place2').style.backgroundColor = 'blue';	
		});

		document.getElementById('buttonP').addEventListener('click', function(){
			const val = document.getElementById('place1').classList.add('errorMsg');	
		});

		document.getElementById('buttonQ').addEventListener('click', function(){
			const val = document.getElementById('layer2').style.visibility = 'hidden';	
		});

		document.getElementById('buttonR').addEventListener('click', function(){
			const val = document.getElementById('layer1').style.zIndex = 1;	
		});

		document.getElementById('buttonS').addEventListener('click', function(){
			const val = document.getElementById('layer1').style.zIndex = 1;	
		});
	});

	
})();
