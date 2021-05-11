// ARREGLO DE DATOS PARA CONECTAR A LA BASE DE DATOS
var firebaseConfig = {
  apiKey: "AIzaSyBXleaQbthLi3pTTIJTVLDT-66HUixINqM",
  authDomain: "test-e15fb.firebaseapp.com",
  projectId: "test-e15fb",
  storageBucket: "test-e15fb.appspot.com",
  messagingSenderId: "864245177987",
  appId: "1:864245177987:web:00c64070a03920389845b6",
  measurementId: "G-EBQJT1Z9LC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore(); // VARIABLE PARA HACER CONEXION CON BASE DE DATOS

let date; // VARIABLE DE FECHA 

/****** SECCION DE ARREGLOS PARA CADA VARIABLE OBTENIDA DESDE BD  *****/
let arrayAlcohol = [];
console.log('Arreglo inicial: ', arrayAlcohol);
let arrayCigarro = [];
let arrayCirugias = [];
let arrayEdad = [];
let arrayEstacion = [];
let arrayFiebre = [];
let arrayInfante = [];
let arraySalida = [];
let arraySilla = [];
let arrayTraumas = [];

date = new Intl.DateTimeFormat('es-mx', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(new Date());

$("#date").html(date); //FORMATO DE FECHA Y HACER QUE FECHA SE MUESTRE EN DOM

function getDataSinceBD(estacion_DOM, edad_Dom, infante_Dom, traumas_Dom, cirugias_Dom, fiebre_Dom, alcohol_Dom, cigarro_Dom, silla_Dom) {
  db.collection('Datos').get().then(function (currentCollection) {
    //ForEach es un tipo de FOR pero mejorado que regresa un arreglo o elementos dentro de una colección
    currentCollection.forEach(function (doc) {
      //console.log es basicamente una función que muestra en consola sin mover el HTML (es para hacer test)
      //console.log("Esta es la data", doc.data())

      // Primavera == Primavera = true 
      // if(estacio_Dom == doc.data.Estacion){

      //   arrayAlcohol.push(doc.data().Alcohol);
      // }

      // HACER UN IF POR CADA ARREGLO
      // if alcoholHTML = doc.data().Alcohol -> 0.6 = 0.6

      let salida = "N";
      if (salida == doc.data().Salida) {
        arraySalida.push(doc.data().Salida);

        if (estacion_DOM == doc.data().Estacion) {
          arrayEstacion.push(doc.data().Estacion);
        }

        if (edad_Dom == doc.data().Edad) {
          arrayEdad.push(doc.data().Edad);
        }
        if (infante_Dom == doc.data().Infante) {
          arrayInfante.push(doc.data().Infante);
        }
        if (traumas_Dom == doc.data().Traumas) {
          arrayTraumas.push(doc.data().Traumas);
        }
        if (cirugias_Dom == doc.data().Cirugias) {
          arrayCirugias.push(doc.data().Cirugias);
        }
        if (fiebre_Dom == doc.data().Fiebre) {
          arrayFiebre.push(doc.data().Fiebre);
        }
        if (alcohol_Dom == doc.data().Alcohol) {
          arrayAlcohol.push(doc.data().Alcohol);
        }
        if (cigarro_Dom == doc.data().Cigarro) {
          arrayCigarro.push(doc.data().Cigarro);
        }
        if (silla_Dom == doc.data().Silla) {
          arraySilla.push(doc.data().Silla);
        }

      }
      //arrayAlcohol.push(doc.data().Alcohol);
      //arrayCigarro.push(doc.data().Cigarro);
      //arrayCirugias.push(doc.data().Cirugias);
      //arrayEdad.push(doc.data().Edad);
      //arrayEstacion.push(doc.data().Estacion);
      //arrayFiebre.push(doc.data().Fiebre);
      //arrayInfante.push(doc.data().Infante);
      //arraySalida.push(doc.data().Salida);
      //arraySilla.push(doc.data().Silla);
      //arrayTraumas.push(doc.data().Traumas);
    })
  }).then(function () {
    formula(arrayEstacion, arrayEdad, arrayInfante, arrayTraumas, arrayCirugias, arrayFiebre, arrayAlcohol, arrayCigarro, arraySilla)
    // console.log('Arreglo final: ', arrayEstacion);
    const puntos_Estacion = arraySalida.length
    // console.log("Valor de Salida", puntos_Estacion);

  }).catch(function (error) {
    Swal.fire({
      title: 'Error obteniedo la información',
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Continuar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'index.html'
      }
    })
  })
}


function getDOMofIndex() {

  // SI BUSCAMOS POR CLASES SE UTILIZA EL .
  // SI BUSCAMOS POR ID SE UTILIZA EL #
  const estacion_DOM = document.querySelector("#estacion").value;
  console.log('estacion_DOM: ', estacion_DOM);

  const edad_dom = document.querySelectorAll("#edad input");
  //console.log('edad_dom: ', edad_dom);
  let valEdad;
  for (const currentInput of edad_dom) {
    if (currentInput.checked) {
      console.log(currentInput.value);
      valEdad = currentInput.value;
    }
  }

  const infante_Dom = document.querySelectorAll("#infante input");
  let valInfante;
  for (const currentInput of infante_Dom) {
    if (currentInput.checked) {
      console.log(currentInput.value);
      valInfante = currentInput.value;
    }
  }

  const traumas_Dom = document.querySelectorAll("#traumas input");
  let valTraumas;
  for (const currentInput of traumas_Dom) {
    if (currentInput.checked) {
      console.log(currentInput.value);
      valTraumas = currentInput.value;
    }
  }

  const cirugias_Dom = document.querySelectorAll("#cirugias input");
  let valCirugia;
  for (const currentInput of cirugias_Dom) {
    if (currentInput.checked) {
      console.log(currentInput.value);
      valCirugia = currentInput.value;
    }
  }

  const fiebre_Dom = document.querySelectorAll("#fiebre input");
  let valFiebre;
  for (const currentInput of fiebre_Dom) {
    if (currentInput.checked) {
      console.log(currentInput.value);
      valFiebre = currentInput.value;
    }
  }

  const alcohol_Dom = document.querySelectorAll("#alcohol input");
  let valAlcohol;
  for (const currentInput of alcohol_Dom) {
    if (currentInput.checked) {
      console.log(currentInput.value);
      valAlcohol = currentInput.value;
    }
  }

  const cigarro_Dom = document.querySelectorAll("#cigarro input");
  let valCigarro;
  for (const currentInput of cigarro_Dom) {
    if (currentInput.checked) {
      console.log(currentInput.value);
      valCigarro = currentInput.value;
    }
  }

  const silla_Dom = document.querySelectorAll("#silla input");
  let valSilla;
  for (const currentInput of silla_Dom) {
    if (currentInput.checked) {
      console.log(currentInput.value);
      valSilla = currentInput.value;
    }
  }

  const Inputsmain = document.querySelectorAll("#main input");
  console.log(Inputsmain)
  const Selectmain = document.querySelectorAll("#main select");

  for (const inputElement of Inputsmain) {
    console.log(inputElement.value)
    if (inputElement.value == undefined || inputElement.value.length == 0) {
      console.log("aqui")
      Swal.fire({
        title: 'Necesitas llenar todos los campos',
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Continuar'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'index.html';
        }
      })
      return;
    }
  }

  for (const selectElement of Selectmain) {
    if (selectElement.value == undefined || selectElement.value.length == 0) {
      Swal.fire({
        title: 'Necesitas llenar todos los campos',
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Continuar'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'index.html';
        }
      })
      return;
    }
  }

  getDataSinceBD(estacion_DOM, valEdad, valInfante, valTraumas, valCirugia, valFiebre, valAlcohol, valCigarro, valSilla)

}


