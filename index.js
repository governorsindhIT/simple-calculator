import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Ener second number", type: "number", name: "secondNumber" }, { message: "slect one of the operator to perform operation", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"] }
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
;
if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
;
if (answer.operator === "Multiplication") {
    console.log("your value is\t" + answer.firstNumber * answer.secondNumber);
}
;
if (answer.operator === "Division") {
    console.log("your value is\t" + answer.firstNumber / answer.secondNumber);
}
;
