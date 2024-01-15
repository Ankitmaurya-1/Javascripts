const body = document.querySelector("body");
const btn = document.querySelectorAll(".btn");

btn.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        if (e.target.id === "grey") {
            body.style.backgroundColor = "grey";
        } else if (e.target.id === "blue") {
            body.style.backgroundColor = "blue";
        } else if (e.target.id === "red") {
            body.style.backgroundColor = "red";
        } else {
            e.target.id === "yellow";
            body.style.backgroundColor = "yellow";
        }
    });
});