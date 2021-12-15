// variables
const title = document.querySelector("h1");
const description = document.querySelector("h3");
title.innerText = "Challenge 3";
//Challenge
description.innerHTML = "Read a vector and determine the max, min and mean";

const vector = [];

for (let i = 0; i < 3; i++) {
  vector.push(Math.round(Math.random() * 100));
}

function determineMax(array) {
  let maxNum = 0;
  const max = array.map((item) => {
    if (item > maxNum) {
      maxNum = item;
    }
  });
  console.log("Numero maximo", maxNum);
}
function determineMin(array) {
  let minNum;
  const min = array.map((item) => {
    if (minNum === undefined) {
      minNum = item;
    } else if (item < minNum) {
      minNum = item;
    }
  });
  console.log("Numero mínimo", minNum);
}
function determineMean(array) {
  function getSum(total, num) {
    return (total = total + num);
  }
  const total = array.reduce(getSum, 0);
  console.log("Promedio", total / array.length);
}

determineMax(vector);
determineMin(vector);
determineMean(vector);

console.log(vector);
