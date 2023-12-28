let random = Math.random()
let first,second,third;
// 0.33 , 0.30 , 0.50
console.log(random);
// first nam/e
if (random<0.33) {
    first="carzy"
} 
else if(random<0.66 && random<=0.33 ) {
    first = "amazing"
}
else{
    first="fire"
}
// second name
if (random<0.45) {
    second="garment"
} 
else if(random<0.70 && random<=0.45 ) {
    second = "engine"
}
else{
    second="food"
}
// third name
if (random<0.50) {
    third="bros"
} 
else if(random<0.66 && random<=0.50 ) {
    third = "limited"
}
else{
    third="hub"
}
console.log(`${first} ${second} ${third}`);