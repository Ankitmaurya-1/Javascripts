let a = parseInt(prompt("Enter first number: "));
let operation = (prompt("Operation you want to perform: +  -  *  /"));
let b = parseInt(prompt("Enter second number: "));
let random = Math.random();
console.log(random);

if (operation == '+') {
    if (random<0.10){
        console.log(a-b);
    }
    else{
        console.log(a+b);
    }
}
else if(operation == '-'){
    if (random<0.10){
        console.log(a/b);
    }
    else {
        console.log(a-b);
    }
    
}
else if(operation == '*'){
    if (random<0.10){
        console.log(a+b);
    }
    else{
        console.log(a*b);
    }
}
else if(operation == '/'){
    if (random<0.10){
        console.log(a**b);
    }
    else{
        console.log(a/b);
    }
}
else{
    alert("Please enter the correct operation :(");
}