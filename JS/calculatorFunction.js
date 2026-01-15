const calculator = {
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    }   ,
    mul : function(a,b){
        return a*b;
    },
    div : function(a,b){
        if(b === 0){
            return 'Error: Division by zero';
        }
        return a/b;
    }
}
console.log("Addition: ", calculator.add(5, 3)); // 8
console.log("Subtraction: ", calculator.sub(5, 3)); // 2
console.log("Multiplication: ", calculator.mul(5, 3)); // 15
console.log("Division: ", calculator.div(5, 0)); // Error: Division by zero