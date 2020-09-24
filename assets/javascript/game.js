const oneTakeShot = document.querySelector("#teamone-shoot-button");
const oneShots = document.querySelector("#teamone-numshots");
const oneGoals = document.querySelector("#teamone-numgoals");
let oneAttempts = 0;
let oneScore = 0;
oneTakeShot.addEventListener("click", function () {
  oneAttempts += 1;
  oneShots.innerHTML = oneAttempts;
  if (Math.random() >= 0.8) {
    alert("Team 1 Scores!");
    oneScore += 1;
    oneGoals.innerHTML = oneScore;
  }
});

const twoTakeShot = document.querySelector("#teamtwo-shoot-button");
const twoShots = document.querySelector("#teamtwo-numshots");
const twoGoals = document.querySelector("#teamtwo-numgoals");
let twoAttempts = 0;
let twoScore = 0;
twoTakeShot.addEventListener("click", function () {
  twoAttempts += 1;
  twoShots.innerHTML = twoAttempts;
  if (Math.random() >= 0.8) {
    alert("Team 2 Scores!");
    twoScore += 1;
    twoGoals.innerHTML = twoScore;
  }
});

const reset = document.querySelector("#reset-button");
const resetAmount = document.querySelector("#num-resets");
let resetCounter = 0;
let scoreReset = 0;
reset.addEventListener("click", function () {
  resetCounter += 1;
  resetAmount.innerHTML = resetCounter;
  oneShots.innerHTML = scoreReset;
  oneGoals.innerHTML = scoreReset;
  twoShots.innerHTML = scoreReset;
  twoGoals.innerHTML = scoreReset;
});
