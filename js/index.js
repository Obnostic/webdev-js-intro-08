// Prevent us from attempting to use variables
// that are not declared
"use strict"






let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}




let grades = [85, 90, 78, 92, 88];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}

let average = sum / grades.length;
console.log(average);


let numbers2 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers2.length; i++) {
    numbers2[i] += 10;
}
console.log(numbers2);


//Create an array and loop through it, logging out each value using the "for...of" syntax.
let numbers3 = [10, 20, 30, 40, 50];
for (let number of numbers3) {
    console.log(number);
}  


//Loop through an array using "for...of" and try assigning all the elements a new value. What happens?
let grades2 = [85, 90, 78, 92, 88];
    sum = 0;
for (let grade of grades2) {
    sum += grade;
}

average = sum / grades2.length;
console.log(average);

//Create an array and loop through it, logging out each value using the Array.forEach() method.
const numbers4 = [1, 2, 3, 4, 5];
numbers4.forEach(function(number) {
    console.log(number);
});

//Create an array and loop through it, logging out each value using the Array.forEach() method.
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function(fruit, index) {
    console.log(index + ': ' + fruit);  
});

//Loop through an array using the Array.forEach() method and try assigning all the elements a new value. What happens?
const numbers5 = [10, 20, 30];
numbers5.forEach(function(number, index, array) {
    console.log('Element: ' + number + ', Total elements: ' + array.length);
});

//Research "for...in" loops.