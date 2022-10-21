(function(){
    'use strict';
    //oef 1.a
    console.log('Hello world');

    //oef 1.b
    const getal1 = prompt('Voor getal 1 in:');
    const getal2 = prompt('Voor getal 2 in:')
    alert((parseFloat(getal1) + parseFloat(getal2)) / 2);

    //oef 1.c
    const reeks = ['random', true, 3.14 , function(){}, 38 , 39];
    const countInt = function(arr){
        let count = 0;
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === parseInt(arr[i])){
                count++;
            } 
        }
        return count;
    };

    console.log(countInt(reeks));

    //oef1.d
    
    
})();