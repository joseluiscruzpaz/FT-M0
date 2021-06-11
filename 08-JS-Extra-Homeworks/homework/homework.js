// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  var newArray = [];
  
  for (const i in objeto) {
    var subArray = [];
    subArray.push(i);
    subArray.push(objeto[i]);
    newArray.push(subArray);
  }
  return newArray;
  //console.log(newArray);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  var stringEnArray = string.split('');
  var arrayContador =[];
  console.log(stringEnArray);
  for (let i = 0; i < stringEnArray; i++) {
    for(let j= 0; j < stringEnArray; j++){
      if (stringEnArray[i] === stringEnArray[j]) {
        
        arrayContador.push(stringEnArray[i]);
      }
    }
   
  }
  console.log(arrayContador);
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  
 
  
  
  
  
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}

/*
   
function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una array, donde cada elemento representa
  // un par clave-valor en forma de array.
  //Ejemplo:
  /*objeto({
      D: 1, => [D,1]
      B: 2, => [B,2]
      C: 3 => [C,3]
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  /*
  var arrayFinal = [];
  for( const prop in objeto){
    var subArray = [];
    subArray.push(prop);
    subArray.push(objeto[prop])
    arrayFinal.push(subArray)
  }
  return arrayFinal;
}
var objeto = {
      D: 1,
      B: 2,
      C: 3
};
console.log(deObjetoAmatriz(objeto))



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var longitud1 = arreglo1.length;
  var longitud2 = arreglo2.length;
  var arrayFinal = [];
    for(let i=0; i<longitud1; i++){
      for(let j=0; j<longitud2; j++){
        if(arreglo1[i] === arreglo2[j]){
          arrayFinal.push(arreglo1[i]);
        }
      }
    }
  return arrayFinal.sort();
}
var array1 = [4];
var array2 = [1];
console.log(buscoInterseccion(array1,array2));



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var lista = [];
  var arrayInvertido = [];
  lista = str.split(" ");
  for(let i=0; i<lista.length; i++){
    var arrayPalabra = lista[i].split('');
    let palabraReversed = arrayPalabra.reverse();
    palabraReversed = palabraReversed.join('');
    arrayInvertido.push(palabraReversed);
  }
  return arrayInvertido.join(" ");
}
console.log(asAmirror("Hola es al reves"));

*/



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

