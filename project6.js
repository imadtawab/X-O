const caro = document.querySelectorAll(".container button");
const winner = document.querySelector(".winner");
const shadow = document.querySelector(".shadow");
const restar = document.querySelector(".shadow button.replay");
const menu = document.querySelector(".shadow button.menu");
const player1 = document.querySelector(".player1  span:last-child");
const player2 = document.querySelector(".player2  span:last-child");
const play = document.querySelector(".play");
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let i;
const posibilities = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
/***********************************************************
 ********************* STAR CHECK-WINNER *******************
 ************************************************************/
 
let finaly = false

function check() {
  for (let i = 0; i < posibilities.length; i++) {
    if (
      caro[posibilities[i][0]].classList.contains("x") &&
      caro[posibilities[i][1]].classList.contains("x") &&
      caro[posibilities[i][2]].classList.contains("x")
    ) {
      winner.classList.add(
        `w${posibilities[i][0]}${posibilities[i][1]}${posibilities[i][2]}`
      );
      p1++;
      finaly = true
      player1.innerText = p1;
      shadow.classList.remove("dn");
      shadow.querySelector(".winner-x").classList.remove("dn");
    } else if (
      caro[posibilities[i][0]].classList.contains("o") &&
      caro[posibilities[i][1]].classList.contains("o") &&
      caro[posibilities[i][2]].classList.contains("o")
    ) {
      winner.classList.add(
        `w${posibilities[i][0]}${posibilities[i][1]}${posibilities[i][2]}`
      );
      p2++;
      finaly = true
      player2.innerText = p2;
      shadow.classList.remove("dn");
      if(robotPly2 == "io"){
        shadow.querySelector(".winner-o").classList.remove("dn");
      }else{
        shadow.querySelector(".winner-robot").classList.remove("dn");
      }
      
    }
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
    shadow.classList.remove("dn");
  }
}
/***********************************************************
 ********************* END CHECK-WINNER *******************
 ************************************************************/
/***********************************************************
 ********************* STAR changePlayer *******************
 ************************************************************/
function changePlayer() {
  // console.log("changePlayer");
  caro[0].parentElement.classList.remove(robotPly2);
  player2.parentElement.classList.remove("active");
  player1.parentElement.classList.add("active");
  caro[0].parentElement.classList.add("ix");
  check();
}
/***********************************************************
 ********************* END changePlayer *******************
 ************************************************************/
/***********************************************************
 ********************* STAR logaritms **********************
 ************************************************************/

