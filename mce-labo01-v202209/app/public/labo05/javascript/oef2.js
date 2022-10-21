(function(){
    'use strict';
    const Astrid =  {
        name: "Astrid Galli",
        balance: 2500,
        friends: ['Bilal Azzouti', 'Crista Bracke', 'Duncan Reck']
    };
    const Bilal= { 
        name: "Bilal Azzouti",
        balance: 3000,
        friends: ['An Cornelis', 'Duncan Reck']

    };

    const Claude= {
        name: "Claude Chen",
        balance: -300,
        friends: ['Erwin Smith', 'Astrid Galli', 'Francis Alys']

    };  

    //oef2.a
    console.log(Astrid.name,
        Bilal.balance,
        Claude.friends[0])

    //oef2.b
    const createCouple = function(personOne,personTwo){
        const arr3 = [...personOne.friends, ...personOne.friends];
        let uniq = [...new Set(arr3)];
        let couple = {
        name: personOne.name + ' $ ' + personTwo.name,
        balance: personOne.balance + personTwo.balance,
        friends: uniq
        }
        return couple; 
       
    };
    console.log(createCouple(Astrid,Bilal));

})();