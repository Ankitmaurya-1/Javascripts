let i = 1;
let q = 2;
let table;
for (let i = 1; i < 11; i++) {
    table = i * q
    console.log(`${q}*${i} = ${table}`);
}

while loop
let a = 1;

while (a<=11) {
    console.log(a);
    a++;
    
}

print 0 to 100 number
let num =0 
for (let num = 0; num <=100 ; num++) {
    // const element = array[num];
    console.log(num);
    
}

for (let num = 0; num <=100 ; num++) {
    // const element = array[num];
    if(num % 2 ===0){
        console.log('your even num is:-',num);
    }
    
}

let gamenum = 30;
let usernum = prompt("guess the game number")
 while (gamenum !== usernum) {
   usernum = prompt(" NO you guess worng number .guess the game number again")
 }


 console.log("Finally you entered the right numbe");