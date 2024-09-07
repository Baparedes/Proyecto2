//Definición de la estructura de preguntas y respuestas
const preguntas = [
  {
    pregunta: "¿Quién debería ser Tesorero(a) del Sindicato?",
    opciones: ["Marcelo", "Susana", "Sofía"],
    votos: [0, 0, 0], // Conteo de votos para cada opción
  },
  {
    pregunta: "¿Quién debería ser asistente de tesorería?",
    opciones: ["Marcelo", "Susana", "Sofía"],
    votos: [0, 0, 0],
  },
  {
    pregunta: "¿Quién debería ser Secretario(a) del Sindicato?",
    opciones: ["Lorena", "Carlos", "Andrés"],
    votos: [0, 0, 0],
  },
  {
    pregunta: "¿Quién más debería ser parte del secretariado?",
    opciones: ["Lorena", "Carlos", "Andrés"],
    votos: [0, 0, 0],
  },
  {
    pregunta: "¿Quién debería ser Presidente del Sindicato?",
    opciones: ["Leonardo", "Rosa", "Rocío"],
    votos: [0, 0, 0],
  },
];

// Función que permite obtener la respuesta del usuario
function obtenerRespuestaUsuario(pregunta) {
  let opcionesString = pregunta.opciones
    .map((opcion, index) => `${index + 1}. ${opcion}`)
    .join("\n");
  let respuestaUsuario = prompt(
    `${pregunta.pregunta}\n${opcionesString}\nEscribe el número de tu opción:`
  );
  return parseInt(respuestaUsuario) - 1; // Retornamos el índice de la opción seleccionada
}

// Función que permite registrar la votación
function realizarPregunta(pregunta) {
  console.log(pregunta.pregunta);
  const indiceOpcionSeleccionada = obtenerRespuestaUsuario(pregunta);
  if (
    indiceOpcionSeleccionada >= 0 &&
    indiceOpcionSeleccionada < pregunta.opciones.length
  ) {
    pregunta.votos[indiceOpcionSeleccionada] += 1; // Incrementar el conteo de la opción seleccionada
    console.log(`Votaste por: ${pregunta.opciones[indiceOpcionSeleccionada]}`);
  } else {
    console.log("Opción no válida.");
  }
}

// Función que permite realizar las preguntas y registrar las votaciones
preguntas.forEach((pregunta) => {
  realizarPregunta(pregunta);
});

// Función que permite obtener el resultado más votado por pregunta
function obtenerResultados(preguntas) {
  preguntas.forEach((pregunta) => {
    const maxVotos = Math.max(...pregunta.votos); // Encuentra el número máximo de votos
    const opcionesMasVotadas = pregunta.opciones.filter(
      (opcion, index) => pregunta.votos[index] === maxVotos
    );
    console.log(`\nPregunta: ${pregunta.pregunta}`);
    if (maxVotos > 0) {
      console.log(
        `Opción más votada: ${opcionesMasVotadas.join(
          ', '
        )} con ${maxVotos} votos`
      );
    } else {
        console.log(
            'No hubo votos válidos'
        );
        
    }
  });
}

// Se muestra un resumen final con los resultados
console.log("\nResumen Final de la Votación:");
obtenerResultados(preguntas);
console.warn(
  "En este caso hay un solo voto por opción, pero se asume que varias personas realizarían la misma encuesta (teniendo memoria), caso en el que sí se almacenarían varias respuestas, lo que llevaría a un aumento en la cantidad de votos por opción"
);
