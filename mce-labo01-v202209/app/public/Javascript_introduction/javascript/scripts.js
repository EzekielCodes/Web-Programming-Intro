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
			document.getElementById('layer2').style.top = 0;	
			document.getElementById('layer1').style.top = 0;	
			document.getElementById('layer3').style.top = 0;	
		});

		document.getElementById('buttonT').addEventListener('click', function(){
			document.body.style.backgroundColor = "gray";
			
		});

		document.getElementById('buttonU').addEventListener('click', function(){
			window.open('https://www.google.be/', '_blank');
		});

		document.getElementById('buttonV').addEventListener('click', function(){
			document.title = "testPagina";
		});

		document.getElementById('buttonY').addEventListener('click', function(){
			document.body.style.backgroundColor = "blue";
			
		});

		document.getElementById('buttonZ').addEventListener('click', function(){
			var textcol,
			message = 'Nice color choice';
			textcol = window.prompt('Enter a color:');
			document.body.style.backgroundColor = textcol;		
		});

		document.getElementById('buttonAA').addEventListener('click', function(){
			var h1Elements = document.getElementsByTagName("h2");

			for(var i = 0; i < h1Elements.length; i++) {
			h1Elements[i].style.color = "green";
			}
			
		});

		document.getElementById('buttonAB').addEventListener('click', function(){
			var buttons = document.querySelectorAll('#form1 input[type=button]')
			alert(buttons.length);			
		});
		
	});

	
})();
