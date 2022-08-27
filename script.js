let number = Math.trunc(Math.random() * 20 + 1);
console.log(number);
let message = document.querySelector(".message");
let yourScore = document.querySelector(".yourScore");
yourScore.textContent = 20;
// let highestScore = document.querySelector(".highestScore");
// highestScore.textContent = 0;

document.querySelector("#click").addEventListener("click", function () {
  let guessNumber = Number(document.querySelector("input").value);

  if (!guessNumber & (guessNumber === 0)) {
    if (yourScore.textContent > 1) {
      message.textContent = "Not a number";
      yourScore.textContent -= 1;
    } else {
      message.textContent = "you lost the game";
      yourScore.textContent = 0;
    }
  } else if (guessNumber > 20) {
    message.textContent = "laawre... achhe se parke input kor, ";
  } else if (guessNumber === number) {
    console.log();
    if (yourScore.textContent > 1) {
      message.textContent = "🎉You guess it";
      document.querySelector(".secretNumber").textContent = number;
    } else {
      message.textContent = "you lost the game";
      yourScore.textContent = 0;
    }

    // if(yourScore.textContent > highestScore.textContent){
    //   highestScore = yourScore;
    //   document.querySelector(".highestScore").textContent = yourScore;

    // }
  } else if (guessNumber > number) {
    if (yourScore.textContent > 1) {
      message.textContent = "You guess high";
      yourScore.textContent -= 1;
    } else {
      message.textContent = "you lost the game";
      yourScore.textContent = 0;
    }
  } else if (guessNumber < number) {
    if (yourScore.textContent > 1) {
      message.textContent = "You guess low";
      yourScore.textContent -= 1;
    } else {
      message.textContent = "you lost the game";
      yourScore.textContent = 0;
    }
  }
});

document.querySelector("#again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20 + 1);
  console.log(number);
  message.textContent = "Start guessing";
  document.querySelector("input").value = 0;
  document.querySelector(".yourScore").textContent = 20;
  document.querySelector(".secretNumber").textContent =  "?" ;
});
