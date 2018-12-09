/*var numeros = ["cero","uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho","nueve"];

document.writeln(numeros[8]);

document.writeln(numeros.length);

numeros.splice(8,1);

document.writeln(numeros[8]);

document.writeln(numeros.length);
*/

//Se agrega un método a Array
Array.method("reduce", function(f, value){
    var i;
    for (i=0; i<this.length; i+=1){
        value=f(this[i],value);
    }
    return value;
});

var data = [1,2,3];

var sumar = function(a,b){
    return a+b;
};

var multiplicar = function(a,b){
    return a*b;
};

var suma_array=data.reduce(sumar,0);
document.writeln(suma_array);

var multi_array=data.reduce(multiplicar, 1);
document.writeln(multi_array);