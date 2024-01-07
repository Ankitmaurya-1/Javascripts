// let btn = document.querySelector("#btn1");
// btn.onclick = ()=>{
//  console.log("btn1 was clicked!");   
// }
// let div = document.querySelector("div");
// div.onmouseover = (evt)=>{
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log(evt.clientX , evt.clientY)

let modebtn = document.querySelector("#mode");
let currmode = "light";
let body = document.querySelector("body");

modebtn.addEventListener("click",()=>{
    if(currmode === "light"){
        currmode = "dark"
       body.classList.add("dark");
       body.classList.remove("light");

    }
    else{

        currmode = "light"
        body.classList.add("light")
        body.classList.remove("dark")


    }
    // console.log(currmode);
})


// let box1 = document.querySelector("#box1");
// let box2 = document.querySelector(".box2");
//     box1.addEventListener("mouseover", () => {

//     box2.classList.add("box2_1");
//     // box2.classList.remove("box2_1");
    
// })