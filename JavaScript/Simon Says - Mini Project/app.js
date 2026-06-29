//--------Game flow-----------
// 1. Game starts when any key is pressed
// 2. Game starts - level 1 + rand btn flash
// 3. When user press btn -> check
// 4. Correct seq -> next level
// 5. Wrong seq -> GameOver

// arrays to track game sequence and user sequence
let gameSeq = [];
let userSeq = [];
let maxScore = 0;
let btns = ["one", "two", "three", "four"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');


// Step 1
document.addEventListener('keypress', function(){
  if(started == false){
    started = true;
    levelUp();
  }
});

// Game Flash the Btn
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  }, 150)
}

// User Flash the btn
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  }, 150)
}

// Move to next level
function levelUp(){
  // empty user seq
  userSeq = [];

  // level increses
  level++; 
  h2.innerText = `Level ${level}`;

  //random btn
  let randIdx = Math.floor(Math.random() * 4);
  let randBtn = document.querySelector(`.${btns[randIdx]}`);

  //add in game seq
  gameSeq.push(btns[randIdx]);
  console.log("Game: ",gameSeq);

  //Flash rand btn
  gameFlash(randBtn);

}

function check(idx){
  
  if(gameSeq[idx] == userSeq[idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(levelUp, 1000);
    }
  }else{
    maxScore = Math.max(maxScore, level);
    h2.innerHTML = `GAME OVER! Your Score was <b>${level}</b><br>Max Score <b>${maxScore}</b> <br> Press any key to restart`;
    document.querySelector('body').style.backgroundColor = 'red';
    setTimeout(function(){
      document.querySelector('body').style.backgroundColor = 'white';
    },150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  // add to user seq
  userSeq.push(this.id);
  console.log("User: ", userSeq);

  //check
  check(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
  btn.addEventListener("click", btnPress);
}

function reset(){
  started = false;
  level = 0;
  gameSeq = [];
  userSeq = [];
}