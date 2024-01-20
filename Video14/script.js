// const students = {
//     fullName: "Ankit Maurya",
//     marks: 90,
//     printMarks() {      // function in objects
//         console.log(this.marks); // students.marks acces thorugh this
//     }
// };

// const employee = {
//     calctax() {
//         console.log("Tax rate is 10%");
//     }
// };

// const KaranArjun = {
//     salary: 50000,
// calctax() {
//         console.log("Tax rate is 20%");  if object and prototype have same fucntion than object;s method will be used
//     }

// };

// KaranArjun.__proto__ = employee;

// class Car {
//     constructor(brand, mileage, model) {
//         this.brand = brand;
//         this.mileage = mileage;
//         this.model = model;
//     }
//     start() {
//         console.log("Car start !");
//     }
//     stop() {
//         console.log("Car stop !");
//     }
// }

// let supra = new Car("toyota", 10, 2022);
// let urus = new Car("lambo", 15, 2024);


// class parent {
//     hello() {
//         console.log("Hello Dear !");
//     }
// };

// class child extends parent { }

// let obj1 = new child()

// class user {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("You have viewd website data");
//     }
// }
// class admin extends user {
//     constructor(name, email) {
//         super(name,email);
//     }
//     editData() {
//         console.log("you can now edit");
//     }
// }

// let student1 = new user("Ankit", "ankit@gmail.com");
// let student2 = new user("Ankit", "ankit@gmail.com");

// let aadmin = new admin("admin", "admin@email.com");
