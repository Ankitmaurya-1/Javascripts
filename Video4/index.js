// LOOPS

// for loops
let a = 1;
for (let  i = 0; i < 100 ; i++) {
    console.log(a + i);

}

// for in loops mostly use for objects


let obj = {
    name:"Ankit",
    role:"Coder",
    companyname:"Coder Ankit"
}
for (const key in obj) {{
        const element = obj[key];
        console.log(element);

    }
}

// for of loop itertor
for (const c of "ANKIT MAURYA") {

    console.log(c);
}

// for while loop 
let i = 0;
while (i < 11) {
    console.log(i);
    i++;              // condition to stop while loop
}