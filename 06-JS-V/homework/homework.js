// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
<<<<<<< HEAD
  class Usuario{
    constructor(opciones){
      this.usuario = opciones.usuario,
      this.nombre = opciones.nombre,
      this.email = opciones.email,
      this.password = opciones.password
      
    }

    saludar(){
      return 'Hola, mi nombre es ' + this.nombre;
    }
    
  }
 
  
  return Usuario;
=======
  class Usuario {
    constructor (opciones){
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
    }
  }
  Usuario.prototype.saludar = function(){
    return 'Hola, mi nombre es ' + this.nombre;
  }
  return Usuario;
  console.log(Usuario);
>>>>>>> b2f086519208c6c36d090252dae718886cea018c
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
<<<<<<< HEAD
  Constructor.prototype.saludar = function(){
    
    return "Hello World!";
  }
=======
  Usuario.prototype.saludar= function(){
    return "Hello World!";
  }
  
>>>>>>> b2f086519208c6c36d090252dae718886cea018c
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
<<<<<<< HEAD
  String.prototype.reverse= function(){
    var cadenaInvertida = "";

    for (let i = this.length-1; i >= 0; i--) {
      cadenaInvertida += this[i];
      
    }
    return cadenaInvertida;
  }



=======
  String.prototype.reverse = function(){
    return this.arguments.reverse()
  }
>>>>>>> b2f086519208c6c36d090252dae718886cea018c
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
<<<<<<< HEAD
    constructor(nombre, apellido, edad,domicilio) {
      // Crea el constructor:
      this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad,
      this.domicilio = domicilio,
      this.detalle = function(){
        return {
          Nombre: this.nombre,
          Apellido: this.apellido,
          Edad: this.edad,
          Domicilio: this.domicilio
        }
        

=======
    constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio

      var detalle = function (params) {
        return Persona;
>>>>>>> b2f086519208c6c36d090252dae718886cea018c
      }
    }
}

function crearInstanciaPersona(nombre, apellido, edad,domicilio) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
<<<<<<< HEAD
  var persona = new Persona(nombre, apellido, edad,domicilio);
  return persona;
=======
  var nuevaPersona = new Persona(nombre, apellido, edad, dir);
>>>>>>> b2f086519208c6c36d090252dae718886cea018c
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
<<<<<<< HEAD
  Persona.prototype.datos = function(){
    return this.nombre+","+" " + this.edad +" "+"años";
=======
  Persona.datos = function () {
    return this.Nombre + " " + this.edad;
>>>>>>> b2f086519208c6c36d090252dae718886cea018c
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
