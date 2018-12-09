function saludar(){
    document.writeln("Hola mundo <br>");
}

(function (fun, veces){
    for(var x=0; x<veces; x++)
    {
        fun();
    }
})(saludar,10);

//repetirNVeces(saludar,10);

function calculateAge(birthYear, currentYear){
    var age=currentYear-birthYear;
    return age;
}
document.writeln(calculateAge(1996,2018)+"<br>")