/*
var human = function(name) {
    var that = {};

    that.name = name || '';
    that.gender = '';
    that.planetOfBirth = 'Earth';
    that.sayGender = function () {
        return(that.name + ' says my gender is ' + that.gender);
    };
    that.sayPlanet = function () {
        return(that.name + ' was born on ' + that.planetOfBirth);
    };

    return that;
}

var male = function (name) {
    var that = human(name);
    that.gender = 'Male';
    return that;
}

var female = function (name) {
    var that = human(name);
    that.gender = 'Female';
    return that;
}

var david = male('David');
var jane = female('Jane');

document.writeln(david.sayGender()+"<br>"); // David says my gender is Male
document.writeln(jane.sayGender()+"<br><br>"); // Jane says my gender is Female

david.planetOfBirth = 'Mars';

document.writeln(david.sayPlanet()+"<br>"); // David was born on Mars
document.writeln(jane.sayPlanet()+"<br>"); // Jane was born on Earth
*/

//  https://davidshariff.com/blog/javascript-inheritance-patterns/

var vehicle = function(attrs){
    var _privateObj ={
        hasEngine: true
    },
    that ={};

    that.name = attrs.name||null;
    that.engineSize=attrs.engineSize||null;
    that.hasEngine=function(){
        alert("this "+that.name+" has an engine: "+_privateObj.hasEngine);

    };
    return that;
}

var motorbike = function(){
    //private
    var _privateObj={
        numWheels: 2
    },

    //inherit
    that = vehicle({
        name: "Motorbike",
        engineSize: "Small"
    });

    //public
    that.totalNumWheels = function(){
        alert("This Motobike has "+ _privateObj.numWheels+ "Wheels");
    };

    that.increaseWheels = function () {
        _privateObj.numWheels++;
    };


    return that;
};

var boat = function(){
    //inherit
    that = vehicle({
        name: "Boat",
        engineSize: "Large"
    });

    return that;
};

/*myBoat = boat();
myBoat.hasEngine();
alert(myBoat.engineSize);
*/
myMotorBike = motorbike();
myMotorBike.totalNumWheels();
