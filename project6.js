const caro = document.querySelectorAll(".container button");
const winner = document.querySelector(".winner");
const shadow = document.querySelector(".shadow");
const restar = document.querySelector(".shadow button");
const player1 = document.querySelector(".player1 span");
const player2 = document.querySelector(".player2 span");
let p1 = 0
let p2 = 0

caro.forEach((item) => {
  item.addEventListener("click", (eo) => {
    item.setAttribute("disabled", "");

    if (item.parentElement.classList.contains("ix")) {
      item.classList.add("x");
      player2.parentElement.classList.add("active")
      player1.parentElement.classList.remove("active")
    } else if (item.parentElement.classList.contains("io")) {
      item.classList.add("o");
      player2.parentElement.classList.remove("active")
      player1.parentElement.classList.add("active")
    }
    item.parentElement.classList.toggle("ix");
    item.parentElement.classList.toggle("io");
    if (
      (caro[0].classList.contains("x") &&
        caro[1].classList.contains("x") &&
        caro[2].classList.contains("x")) ||
      (caro[0].classList.contains("o") &&
        caro[1].classList.contains("o") &&
        caro[2].classList.contains("o"))
    ) {
      winner.classList.add("w012");
    } else if (
      (caro[3].classList.contains("x") &&
        caro[4].classList.contains("x") &&
        caro[5].classList.contains("x")) ||
      (caro[3].classList.contains("o") &&
        caro[4].classList.contains("o") &&
        caro[5].classList.contains("o"))
    ) {
      winner.classList.add("w345");

    } else if (
      (caro[6].classList.contains("x") &&
        caro[7].classList.contains("x") &&
        caro[8].classList.contains("x")) ||
      (caro[6].classList.contains("o") &&
        caro[7].classList.contains("o") &&
        caro[8].classList.contains("o"))
    ) {
      winner.classList.add("w678");
    } else if (
      (caro[0].classList.contains("x") &&
        caro[3].classList.contains("x") &&
        caro[6].classList.contains("x")) ||
      (caro[0].classList.contains("o") &&
        caro[3].classList.contains("o") &&
        caro[6].classList.contains("o"))
    ) {
      winner.classList.add("w036");
    } else if (
      (caro[1].classList.contains("x") &&
        caro[4].classList.contains("x") &&
        caro[7].classList.contains("x")) ||
      (caro[1].classList.contains("o") &&
        caro[4].classList.contains("o") &&
        caro[7].classList.contains("o"))
    ) {
      winner.classList.add("w147");
    } else if (
      (caro[2].classList.contains("x") &&
        caro[5].classList.contains("x") &&
        caro[8].classList.contains("x")) ||
      (caro[2].classList.contains("o") &&
        caro[5].classList.contains("o") &&
        caro[8].classList.contains("o"))
    ) {
      winner.classList.add("w258");
    } else if (
      (caro[0].classList.contains("x") &&
        caro[4].classList.contains("x") &&
        caro[8].classList.contains("x")) ||
      (caro[0].classList.contains("o") &&
        caro[4].classList.contains("o") &&
        caro[8].classList.contains("o"))
    ) {
      winner.classList.add("w048");
    } else if (
      (caro[2].classList.contains("x") &&
        caro[4].classList.contains("x") &&
        caro[6].classList.contains("x")) ||
      (caro[2].classList.contains("o") &&
        caro[4].classList.contains("o") &&
        caro[6].classList.contains("o"))
    ) {
      winner.classList.add("w246");
    }
    if (
      caro[0].classList.contains("x") &&
        caro[1].classList.contains("x") &&
        caro[2].classList.contains("x") ||
        
        caro[3].classList.contains("x") &&
        caro[4].classList.contains("x") &&
        caro[5].classList.contains("x") ||
        
        caro[6].classList.contains("x") &&
        caro[7].classList.contains("x") &&
        caro[8].classList.contains("x") ||
        
        caro[0].classList.contains("x") &&
        caro[3].classList.contains("x") &&
        caro[6].classList.contains("x") ||
        
        caro[1].classList.contains("x") &&
        caro[4].classList.contains("x") &&
        caro[7].classList.contains("x") ||
        
        caro[2].classList.contains("x") &&
        caro[5].classList.contains("x") &&
        caro[8].classList.contains("x") ||
        
        caro[0].classList.contains("x") &&
        caro[4].classList.contains("x") &&
        caro[8].classList.contains("x") ||
        
        caro[2].classList.contains("x") &&
        caro[4].classList.contains("x") &&
        caro[6].classList.contains("x") 
    ) {
      p1++
      player1.innerText = p1
      shadow.classList.remove("dn")
      shadow.querySelector(".winner-x").classList.remove("dn")
    } else if (
        caro[0].classList.contains("o") &&
        caro[1].classList.contains("o") &&
        caro[2].classList.contains("o") ||
        
        caro[3].classList.contains("o") &&
        caro[4].classList.contains("o") &&
        caro[5].classList.contains("o") ||
        
        caro[6].classList.contains("o") &&
        caro[7].classList.contains("o") &&
        caro[8].classList.contains("o") ||
        
        caro[0].classList.contains("o") &&
        caro[3].classList.contains("o") &&
        caro[6].classList.contains("o") ||
        
        caro[1].classList.contains("o") &&
        caro[4].classList.contains("o") &&
        caro[7].classList.contains("o") ||
        
        caro[2].classList.contains("o") &&
        caro[5].classList.contains("o") &&
        caro[8].classList.contains("o") ||
        
        caro[0].classList.contains("o") &&
        caro[4].classList.contains("o") &&
        caro[8].classList.contains("o") ||
        
        caro[2].classList.contains("o") &&
        caro[4].classList.contains("o") &&
        caro[6].classList.contains("o") 
    ) {
      p2++
      player2.innerText = p2
      shadow.classList.remove("dn")
      shadow.querySelector(".winner-o").classList.remove("dn")
    } 
    if (
      caro[0].className !== "caro" &&
      caro[1].className !== "caro" &&
      caro[2].className !== "caro" &&
      caro[3].className !== "caro" &&
      caro[4].className !== "caro" &&
      caro[5].className !== "caro" &&
      caro[6].className !== "caro" &&
      caro[7].className !== "caro" &&
      caro[8].className !== "caro" &&
      shadow.className == "shadow dn"
      ) {
        shadow.classList.remove("dn")
    }
  });
});

restar.addEventListener("click", (eo) => {
      shadow.classList.add("dn")
      shadow.querySelector(".winner-x").classList.add("dn")
      shadow.querySelector(".winner-o").classList.add("dn")
      winner.removeAttribute("class")
      
      caro.forEach(item => {
        item.classList.remove("x")
        item.classList.remove("o")
    item.removeAttribute("disabled");

      });
      winner.classList.add("winner")
})
