let boxes = document.querySelectorAll(".box") ;

let resetBtn = document.querySelector("#reset-btn") ;
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn_O = true ;


const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
];
let filledBoxes = 0 ;

boxes.forEach( (box) =>{
    box.addEventListener("click", ()=>{
        filledBoxes ++ ;
        console.log("Box was clicked");
        console.log(filledBoxes) ;
        
        if(turn_O){ //player O
            box.innerText = "O" ;
            turn_O = false ;
        }
        else{   //player X
            box.style.color = "rgba(146, 1, 1, 0.753)" ;
            box.innerText = "X";
            turn_O = true ;
        }
        box.disabled = true ;

        //console.clear();
        checkWinner();
    } );  
} );


const checkWinner = () => {

    for(let pattern of winPatterns){
        let pos1_val = boxes[pattern[0]].innerText ;
        let pos2_val = boxes[pattern[1]].innerText ;
        let pos3_val = boxes[pattern[2]].innerText ;

        if(pos1_val != "" && pos2_val != "", pos3_val != ""){
            if( (pos1_val === pos2_val) && (pos2_val === pos3_val) ){
                showWinner(pos1_val) ;
            }
            else if(filledBoxes === 9){
                draw() ;
            }
        }
        
    }
} ;

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}` ;
    msgContainer.classList.remove("hide") ;
    disableBoxes() ;
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true ;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false ;
        box.innerText = "" ;
    }
}


const resetGame = () =>{
    turn_O = true ;
    enableBoxes() ;
    msgContainer.classList.add("hide") ;
    filledBoxes = 0 ;
}

const draw = () =>{
    msg.innerText = "It's a Draw" ;
    msgContainer.classList.remove("hide") ;
    disableBoxes() ;
}

newGameBtn.addEventListener("click", resetGame) ;
resetBtn.addEventListener("click", resetGame) ;