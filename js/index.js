// Prevent us from attempting to use variables
// that are not declared
"use strict"




/*
// Create an array and loop through it, logging out each value using the basic loop syntax. 
let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


//Create an array and loop through it, logging out each value using the "for...of" syntax.
let numbers3 = [10, 20, 30, 40, 50];
for (let number of numbers3) {
    console.log(number);
}  



//Create an array and loop through it, logging out each value using the Array.forEach() method.
const numbers4 = [1, 2, 3, 4, 5];
numbers4.forEach(function(number) {
    console.log(number);
});



//Loop through an array using "for...of" and try assigning all the elements a new value. What happens?
let grades3 = [85, 90, 78, 92, 88];
    for (let grade of grades3) {
    grade = grade/2;    
    console.log(grade);
}
console.log(grades3);  // the array is not altered


//Loop through an array using "for...of" and try assigning all the elements a new value. What happens?
let grades4 = [85, 90, 78, 92, 88];
    for (let grade of grades4) {
    grades4[grade] = grades4[grade]/2;    
    console.log(grades4[grade]);   // Output:  NaN x 5
    grade = grade/2;
    console.log(grade);
}
console.log(grades4);  // the array



/*
let grades = [85, 90, 78, 92, 88];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i]; 
}

let average = sum / grades.length;
console.log(average);                      // Output: 86.6



let numbers2 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers2.length; i++) {
    numbers2[i] += 10;
}
console.log(numbers2);



// reate an array and loop through it, logging out each value using the "for...of" syntax. 
let grades2 = [85, 90, 78, 92, 88];
    sum = 0;
for (let grade of grades2) {
    sum += grade;
}

average = sum / grades2.length;
console.log(average);




//Create an array and loop through it, logging out each value using the Array.forEach() method.
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function(fruit, index) {
    console.log(index + ': ' + fruit);  
});

const numbers5 = [10, 20, 30];
numbers5.forEach(function(number, index, array) {
    console.log('Element: ' + number + ', Total elements: ' + array.length);
});


//Loop through an array using the Array.forEach() method and try assigning
//  all the elements a new value. What happens?

const fruits3 = ['apple', 'banana', 'cherry'];
fruits3.forEach(function(fruit, index) {
    fruit = fruit + ' pie';
    console.log(index + ': ' + fruit);  
});

const fruits4 = ['apple', 'banana', 'cherry'];
fruits4.forEach(function(fruit, index) {
    fruits4[index] = fruits4[index] + ' pie';
    console.log(index + ': ' + fruits4[index]);  
});




//Research "for...in" loops.

const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
  text += person[x];
} 
console.log(person);


const numbers6 = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers6) {
  txt += numbers6[x];
}
console.log(numbers6);
*/