console.log("welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn ==="X"?"0": "X"
}

// Function to check for a win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
       if((boxtext[e[0]].innertext === boxtext[e[1]].innertext) && (boxtext[e[2]].innertext === boxtext[e[1]].innertext) && (boxtext[e[0]].innertext !=="") ){
          document.querySelector('.info').innertext = boxtext[e[0]].innertext + "won"
          isgameover = true
         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
         document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
         document.querySelector(".line").style.width = "20vw";
       }
    })
}

// Game Logic
//music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innertext ===""){
            boxtext.innertext = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innertext = "Turn for" + turn;
            }
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(Element=> {
        Element.innertext =""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innertext = "Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
