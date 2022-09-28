let palabras = [
    "ALURA",
    "CHALLENGE",
    "ORACLE",
    "COLOMBIA",
    "HTML",
    "CSS",
    "JAVASCRIPT",
  ];
  
  var lienzo = document.querySelector("#dibujo-ahorcado");
  var pincel = lienzo.getContext("2d");
  var textosLienzo = document.querySelector("#lineas-ahorcado");
  var lineas = textosLienzo.getContext("2d");
  
  var letras = [];
  var contadorErrores = 0;
  var contadorAciertos = 0;
  
  function crearPalabra() {
    var palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    return palabraSecreta;
  }
  
  var ingresarPalabra = llamarDatosStg();
  
  if (ingresarPalabra == null) {
    palabraSecreta = crearPalabra();
    dibujarLineas(palabraSecreta);
    logicaHorca(palabraSecreta);
  } else {
    palabras.push(ingresarPalabra);
    palabraSecreta = crearPalabra();
    dibujarLineas(palabraSecreta);
    logicaHorca(palabraSecreta);
  }
  