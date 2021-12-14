// variables
const title = document.querySelector("h1");
const description = document.querySelector("h3");
title.innerText = "Challenge 1";
//Challenge
description.innerHTML = "Delete de repetitive elements of an array";

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
