
let num1 = prompt("Please enter the 1st number: ");
let num2 = prompt("Please enter the 2nd number: ");
num1 = parseInt(num1);
num2 = parseInt(num2);
let oper = prompt("Please choose the operation (+, -, /, *): ");

if(oper === "+") {
    console.log(num1+num2);
}
else if(oper === "-") {
    console.log(num1-num2);
}
else if(oper === "*") {
    console.log(num1*num2);
}
else if(oper === "/") {
    console.log(num1/num2);
}

