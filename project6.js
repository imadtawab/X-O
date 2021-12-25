const caro = document.querySelectorAll(".container button");
const winner = document.querySelector(".winner");
const shadow = document.querySelector(".shadow");
const restar = document.querySelector(".shadow button.replay");
const menu = document.querySelector(".shadow button.menu");
const player1 = document.querySelector(".player1  span:last-child");
const player2 = document.querySelector(".player2  span:last-child");
const play = document.querySelector(".play");
const posibilities = [
                      [0,1,2],
                      [3,4,5],
                      [6,7,8],
                      [0,3,6],
                      [1,4,7],
                      [2,5,8],
                      [0,4,8],
                      [2,4,6],
                      ]

function check() {
  for (let i = 0; i < posibilities.length; i++) {
  if (
    caro[posibilities[i][0]].classList.contains("x") &&
    caro[posibilities[i][1]].classList.contains("x") &&
    caro[posibilities[i][2]].classList.contains("x")  
  ) {
    winner.classList.add(`w${posibilities[i][0]}${posibilities[i][1]}${posibilities[i][2]}`);
    p1++
    player1.innerText = p1
    shadow.classList.remove("dn")
    shadow.querySelector(".winner-x").classList.remove("dn")
  } else if(
    caro[posibilities[i][0]].classList.contains("o") &&
    caro[posibilities[i][1]].classList.contains("o") &&
    caro[posibilities[i][2]].classList.contains("o") 
   ) {
    winner.classList.add(`w${posibilities[i][0]}${posibilities[i][1]}${posibilities[i][2]}`);
    p2++
    player2.innerText = p2
    shadow.classList.remove("dn")
    shadow.querySelector(".winner-o").classList.remove("dn")
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
      shadow.classList.remove("dn")
  }
}



















































let p1 = 0
let p2 = 0
let robotPly2 
let ply2Robot 
play.addEventListener("click", (eo) => {
  if (eo.target.className=="robot") {
    robotPly2 = "robot"
    ply2Robot = "computer "
     play.classList.add("dn")
    
  } else if (eo.target.className=="player12") {
    robotPly2 = "io"
    ply2Robot = "Player 2 "
     play.classList.add("dn")
  }
  player2.parentElement.querySelector(".ply2").innerText = ply2Robot
})

// let a = 0
// document.body.addEventListener("click", (eo) => {
  
  // console.log("length")
  // console.log(arr.length);
  
//   console.log("#####")
// console.log(`i=${i}`);
// console.log(`arr[i]=${arr[i]}`);
// console.log("#####")

// console.log("#####")
// console.log(`arr=${arr}`);
// console.log("#####")
// })




// arr.forEach(item => {
//   // console.log(`i=${i}------arr=${item}`);
//   if (item == i) {
//     console.log("yes");
//     i = i
//     // console.log(i);
//   } else {
// console.log("no");

// i = Math.floor(Math.random() * 9)
// // console.log(i);

//   }
// });
// console.log(i);
// console.log(i);
let arr  = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let i 

caro.forEach((item) => {
  item.addEventListener("click", (eo) => {
    
    item.setAttribute("disabled", "");
    
       if (item.parentElement.classList.contains("ix")) {
      item.classList.add("x");
      player2.parentElement.classList.add("active")
      player1.parentElement.classList.remove("active")
      item.parentElement.classList.add(robotPly2);
      item.parentElement.classList.remove("ix");
      
      console.log(arr);
      console.log("xxxxxxxxxxxxxxxxxxxxxxxx");
      arr.forEach(item => {
        if(item == eo.target.dataset.i){
          console.log(arr.indexOf(item));
          arr.splice(arr.indexOf(item), 1)
        }
        
      });
      
      console.log(arr);
    } else if (item.parentElement.classList.contains("io")) {
      item.classList.add("o");
      player2.parentElement.classList.remove("active")
      player1.parentElement.classList.add("active")
      item.parentElement.classList.add("ix");
      item.parentElement.classList.remove(robotPly2);
    }
    if (item.parentElement.classList.contains("robot")) {
      //  console.log("object");
      item.parentElement.classList.remove("ix");
      player2.parentElement.classList.add("active")
      player1.parentElement.classList.remove("active")
      console.log(arr);
      console.log("oooooooooooooooooooooooooo");
      setTimeout(() => {
        i = Math.floor(Math.random() * arr.length)
      console.log(`i=====${i}`);
      console.log(`i/arr=====${arr[i]}`);
      let aaa = arr[i]
      // console.log(`tupeof=====${typeof arr[i]}`);
        arr.forEach(it => {
          if(it == arr[i]){
            console.log(arr.indexOf(it));
            arr.splice(arr.indexOf(`${it}`), 1)
          }
        });
        
        
        caro[aaa].classList.add("o");
        console.log(`caro[arr[i]]=====${arr[i] - 1}`);
        console.log(arr);
        item.parentElement.classList.add("ix");
        item.parentElement.classList.remove(robotPly2);
        player2.parentElement.classList.remove("active")
      player1.parentElement.classList.add("active")
      check()
      }, 2000);
    }


    // if(robotPly2 = "robot"){
    //   setInterval(() => {
    //   if (caro[0].parentElement.classList.contains("robot")) {
    //     console.log("object");
    //     caro[0].parentElement.classList.remove("ix");
    //     player2.parentElement.classList.remove("active")
    //     player1.parentElement.classList.add("active")
    //     i = Math.floor(Math.random() * arr.length)
    //       caro[i].classList.add("o");
    //       caro[0].parentElement.classList.add("ix");
    //       caro[0].parentElement.classList.remove(robotPly2);
          
          // arr.forEach(item => {
          //   if(item == i){
          //     console.log(arr.indexOf(item));
          //     arr.splice(arr.indexOf(item), 1)
          //   }
          // });
    //   }
    //   }, 500);
    //   }



  //     item.parentElement.classList.add("robot");
  //     console.log(`data-ì=======${item.dataset.i}`);
  //     console.log("#######################################");
  //     console.log(arr);
  //     arr.splice(item.dataset.i, 1)
  //     arr = arr
  //     console.log(arr);
  //     // i = Math.floor(Math.random() * arr.length)
      
  //    if (item.parentElement.classList.contains("robot")) {
  //     // console.log(arr);
  //     arr.splice(item.dataset.i, 1)
  //     // console.log(item.dataset.i);
  //     // console.log(arr);
  //     i = Math.floor(Math.random() * arr.length)
  //     setTimeout(() => {
        
  //       console.log(`ì=======${i}`);
  //       console.log("##############################");
  //       console.log(arr);
  //       caro[i].classList.add("o");
  //       arr.splice(i , 1)
  //       arr = arr
  //       // i = Math.floor(Math.random() * arr.length)
  //       console.log(arr);
  //       player2.parentElement.classList.remove("active")
  //     player1.parentElement.classList.add("active")
  //     item.parentElement.classList.add("ix");
  //     item.parentElement.classList.remove("robot");
  //     }, 500);
      
   
  // else {
      
    
  //    if (item.parentElement.classList.contains("io")) {
  //     item.classList.add("o");
  //     player2.parentElement.classList.remove("active")
  //     player1.parentElement.classList.add("active")
  //   }
  // }
  
    // item.parentElement.classList.toggle("ix");
    // item.parentElement.classList.toggle("io");
  // }


















check()





    
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
      arr  = [0, 1, 2, 3, 4, 5, 6, 7, 8]
})
menu.addEventListener("click", (eo) => {
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
      play.classList.remove("dn")
       p1 = 0
       p2 = 0
       player1.innerText = p1
       player2.innerText = p2
      caro[0].parentElement.classList.remove("robot")
      caro[0].parentElement.classList.remove("io")
      caro[0].parentElement.classList.add("ix")
      arr  = [0, 1, 2, 3, 4, 5, 6, 7, 8]

})

// if(robotPly2 = "robot"){
// setInterval(() => {
// if (caro[0].parentElement.classList.contains("robot")) {
//   console.log("object");
//   caro[0].parentElement.classList.remove("ix");
//   player2.parentElement.classList.remove("active")
//   player1.parentElement.classList.add("active")
//   i = Math.floor(Math.random() * arr.length)
//     caro[i].classList.add("o");
//     caro[0].parentElement.classList.add("ix");
//     caro[0].parentElement.classList.remove(robotPly2);

//     arr.forEach(item => {
//       if(item == i){
//         console.log(arr.indexOf(item));
//         arr.splice(arr.indexOf(item), 1)
//       }
//     });
// }
// }, 500);
// }