function makeSizer(size) {
    return function() {
      document.body.style.fontSize = size + 'px';
    };
  };
  
  var size12 = makeSizer(12);
  var size14 = makeSizer(14);
  var size60 = makeSizer(60);

  //De esta manera, se cargara el elemento y luego se le asignara
  // la funcion, recuerda que todo codigo Javascript
  // debe ejecutarse despues de cargar el DOM.
  window.onload=function(){
    document.getElementById("size-12").onclick = size12;
    document.getElementById("size-14").onclick = size14;
    document.getElementById("size-60").onclick = size60;
  };
