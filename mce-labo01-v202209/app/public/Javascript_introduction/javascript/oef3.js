(function(){
    'use strict';
    class Disc {
        constructor(radius, pi) {
        this.radius = radius;
        this.pi = pi;
        }

        GetCircumference = function(){
            return 2 * (22/7) * this.radius;
        };
    
        GetArea = function(){
            return Math.PI * (this.radius * 2);
        };
        
    }

    let discOne = new Disc(14,Math.PI);
    console.log(discOne.GetArea());
    console.log(discOne.GetCircumference());
    

})();