function logaritms() {
// ind = Math.floor(Math.random() * arr.length);
// if(finaly == true){
//   p1--;
// }
// 00000000000000000000000000

  if (
      caro[posibilities[0][0]].classList.contains("x") &&
      caro[posibilities[0][1]].classList.contains("x") &&
      !caro[posibilities[0][2]].classList.contains("x") &&
      !caro[posibilities[0][2]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[0][2]].classList.add("o");
          caro[posibilities[0][2]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[0][2]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
      caro[posibilities[0][0]].classList.contains("x") &&
      !caro[posibilities[0][1]].classList.contains("x") &&
      caro[posibilities[0][2]].classList.contains("x") &&
      !caro[posibilities[0][1]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[0][1]].classList.add("o");
          caro[posibilities[0][1]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[0][1]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
    !caro[posibilities[0][0]].classList.contains("x") &&
      caro[posibilities[0][1]].classList.contains("x") &&
      caro[posibilities[0][2]].classList.contains("x") &&
      !caro[posibilities[0][0]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[0][0]].classList.add("o");
          caro[posibilities[0][0]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[0][0]), 1);
          changePlayer();
        }, 500);
        
      // }
    }
    else if (//11111111111111111111111
      caro[posibilities[1][0]].classList.contains("x") &&
      caro[posibilities[1][1]].classList.contains("x") &&
      !caro[posibilities[1][2]].classList.contains("x") &&
      !caro[posibilities[1][2]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[1][2]].classList.add("o");
          caro[posibilities[1][2]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[1][2]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
      caro[posibilities[1][0]].classList.contains("x") &&
      !caro[posibilities[1][1]].classList.contains("x") &&
      caro[posibilities[1][2]].classList.contains("x") &&
      !caro[posibilities[1][1]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[1][1]].classList.add("o");
          caro[posibilities[1][1]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[1][1]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
    !caro[posibilities[1][0]].classList.contains("x") &&
      caro[posibilities[1][1]].classList.contains("x") &&
      caro[posibilities[1][2]].classList.contains("x") &&
      !caro[posibilities[1][0]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[1][0]].classList.add("o");
          caro[posibilities[1][0]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[1][0]), 1);
          changePlayer();
        }, 500);
        
      // }
    }
    else if (//222222222222222222222222222222222
      caro[posibilities[2][0]].classList.contains("x") &&
      caro[posibilities[2][1]].classList.contains("x") &&
      !caro[posibilities[2][2]].classList.contains("x") &&
      !caro[posibilities[2][2]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[2][2]].classList.add("o");
          caro[posibilities[2][2]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[2][2]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
      caro[posibilities[2][0]].classList.contains("x") &&
      !caro[posibilities[2][1]].classList.contains("x") &&
      caro[posibilities[2][2]].classList.contains("x") &&
      !caro[posibilities[2][1]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[2][1]].classList.add("o");
          caro[posibilities[2][1]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[2][1]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
    !caro[posibilities[2][0]].classList.contains("x") &&
      caro[posibilities[2][1]].classList.contains("x") &&
      caro[posibilities[2][2]].classList.contains("x") &&
      !caro[posibilities[2][0]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[2][0]].classList.add("o");
          caro[posibilities[2][0]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[2][0]), 1);
          changePlayer();
        }, 500);
        
      // }
    }
    else if (//33333333333333333333333333333
      caro[posibilities[3][0]].classList.contains("x") &&
      caro[posibilities[3][1]].classList.contains("x") &&
      !caro[posibilities[3][2]].classList.contains("x") &&
      !caro[posibilities[3][2]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[3][2]].classList.add("o");
          caro[posibilities[3][2]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[3][2]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
      caro[posibilities[3][0]].classList.contains("x") &&
      !caro[posibilities[3][1]].classList.contains("x") &&
      caro[posibilities[3][2]].classList.contains("x") &&
      !caro[posibilities[3][1]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[3][1]].classList.add("o");
          caro[posibilities[3][1]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[3][1]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
    !caro[posibilities[3][0]].classList.contains("x") &&
      caro[posibilities[3][1]].classList.contains("x") &&
      caro[posibilities[3][2]].classList.contains("x") &&
      !caro[posibilities[3][0]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[3][0]].classList.add("o");
          caro[posibilities[3][0]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[3][0]), 1);
          changePlayer();
        }, 500);
        
      // }
    }
    else if (//444444444444444444444444444444444
      caro[posibilities[4][0]].classList.contains("x") &&
      caro[posibilities[4][1]].classList.contains("x") &&
      !caro[posibilities[4][2]].classList.contains("x") &&
      !caro[posibilities[4][2]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[4][2]].classList.add("o");
          caro[posibilities[4][2]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[4][2]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
      caro[posibilities[4][0]].classList.contains("x") &&
      !caro[posibilities[4][1]].classList.contains("x") &&
      caro[posibilities[4][2]].classList.contains("x") &&
      !caro[posibilities[4][1]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[4][1]].classList.add("o");
          caro[posibilities[4][1]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[4][1]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
    !caro[posibilities[4][0]].classList.contains("x") &&
      caro[posibilities[4][1]].classList.contains("x") &&
      caro[posibilities[4][2]].classList.contains("x") &&
      !caro[posibilities[4][0]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[4][0]].classList.add("o");
          caro[posibilities[4][0]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[4][0]), 1);
          changePlayer();
        }, 500);
        
      // }
    }
    else if (//5555555555555555555555555
      caro[posibilities[5][0]].classList.contains("x") &&
      caro[posibilities[5][1]].classList.contains("x") &&
      !caro[posibilities[5][2]].classList.contains("x") &&
      !caro[posibilities[5][2]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[5][2]].classList.add("o");
          caro[posibilities[5][2]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[5][2]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
      caro[posibilities[5][0]].classList.contains("x") &&
      !caro[posibilities[5][1]].classList.contains("x") &&
      caro[posibilities[5][2]].classList.contains("x") &&
      !caro[posibilities[5][1]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[5][1]].classList.add("o");
          caro[posibilities[5][1]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[5][1]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
    !caro[posibilities[5][0]].classList.contains("x") &&
      caro[posibilities[5][1]].classList.contains("x") &&
      caro[posibilities[5][2]].classList.contains("x") &&
      !caro[posibilities[5][0]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[5][0]].classList.add("o");
          caro[posibilities[5][0]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[5][0]), 1);
          changePlayer();
        }, 500);
        
      // }
    }
    else if (//6666666666666666666666666
      caro[posibilities[6][0]].classList.contains("x") &&
      caro[posibilities[6][1]].classList.contains("x") &&
      !caro[posibilities[6][2]].classList.contains("x") &&
      !caro[posibilities[6][2]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[6][2]].classList.add("o");
          caro[posibilities[6][2]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[6][2]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
      caro[posibilities[6][0]].classList.contains("x") &&
      !caro[posibilities[6][1]].classList.contains("x") &&
      caro[posibilities[6][2]].classList.contains("x") &&
      !caro[posibilities[6][1]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[6][1]].classList.add("o");
          caro[posibilities[6][1]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[6][1]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
    !caro[posibilities[6][0]].classList.contains("x") &&
      caro[posibilities[6][1]].classList.contains("x") &&
      caro[posibilities[6][2]].classList.contains("x") &&
      !caro[posibilities[6][0]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[6][0]].classList.add("o");
          caro[posibilities[6][0]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[6][0]), 1);
          changePlayer();
        }, 500);
        
      // }
    }
    else if (//77777777777777777777777777777
      caro[posibilities[7][0]].classList.contains("x") &&
      caro[posibilities[7][1]].classList.contains("x") &&
      !caro[posibilities[7][2]].classList.contains("x") &&
      !caro[posibilities[7][2]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[7][2]].classList.add("o");
          caro[posibilities[7][2]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[7][2]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
      caro[posibilities[7][0]].classList.contains("x") &&
      !caro[posibilities[7][1]].classList.contains("x") &&
      caro[posibilities[7][2]].classList.contains("x") &&
      !caro[posibilities[7][1]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[7][1]].classList.add("o");
          caro[posibilities[7][1]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[7][1]), 1);
          changePlayer();
        }, 500);
        
      // }
    }else if (
    !caro[posibilities[7][0]].classList.contains("x") &&
      caro[posibilities[7][1]].classList.contains("x") &&
      caro[posibilities[7][2]].classList.contains("x") &&
      !caro[posibilities[7][0]].classList.contains("o")
    ) {
      // if (caro[0].parentElement.classList.contains("robot")) {
        
        setTimeout(() => {
          caro[posibilities[7][0]].classList.add("o");
          caro[posibilities[7][0]].setAttribute("disabled", "");
          arr.splice(arr.indexOf(posibilities[7][0]), 1);
          changePlayer();
        }, 500);
        
      // }
    }
    
    else{
      setTimeout(() => {
        // console.log(`ind=>${ind}`);
        // console.log(`arr=>${arr[ind]}`);
        // console.log(`error=>${arr.indexOf(arr[ind])}`);
      
        if (arr[ind]!==undefined) {
          caro[arr[ind]].classList.add("o");
        caro[arr[ind]].setAttribute("disabled", "");
        arr.splice(arr.indexOf(arr[ind]), 1)
        }
        
      changePlayer();
      console.log(`arr "robots" =>${arr}`);
      }, 500);
    }
 
 




  
 
}
/***********************************************************
 ********************* END logaritms **********************
 ************************************************************/
