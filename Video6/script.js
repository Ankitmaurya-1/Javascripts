let random = Math.random()
console.log(random);
let num1 = prompt("Enter your first number: ");
let oper = prompt("Enter your operator from (+,-,*,/,): ");
let num2 = prompt("Enter your second number: ");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}


if(random >0.1){
    // Perfom right calculation
   alert(`The result is ${eval(`${num1} ${oper} ${num2}`)}`)
    // prompt("Your result is : ",num1 - num2)
    // prompt("Your result is : ",num1 * num2)
    // prompt("Your result is : ",num1 / num2)
}
else{
    // perfom wrong calculation
    alert(`The result is ${eval(`${num1} ${oper} ${num2}`)}`)
    oper = obj[oper]
}