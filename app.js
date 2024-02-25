let boxes=document.querySelectorAll(".box");
let resetbtn= document.querySelector(".reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0=true;//playerX, payerO
let count=0;

const winpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,5,6],[3,4,5],[6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            count++;
            box.style.color="white"; 
            box.innerText="O";
            
            turn0=false;
            
        }
        else{
            count++;
            box.innerText="X";
            box.style.color="black"; 
          turn0=true;   
                
        }

        box.disabled=true;
        checkWinner();
        drawGame(count);
        
    });
});
const disableBoxes=()=>{
    for( let box of boxes){
        box.disabled=true;
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratuations! winner is ${winner}`;
    disableBoxes();
    msgContainer.classList.remove("hide");
    
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const resetGame=()=>{
    turn0= true;
    enableBoxes();
    msgContainer.classList.add("hide");
    box.classList.remove("clickColor");

};
const drawGame=(count)=>{
    if(count===9){
        msgContainer.classList.remove("hide");
        msg.innerText=`OOPS! It's a draw between players`;
    }

}
const checkWinner=()=>{
    for(pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if (pos1val===pos2val&&pos2val===pos3val) {        
                showWinner(pos1val);
            }
        }
        
    }
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
 