let p1 = 0;
let p2 = 0;
let robotPly2;
let ply2Robot;
/***********************************************************
 ********************* STAR onclick-PLAY *******************
 ************************************************************/
play.addEventListener("click", (eo) => {
  if (eo.target.className == "robot") {
    robotPly2 = "robot";
    ply2Robot = "Computer ";
    play.classList.add("dn");
    player2.parentElement.querySelector(".ply2").innerText = ply2Robot;
  } else if (eo.target.className == "player12") {
    robotPly2 = "io";
    ply2Robot = "Player 2 ";
    play.classList.add("dn");
    player2.parentElement.querySelector(".ply2").innerText = ply2Robot;
  }
});

/***********************************************************
 ********************* END onclick-PLAY *******************
 ************************************************************/


/***********************************************************
 ********************* STAR onclick-in-CARO ****************
 ************************************************************/
caro.forEach((item) => {
  item.addEventListener("click", (eo) => {
    // item.setAttribute("disabled", "");
    // check()
    if (item.parentElement.classList.contains("ix")) {
      
      
        item.classList.add("x");
        
        
        item.setAttribute("disabled", "");
        arr.forEach((item) => {
          if (item == eo.target.dataset.i) {
            // console.log(arr.indexOf(item));
            arr.splice(arr.indexOf(item), 1);
          }
        });
        // console.log(`arr "ix" =>${arr}`); 
      // }) 
      check()
      
      if (finaly == true) {
        // console.log("ffffffffffffffffffffffffffff")
      }else{
        player2.parentElement.classList.add("active");
        player1.parentElement.classList.remove("active");
        item.parentElement.classList.remove("ix");
        item.parentElement.classList.add(robotPly2);
      }
   
    } else if (item.parentElement.classList.contains("io")) {
      item.classList.add("o");
      player2.parentElement.classList.remove("active");
      player1.parentElement.classList.add("active");
      item.parentElement.classList.add("ix");
      item.parentElement.classList.remove(robotPly2);
      item.setAttribute("disabled", "");
      check();
    }
    if (item.parentElement.classList.contains("robot")) {
      
        logaritms();
      item.parentElement.classList.remove("ix");
      player2.parentElement.classList.add("active");
      player1.parentElement.classList.remove("active");
      ind = Math.floor(Math.random() * arr.length);
      check();
    }
   

    // check();
  });
});
/***********************************************************
 ********************* END onclick-in-CARO ****************
 ************************************************************/
