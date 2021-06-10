// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:


  var primeraMayuscula=[];
  primeraMayuscula.push(nombre[0].toUpperCase())
  for (let i = 1; i <= nombre.length-1; i++) {
      primeraMayuscula.push(nombre[i]);
  }
  
  return primeraMayuscula.join("");
 
  // otra alternativa
  // return nombre[0].toUpperCase()+nombre.slice(1);
  /*  UNA MAS
  var arr= [];
  for(let i=0; i<nombre.length; i++){
    if (i === 0){
      arr.push(nombre[i.toUpperCase()])
    }else{
      arr.push(nombre[i]);
    }
  }
  return arr;
  */

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  
   var resultado = numeros.reduce(function(acc, el){
     return acc + el;
   })
   cb(resultado);
  /*
   var suma = 0;
  
  for (let i = 0; i <= numeros.length-1; i++) {
    suma = suma + numeros[i];
    
  }
  //console.log(suma);
  //console.log(cb.push(suma));
  return cb(suma);
  */
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(valor){
    return cb(valor);
  })

  /*
    array.forEach(function(elemento){
      return.cb(elemento);
    })
  */
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  //console.log(array);
  /*
  var newArray = [];
  array.forEach(function(valor){
    newArray.push(cb(valor));
  });
  return newArray;
  */
  return array.map(function(elemento){
    return cb(elemento)
  });

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  
  /*
  console.log(array);
  var newArray= [];
  array.forEach(function(palabra){
    if (palabra.startsWith('a')) {
      //console.log(palabra);
      newArray.push(palabra);
    }
  });
  return newArray;
  */
  var newArray = array.filter(function(elemento){
    return elemento[0] === "a" || elemento[0] === "A";;
  })
  return newArray;


}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
