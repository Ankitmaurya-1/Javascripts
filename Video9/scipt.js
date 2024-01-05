// let heading = document.getElementsById("heading"); getElementById help to access the elements by using there unique id 
// console.dir(heading) This will print null if there is no such id name

// let heading = document.getElementsByClassName("heading")
// console.dir(heading); // getElementsByClassName return html collection just same as array this help us to access the element using their classes name . This will print Empty html collection if there is no such that class in html

// Better way to access elements;

// to use classe name in query selector we have to use with dot. .
// to use id name in query selectio we have to use with # .

// let firstel = document.querySelector("p");// return first element
// console.dir(firstel)

// let allel = document.querySelectorAll("p");// return all element
// console.dir(allel)

// let allc = document.querySelectorAll(".heading"); // return all class elements
// console.dir(allc);

// let button = document.querySelector("#myid");
// console.dir(button)

let div = document.querySelector("div")
console.dir(div )