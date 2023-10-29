let scoreStr = localStorage.getItem("Score");
let score;

score = scoreStr? JSON.parse(scoreStr) : {
  won: 0,
  lost: 0,
  tie: 0,
};

score.displayScore = function(){
  return `[Score: Won:${score.won}, Lost:${score.lost}, Tie:${score.tie}]`;
}


document.querySelector("#bat").addEventListener("click", function(){
  let userSel = "bat";
  let compSel = comp();
  let res = getResult(userSel, compSel);
  showResult(userSel, compSel, res);
})
document.querySelector("#ball").addEventListener("click", function(){
  let userSel = "ball";
  let compSel = comp();
  let res = getResult(userSel, compSel);
  showResult(userSel, compSel, res);
})

document.querySelector("#stump").addEventListener("click", function(){
  let userSel = "stump";
  let compSel = comp();
  let res = getResult(userSel, compSel);
  showResult(userSel, compSel, res);
})

document.querySelector("#reset").addEventListener("click", function(){
  localStorage.clear();
  score = {
    won: 0,
    lost: 0,
    tie: 0,
  };
  score.displayScore = function(){
    return `[Score: Won:${score.won}, Lost:${score.lost}, Tie:${score.tie}]`;
  }
  showResult();
});

function comp(){
  let a = Math.random()*3;
  if(a>=0 && a<1){
    return "bat"
  }else if(a>=1 && a<2){
    return "ball";
  }else{
    return "stump";
  }
}

function getResult(userSel, compSel){
  console.log("getResult");
  if(userSel==="bat"){
    if(compSel==="bat"){
      score.tie++;
      return "[Result: It's a tie]";
    }
    else if(compSel==="ball"){
      score.won++;
      return "[Result: You won]";
    }
    else{
      score.lost++;
      return "[Result: Computer won]";
    }
  }
  else if(userSel==="ball"){
    if(compSel==="bat"){
      score.lost++;
      return "[Result: Computer won]";
    }
    else if(compSel==="ball"){
      score.tie++;
      return "[Result: It's a tie]";
    }
    else{
      score.won++;
      return "[Result: You won]";
    }
  }
  else{
    if(compSel==="bat"){
      score.won++;
      return "[Result: You won]";
    }
    else if(compSel==="ball"){
      score.lost++;
      return "[Result: Computer won]";
    }
    else{
      score.tie++;
      return "[Result: It's a tie]";
    }
  }
}

function showResult(userSel, compSel, res){
  localStorage.setItem("Score", JSON.stringify(score));
  document.querySelector("#user-move").innerText = userSel ? `You have selected ${userSel}` : ``;
  document.querySelector("#comp-move").innerText = compSel ? `Computer have selected ${compSel}` :  ``;
  document.querySelector("#result").innerText = res || ``;
  document.querySelector("#score").innerText = score.displayScore();
}