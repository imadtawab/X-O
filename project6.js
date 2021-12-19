const caro = document.querySelectorAll(".container button");
const winner1 = document.querySelector(".winner1");
const winner2 = document.querySelector(".winner2");
const winner3 = document.querySelector(".winner3");
const winner4 = document.querySelector(".winner4");
const winner5 = document.querySelector(".winner5");
const winner6 = document.querySelector(".winner6");
const winner7 = document.querySelector(".winner7");
const winner8 = document.querySelector(".winner8");
const winner9 = document.querySelector(".winner9");
// caro.addEventListener("click", (eo) => {
//     eo.target.classList.toggle("ix")
//     eo.target.classList.toggle("io")
// })

caro.forEach((item) => {
  item.addEventListener("click", (eo) => {
    item.setAttribute("disabled", "");
    // item.classList.add("check")

    const xo = document.createElement("span");
    if (item.parentElement.classList.contains("ix")) {
      xo.innerText = "+";
      xo.classList.add("x");
    } else if (item.parentElement.classList.contains("io")) {
      xo.innerText = "0";
      xo.classList.add("o");
    }

    eo.target.prepend(xo);
    item.parentElement.classList.toggle("ix");
    item.parentElement.classList.toggle("io");
    //     if (caro[0].firstChild.classList.contains("x") ) {
    //         winner1.classList.add("w123")
    //         console.log("object");
    //     }
    
  });
});