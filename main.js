var MYAPP={};

MYAPP.flight={
    airline: "Avianca",
    number: 555
};

MYAPP.person={
    first_name: "Carlos",
    last_name: "Arrieta"
};

//The Method Invocation Pattern
var myObject={
    value: 0,
    increment: function(inc){
        this.value+= typeof inc === "number" ? inc:1;
    }
};

myObject.increment();
document.writeln(myObject.value);

myObject.increment(10);
document.writeln(myObject.value);