const URL = "https://cat-fact.herokuapp.com/facts";

const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
const para = document.querySelector("#para")


const getFacts = async () => {
    para.innerText ="getting cats facts.....";
    let response = await fetch(URL);
    console.log(response); // this is in JSON format
    let data = await response.json();
    // console.log();
    factpara.innerText = data[0].text;

};

btn.addEventListener("click", getFacts);