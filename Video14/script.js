// const employee = {
//     calcTax() {
//         console.log("TAX RATE IS 10%");
//     }
// };

// const KaranArju = {
//     Salary: 500000,
// };

// KaranArju.__proto__ = employee; // this will create 1st object a prototype in second object

class Car { // constructor is used to set the intial values of any objects beacause it invovked atuomatically at the first
    constructor(brand, mileage, runned, modelYear, Color) {
        console.log("Create new object");
        this.brand = brand;
        this.mileage = mileage;
        this.runned = runned;
        this.modelYear = modelYear;
        this.Color = Color;
    }
    start() {
        console.log("Car start !");
    }
    stop() {
        console.log("Car stopped !");
    }

} // class are the templates to create many objects bascily they are tha intial values of any objects

let fourtuner = new Car("Toyota", 13, "3000km", 2019, "white");
console.log(fourtuner);
// fourtuner.setBrand("Toyota");/

let urus = new Car("Lambo", 30, "5000km", 2022, "Yellow");
console.log(urus);