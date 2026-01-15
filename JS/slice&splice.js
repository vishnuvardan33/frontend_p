//slice example
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ['Orange', 'Lemon']

//splice example
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // Inserts 'Feb' at index 1
console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'June']