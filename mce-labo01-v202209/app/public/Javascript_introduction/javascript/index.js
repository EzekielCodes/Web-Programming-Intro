/**
 * Clientside Scripting - Labo 02 - DOM
 * @author
 *
 **/
 
 ;(function() { 
	'use strict';

	// wait till DOM is loaded
	window.addEventListener('DOMContentLoaded', function() {
        // const buttonGroup = document.getElementsByClassName("calculator-keys");
        // console.log(buttonGroup)

        // const buttonGroupPressed = (e) => {
        // console.log(e.target); // Get any clicked element inside button-group wrapper div
        // }

        // document.getElementsByClassName("calculator-keys").addEventListener('click', buttonGroupPressed);
        var input = "";
        var inputTemp = "";
        var operator = "";
        var inputKeys = "";
        const table = document.querySelector('.calculator-keys');
        table.addEventListener('click', function(e) {
        input = input + e.target.innerHTML;
        document.querySelector('.calculator-screen').value = input;
        console.log('click was on ' + e.target.innerHTML);
        
        if (e.target.innerHTML == '×' || e.target.innerHTML == '+' || e.target.innerHTML == '-' || e.target.innerHTML == '÷' ){
            console.log("clicked");
            console.log(input);
            
            inputTemp = input.slice(0, -1);
            input = "";
            console.log(inputTemp);
            operator = e.target.innerHTML;
        }

        else if (e.target.innerHTML ==  '='){
            input = input.slice(0,-1);       
           switch (operator) {
            case '+':
                document.querySelector('.calculator-screen').value  = parseInt(inputTemp) + parseInt(input);
              break
            case '-':
                document.querySelector('.calculator-screen').value  = parseInt(inputTemp) - parseInt(input);
              break
            case '×':
                document.querySelector('.calculator-screen').value  = parseInt(inputTemp) * parseInt(input);
              break
            case '÷':
                document.querySelector('.calculator-screen').value  = parseInt(inputTemp) / parseInt(input);
              break
            default:
              return
          }
          input = "";
          inputTemp = "";

        }
        else if (e.target.innerHTML ==  '.'){
            input = input + '.';
            //document.querySelector('.calculator-screen').value = input;
        }

        else if (e.target.innerHTML ==  'AC'){
            input = "";
            inputTemp = "";
            operator = "";
            document.querySelector('.calculator-screen').value = " ";
        }
        

        });

        document.querySelector('.calculator-screen').addEventListener('keypress', function(e) {
            if (e.keyCode == 13){
                console.log("pu");
                var splitUp = inputKeys.match(/[^\d()]+|[\d.]+/g)
                console.log(splitUp);
                switch (splitUp[1]) {
                    case '+':
                        inputKeys =  parseInt(splitUp[0]) + parseInt(splitUp[2]);
                        document.querySelector('.calculator-screen').value  = inputKeys;
                      break
                    case '-':
                        inputKeys = parseInt(splitUp[0]) - parseInt(splitUp[2]);
                        document.querySelector('.calculator-screen').value  = inputKeys;
                      break
                    case '×':
                        inputKeys = parseInt(splitUp[0]) * parseInt(splitUp[2])
                        document.querySelector('.calculator-screen').value  = inputKeys;
                      break
                    case '÷':
                        inputKeys = parseInt(splitUp[0]) / parseInt(splitUp[2]);
                        document.querySelector('.calculator-screen').value  =  inputKeys;
                      break
                    default:
                      return
                  }
                  input = ""; 
            }
            inputKeys = inputKeys + e.key;
            console.log(inputKeys);
            console.log('You pressed ' + (e.shiftKey ? 'Shift-' : '')  + e.key + ', code ' + e.keyCode);
           
        });

        


        

        // document.getElementsByClassName("calculator-keys").addEventListener('click',function(){
            
        //     const buttonGroupPressed = (e) => {
        //         console.log(e.target); // Get any clicked element inside button-group wrapper div
        //     }
            
        // });



	});

	
})();