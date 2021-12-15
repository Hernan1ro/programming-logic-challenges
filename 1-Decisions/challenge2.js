// variables
const title = document.querySelector("h1");
const description = document.querySelector("h3");
title.innerText = "Challenge 1";
//Challenge
description.innerHTML = "Delete repetitive elements of an array";

// Array given
const saludos = [
  "Hola",
  "Que onda",
  "Como vas",
  "Q'hubo parcero",
  "Cantala gonorrea",
  "Que dice mi perrito",
  "Hola",
  "Hola",
];

//Primera manera

function eliminarRepetido(array) {
  const nuevoArraySinRepetidos = new Set(array);
  console.log(nuevoArraySinRepetidos);
}

eliminarRepetido(saludos);

// Segunda manera
const secondArray = function eliminarRepetido2(array) {
  let newArray = [];
  const iteration = array.map((item) => {
    array.forEach((data) => {
      if (data === item) {
        if (!newArray.includes(data)) {
          newArray.push(data);
        }
      }
    });
  });
  console.log(newArray);
};

secondArray(saludos);
