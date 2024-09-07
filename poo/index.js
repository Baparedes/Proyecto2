//Clase que permite crear una encuesta
class Encuesta {
  constructor(nombreEncuesta, opciones) {
    this.nombreEncuesta = nombreEncuesta;
    this.opciones = opciones;
    //Arreglo que almacenará las preguntas creadas
    this.preguntas = [];
    //Arreglo que almacenará las respuestas recibidas junto a su respectiva pregunta
    this.resultadosPreguntas = [];
    //Objeto que permite contar las respuestas según opción
    this.conteoRespuestas = {};
  }

  //Método que permite inicializar el conteo de las opciones elegidas por cada pregunta
  inicializarConteo(pregunta) {
    const conteo = {};
    //Funcion que recorre el arreglo inicializando el conteo en 0
    this.opciones.forEach((opcion) => {
      conteo[opcion] = 0;
    });
    this.conteoRespuestas[pregunta] = conteo;
    return conteo;
  }
  //Método que permite crear una pregunta en la encuesta
  crearPregunta(pregunta) {
    const preguntaCreada = pregunta;
    //Método de arreglo que va almacenando las preguntas creadas en el respectivo arreglo
    this.preguntas.push(preguntaCreada);
    //Se inicializa el conteo de respuestas para la pregunta creada
    this.inicializarConteo(preguntaCreada);
    //Se muestra en consola la pregunta creada y las opciones posibles para responder la pregunta
    console.log(preguntaCreada);
    console.log(this.opciones);
  }
  //Método que permite elegir la respuesta para cierta pregunta
  elegirOpcion(opcion, pregunta) {
    const preguntaRespondida = this.preguntas[pregunta - 1];
    //Condicional que permite la validación para que el usuario escriba una respuesta (se deja cierta libertad para que el usuario pueda votar nulo)
    if (!opcion || opcion === "" || opcion.trim() === "") {
      //Mensaje de error en consola para que el usuario ingrese una respuesta (en caso de querer votar nulo, el usuario puede escribir cualquier otra cosa)
      console.error("Debe ingresar una respuesta");
      //En el caso que el usuario haya respondido a una pregunta en específico, esta se almacena junto a su respuesta en el arreglo respectivo
    } else if (preguntaRespondida) {
      console.log(
        'Su respuesta a la pregunta "' + preguntaRespondida + '" fue: ' + opcion
      );
      this.resultadosPreguntas.push({ preguntaRespondida, opcion });
      console.log(this.resultadosPreguntas);
      //Se incrementa el conteo de la opción elegida para la pregunta correspondiente
      if (
        this.conteoRespuestas[preguntaRespondida] &&
        this.conteoRespuestas[preguntaRespondida][opcion] !== undefined
      ) {
        this.conteoRespuestas[preguntaRespondida][opcion] += 1;
      }
    }
  }
  //Método que permite obtener el conteo de las respuestas agrupadas por pregunta
  obtenerResultados() {
    console.log('Resultados de la encuesta "' + this.nombreEncuesta + '":');
    return this.conteoRespuestas;
  }
}

console.warn(
  "En este caso, se muestran las preguntas de cada encuesta junto a sus opciones. Las respuestas se obtienen por consola, entregando como argumento el nombre de la persona a elegir"
);

//Creación de primera encuesta junto a sus opciones
const Encuesta1 = new Encuesta("Votación Tesorería Sindicato", [
  "Marcelo",
  "Susana",
  "Sofía",
]);

//Creación de las preguntas de la primera encuesta
Encuesta1.crearPregunta(
  "E1-1. ¿Quien crees tú que debe ser Tesorero(a) del Sindicato?"
);
Encuesta1.crearPregunta("E1-2. ¿Quién debería ser asistente de tesorería?");

//Creación de la segunda encuesta
const Encuesta2 = new Encuesta("Votación Secretariado Sindicato", [
  "Lorena",
  "Carlos",
  "Andrés",
]);

//Creación de las preguntas de la segunda encuesta
Encuesta2.crearPregunta(
  "E2-1. ¿Quien debería ser Secretario(a) del Sindicato?"
);
Encuesta2.crearPregunta("E2-1. ¿Quién más debería ser parte del secretariado?");

//Creación de la tercera encuesta
const Encuesta3 = new Encuesta("Votación Presidente del Sindicato", [
  "Leonardo",
  "Rosa",
  "Rocío",
]);

//Creación de la pregunta de la tercera encuesta
Encuesta3.crearPregunta("E3-1. ¿Quién debería ser Presidente del Sindicato?");

//Ejemplo de respuesta
Encuesta1.elegirOpcion("Marcelo", 1);
