//array slice method
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let citrusFruits = fruits.slice(1, 4);
console.log(citrusFruits); // Output: ['banana', 'cherry', 'date']
//array splice method
let vegetables = ['carrot', 'broccoli', 'spinach', 'potato'];
let removedVegetables = vegetables.splice(1, 2, 'kale', 'lettuce');
console.log(removedVegetables); // Output: ['broccoli', 'spinach']
console.log(vegetables); // Output: ['carrot', 'kale', 'lettuce', 'potato']
//array slice example 2
let numbers = [10, 20, 30, 40, 50, 60];
let subArray = numbers.slice(2);
console.log(subArray); // Output: [30, 40, 50, 60]
//array splice example 2
let colors = ['red', 'green', 'blue', 'yellow'];
colors.splice(2, 0, 'purple', 'orange');
console.log(colors); // Output: ['red', 'green', 'purple', 'orange', 'blue', 'yellow']
//array slice with negative indices
let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
let lastThreeLetters = letters.slice(-3);
console.log(lastThreeLetters); // Output: ['d', 'e', 'f']
//array splice to remove elements
let animals = ['dog', 'cat', 'rabbit', 'hamster', 'fish'];
let removedAnimals = animals.splice(2, 2);
console.log(removedAnimals); // Output: ['rabbit', 'hamster']
console.log(animals); // Output: ['dog', 'cat', 'fish']