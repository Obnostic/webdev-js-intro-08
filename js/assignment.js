"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

function findSmallestNumber() {
  
    let tiny=1000;
    for (let i = 0; i < myNumbers.length; i++) {
      if (myNumbers[i] < tiny) {
      tiny = myNumbers[i];
      }
    }
    smallestNumberElement.innerText = tiny;
}

function findLargestNumber() {
  let bigbig=0;
    for (let i = 0; i < myNumbers.length; i++) {
      if (myNumbers[i] > bigbig) {
      bigbig = myNumbers[i];
      }
    }
    largestNumberElement.innerText = bigbig;
}



function findAverage() {

  let sum = 0;
  for (let i = 0; i < myNumbers.length; i++) {
      sum += myNumbers[i]; 
  }
  let average = sum / myNumbers.length;
  averageNumberElement.innerText = average;
}



submissionBtn.addEventListener("click", function () {
findSmallestNumber(); 
findLargestNumber();
findAverage();
})  