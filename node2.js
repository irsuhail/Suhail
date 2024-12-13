


const args = process.argv.slice(2);


if (args.length !== 3) {
    console.log("Error: Please provide exactly three arguments: <num1> <operator> <num2>");
    process.exit(1);
}


const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);


if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Both operands must be valid numbers.");
    process.exit(1);
}


let result;
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 === 0) {
            console.log("Error: Division by zero is not allowed.");
            process.exit(1);
        }
        result = num1 / num2;
        break;
    default:
        console.log(`Error: Invalid operator '${operator}'. Supported operators are +, -, *, /.`);
        process.exit(1);
}


console.log(`The result of ${num1} ${operator} ${num2} is ${result}.`);
