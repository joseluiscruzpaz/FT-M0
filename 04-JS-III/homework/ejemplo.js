function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
 var newArray = n.toString()
 if (newArray[0] === "9") {
   return true;
 }else{
   return false;
 }
  
  
}
empiezaConNueve(986)