/***********************************************************
 ********************* STAR onclick-RESTAR ****************
 ************************************************************/
restar.addEventListener("click", (eo) => {
  shadow.classList.add("dn");
  shadow.querySelector(".winner-x").classList.add("dn");
  shadow.querySelector(".winner-o").classList.add("dn");
  shadow.querySelector(".winner-robot").classList.add("dn");
  
  winner.removeAttribute("class");
  caro[0].parentElement.classList.remove("robot");
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  caro.forEach((item) => {
    item.classList.remove("x");
    item.classList.remove("o");
    item.removeAttribute("disabled");
  });
  winner.classList.add("winner");
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  finaly = false
});
/***********************************************************
 ********************* END onclick-RESTAR ****************
 ************************************************************/
/***********************************************************
 ********************* STAR onclick-MENU ****************
 ************************************************************/
menu.addEventListener("click", (eo) => {
  shadow.classList.add("dn");
  shadow.querySelector(".winner-x").classList.add("dn");
  shadow.querySelector(".winner-o").classList.add("dn");
  shadow.querySelector(".winner-robot").classList.add("dn");
  
  winner.removeAttribute("class");
  caro.forEach((item) => {
    item.classList.remove("x");
    item.classList.remove("o");
    item.removeAttribute("disabled");
  });
  winner.classList.add("winner");
  play.classList.remove("dn");
  p1 = 0;
  p2 = 0;
  player1.innerText = p1;
  player2.innerText = p2;
  caro[0].parentElement.classList.remove("robot");
  caro[0].parentElement.classList.remove("io");
  caro[0].parentElement.classList.add("ix");
  player2.parentElement.classList.remove("active");
  player1.parentElement.classList.add("active");

  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  finaly = false
});
/***********************************************************
 ********************* END onclick-MENU ****************
 ************************************************************/
