//declarando un objeto literal
var flight ={
    airline: "Oceanic",
    number: 815,
    //propiedad con atributos
    departure:{
        IATA: "SYD",
        time: "2004-09",
        city: "Sydney" //no se pone coma
    }, //aquí si se pone coma porque se termina la propiedad

    //propiedad con atributos
    arrival:{
        IATA: "LAX",
        time: "2004-10",
        city: "Los angeles"
    }//no se pone coma al final  
};

document.writeln(flight.airline);
var estado = flight.status || "nada";
document.writeln(estado);

flight.airline="Avianca";
document.writeln(flight.airline);

flight.status="Overdue";
document.writeln(flight.status);


var x = flight;
x.airline="LAN";

document.writeln(flight.airline);