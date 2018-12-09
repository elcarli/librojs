var matrix = function (filas, columnas, defecto){
    var i, j, myMatrix=[];
    for(i=0; i<filas;i+=1){
       myMatrix[i] =[];
       for(j=0; j<columnas;j+=1){
           myMatrix[i][j]=defecto;
       }
    }
    return myMatrix;
};

var imprimirMatriz = function (filas, columnas, matriz){
    var x,y;
    for(x=0; x<filas;x+=1){
        for(y=0; y<columnas;y+=1){
            document.writeln(matriz[x][y]);
        }
        document.write("<br>");
    }
    
};
var miMat=matrix(5,5,0);

imprimirMatriz(5,5,miMat);
document.write("<br>");
document.write("<br>");

miMat[2][2]=1;

imprimirMatriz(5,5,miMat);



