let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

document.addEventListener("keypress", function()
{ 
    if(started == false)
    {
    console.log("game started");
    started = true;
    levelUp();
    }
       
});

function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
{
    btn.classList.remove("flash");
},250);
}

function userFlash(btn)
{
    btn.classList.add("userFlash");
    setTimeout(function()
{
    btn.classList.remove("userFlash");
},250);
}

function levelUp()
{
   level++;
   let h3 = document.querySelector("h3");
   h3.innerText =  `level ${level}`;

   let randIdx = Math.floor(Math.random()*4);
   let randcolor = btns[randIdx];
   let randbtn = document.querySelector(`.${randcolor}`);
   gameSeq.push(randcolor);
//    console.log(gameSeq);
   //random button choose
   btnFlash(randbtn);
}

function checkAns()
{
    let idx = level - 1;
    if(userSeq[idx]== gameSeq[idx])
    {
        console.log("same value");
    }else
    {
        h3.innerText = `Game Over! Press any key to start.`;
    }
}


function btnPress()
{
   let btn = this;
   console.log(btn);
   userFlash(btn);

   let userColor = btn.getAttribute("id");
   userSeq.push(userColor);
//    console.log(userSeq);
}


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click", btnPress);
   
}


