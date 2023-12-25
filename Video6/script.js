let a = parseInt(prompt("Enter first number: "));
let c = prompt("Enter first operator : + , - , * , / : ");
let b = parseInt(prompt("Enter second number: "));

let random = Math.random()
console.log(random);

if (c == '+') {
    if (random < 0.10) {
        prompt("Result is:- ", a - b);
    }
    else {
        prompt("Result is:- ", a + b);
    }
}
else if (c == '-') {
    if (random < 0.10) {
        prompt("Result is:- ", a + b);
    }
    else {
        prompt("Result is:- ", a - b);
    }
}
else if (c == '*') {
    if (random < 0.10) {
        prompt("Result is:- ", a / b);
    }
    else {
        prompt("Result is:- ", a * b);
    }
}
else if (c == '/'){
    if (random < 0.10) {
        prompt("Result is:- ", a * b);

    }
    else {
        prompt("Result is:- ", a / b);
    }
}
else {
    alert("Enter valid number or operator")
}

