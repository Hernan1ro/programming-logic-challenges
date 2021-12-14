// variables
const title = document.querySelector("h1");
const description = document.querySelector("h3");
title.innerText = "Challenge 1";
//Challenge
description.innerHTML = "Read a Number and determine if that number ends in 4";

// Read the number
let number = 123123;

stringNumber = number.toString();
NumberArray = stringNumber.slice(stringNumber.lenght - 1, 1);

if (NumberArray === "4") {
  console.log("El número termina en 4");
} else {
  console.log("El número no terminna en cuatro");
}