function formula(arrayEstacion, arrayEdad, arrayInfante, arrayTraumas, arrayCirugias, arrayFiebre, arrayAlcohol, arrayCigarro, arraySilla) {

  const puntos_Estacion = arrayEstacion.length
  //console.log("Valor de estacion", puntos_Estacion);
  const puntos_Edad = arrayEdad.length
  //console.log("Valor de edad", puntos_Edad);
  const puntos_Infante = arrayInfante.length
  //console.log("Valor de Infante", puntos_Infate);
  const puntos_Traumas = arrayTraumas.length
  //console.log("Traumas", puntos_Traumas)
  const puntos_Cirugias = arrayCirugias.length
  //console.log("Cirugias", puntos_Cirugias)
  const puntos_Fiebre = arrayFiebre.length
  //console.log("Fiebre", puntos_Fiebre)
  const puntos_Alcohol = arrayAlcohol.length
  //console.log("Alcohol", puntos_Alcohol)
  const puntos_Cigarro = arrayCigarro.length
  //console.log("Cigarro", puntos_Cigarro)
  const puntos_silla = arraySilla.length
  //console.log("Silla", puntos_silla)

  let punto_es = 0,
    punto_ed = 0,
    punto_In = 0,
    punto_Tra = 0,
    punto_Cir = 0,
    punto_fi = 0,
    punto_al = 0,
    punto_ci = 0,
    punto_si = 0;

  if (puntos_Estacion == 33) {
    punto_es = 4
  }
  if (puntos_Estacion == 25) {
    punto_es = 3
  }
  if (puntos_Estacion == 24) {
    punto_es = 2
  }
  if (puntos_Estacion == 3) {
    punto_es = 1
  }

  if (puntos_Edad == 40) {
    punto_ed = 3
  }
  if (puntos_Edad == 38) {
    punto_ed = 2
  }
  if (puntos_Edad == 8) {
    punto_ed = 1
  }

  if (puntos_Infante == 76) {
    punto_In = 2
  }
  if (puntos_Infante == 10) {
    punto_In = 1
  }

  if (puntos_Traumas == 46) {
    punto_Tra = 1
  }
  if (puntos_Traumas == 40) {
    punto_Tra = 2
  }

  if (puntos_Cirugias == 44) {
    punto_Cir = 2
  }
  if (puntos_Cirugias == 42) {
    punto_Cir = 1
  }

  if (puntos_Fiebre == 54) {
    punto_fi = 2
  }
  if (puntos_Fiebre == 25) {
    punto_fi = 3
  }
  if (puntos_Fiebre == 7) {
    punto_fi = 1
  }

  if (puntos_Alcohol == 37) {
    punto_al = 5
  }
  if (puntos_Alcohol == 32) {
    punto_al = 4
  }
  if (puntos_Alcohol == 14) {
    punto_al = 3
  }
  if (puntos_Alcohol == 2) {
    punto_al = 2
  }
  if (puntos_Alcohol == 1) {
    punto_al = 1
  }

  if (puntos_Cigarro == 49) {
    punto_ci = 3
  }
  if (puntos_Cigarro == 19) {
    punto_ci = 2
  }
  if (puntos_Cigarro == 18) {
    punto_ci = 1
  }

  if (puntos_silla == 40) {
    punto_si = 4
  }
  if (puntos_silla == 27) {
    punto_si = 3
  }
  if (puntos_silla == 18) {
    punto_si = 2
  }
  if (puntos_silla == 1) {
    punto_si = 1
  }


  let Total = 0;
  Total = punto_es + punto_ed + punto_In + punto_Tra + punto_Cir + punto_fi + punto_al + punto_ci + punto_si;
  console.log("El total de puntos obtenidos es : ", Total);

  // variable Total =  variable puntos alcohol + varible puntos cigarro + etc ...

  //PARA CONCATENAR SE USA EL SIMBOLO DE +
  // Si quieres hacer suma haz parseo -> parseFloat(puntos_alcohol) 
  if (Total >= 20) {
    Swal.fire({
      title: 'Tu puntos son:' + Total,
      html: "<h5>La probabilidad de que seas un prospecto fértil es buena.</h5><br><p>Los resultados obtenidos están hechos con base en pruebas realizadas durante un estudio de semen de" +   
      " 100 voluntarios, siendo estos analizados con criterios de la OMS 2010. Generando una base de datos de este se utilizaron filtros y puntajes dependiendo de las respuestas que se seleccionaran para cada pregunta, sumando una determinada cantidad de puntos al momento de vaciar todos los datos" +
      " El puntaje mínimo para ser considerado o entrar en un factor de probabilidad alta de ser fértil es de 21 puntos, superando este puntaje con mayor cantidad de puntos significa que entonces varios de sus hábitos o sucesos del pasado benefician su situación o condición de probable fertilidad."+
      "</p>",
      icon: 'success',
      customClass: 'swal-wide',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Continuar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          html: "<p>Aun así, no es posible determinar con seguridad que este resultado sea 100% confiable y definitivo, ya que incluso hay varios factores que pueden influir a un fallo en el resultado mostrado, desde alteración de las respuestas proporcionadas como un fallo en la base de datos del sistema, por lo que se recomienda siempre ir con un especialista para obtener un diagnostico más confiable.</p>",
          customClass: 'swal-wide',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Continuar'
        }).then((result) => {
          window.location.href = 'index.html';

        })
      }
    })
  } else {
    Swal.fire({
      title: 'Tu puntos son:' + Total,
      html: "<h6>La probabilidad de que seas un prospecto fértil es no tan alta, se recomienda consultar con un especialista para determinar con firmeza el resultado.</h6><br><p>Los resultados obtenidos están hechos con base en pruebas realizadas durante un estudio de semen de" +   
      " 100 voluntarios, siendo estos analizados con criterios de la OMS 2010. Generando una base de datos de este se utilizaron filtros y puntajes dependiendo de las respuestas que se seleccionaran para cada pregunta, sumando una determinada cantidad de puntos al momento de vaciar todos los datos" +
      "Si el puntaje obtenido se encuentra por debajo de la mínima de 21 puntos quiere decir que nos encontramos con una probabilidad de que ciertos hábitos o sucesos lo tengan a usted en un factor de riesgo de ser infértil, pero aun no es momento de preocuparse, ya que se cuenta con información de que incluso la infertilidad no es permanente y existen factores que pueden ocasionar una infertilidad temporal, factores como:</p>",
      icon: 'error',
      customClass: 'swal-wide2',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Continuar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          html:"<ul><li>Fiebres altas recientes</li><li>Pasar tanto tiempo sentado</li><li>Enfermedades renales o de circulación </li></ul>"+
           "<p>Por lo cual se sugiere que si ciertos hábitos tales como, beber alcohol, fumar cigarro y tiempo sentado se encuentran con una alta frecuencia, ya sea beber muy seguido alcohol o fumar cigarro tanto e incluso pasar tantas horas sentado, reducirlos en la mayoría que sea posible para disminuir el factor de riesgo de infertilidad, pero siempre lo mas recomendable es consultar con un especialista para conocer la verdadera situación en la que se encuentra y qué medidas tomar al respecto."+
           "<br>Aún así, no es posible determinar con seguridad que este resultado sea 100% confiable y definitivo, ya que incluso hay varios factores que pueden influir a un fallo en el resultado mostrado, desde alteración de las respuestas proporcionadas como un fallo en la base de datos del sistema, por lo que se recomienda siempre ir con un especialista para obtener un diagnostico más confiable.</p>",
          customClass: 'swal-wide',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Continuar'
        }).then((result) => {
          window.location.href = 'index.html';

        })
      }
    })
  } 
}

// FUNCIONES DE JQUERY
$(document).ready(function () {


})

$("#get_data").click(function () {
  getDOMofIndex();
})