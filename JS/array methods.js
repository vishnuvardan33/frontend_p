//array methods
let fruits = ['apple', 'banana', 'cherry'];
fruits.push('date'); // adds 'date' to the end
console.log(fruits); // ['apple', 'banana', 'cherry', 'date']
fruits.pop(); // removes the last element
console.log(fruits); // ['apple', 'banana', 'cherry']
fruits.shift(); // removes the first element
console.log(fruits); // ['banana', 'cherry']
fruits.unshift('apricot'); // adds 'apricot' to the beginning
console.log(fruits); // ['apricot', 'banana', 'cherry']

//object manipulation
let person = { name: 'John', age: 30 };
person.city = 'New York'; // adds a new property
console.log(person); // { name: 'John', age: 30, city: 'New York' }
delete person.age; // removes the age property
console.log(person); // { name: 'John', city: 'New York' }
