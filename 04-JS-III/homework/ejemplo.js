function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    var frase = "";
    for(var i = 0; i < palabras.length; i++){
      if(i === palabras.length -1){
        frase = frase + palabras[i];
      }else frase = frase + palabras[i] + " ";
    }
    //return frase;
    console.log(frase);
  }
  dePalabrasAFrase(["hola","mundo","!"]);