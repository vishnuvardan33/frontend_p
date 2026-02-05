const calculator = {
    add: function(a, b) {
        return a + b;   
    },
    subtract: function(a, b) {
        return a - b;   
    },
    multiply: function(a, b) {
        return a * b;   
    },
    divide: function(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
};
console.log("Addition: ", calculator.add(5, 3));         // Output: 8
console.log("Subtraction: ", calculator.subtract(5, 3)); // Output: 2       
console.log("Multiplication: ", calculator.multiply(5, 3)); // Output: 15
console.log("Division: ", calculator.divide(10, 2)); // Output: 5