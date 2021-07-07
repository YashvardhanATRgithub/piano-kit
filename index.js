// detecting button press

var numberOfPianoButtons = (document.querySelectorAll(".piano")).length;

for (var i = 0; i < numberOfPianoButtons; i++) {

  document.querySelectorAll(".piano")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

// detecting keyboard press


document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      var pianoA = new Audio("sounds/pianoA.mp3");
      pianoA.play();
      break;
    case "s":
      var pianoB = new Audio("sounds/pianoB.mp3");
      pianoB.play();
      break;
    case "d":
      var pianoC = new Audio("sounds/pianoC.mp3");
      pianoC.play();
      break;
    case "f":
      var pianoD = new Audio("sounds/pianoD.mp3");
      pianoD.play();
      break;
    case "g":
      var pianoE = new Audio("sounds/pianoE.mp3");
      pianoE.play();
      break;
    case "h":
      var pianoF = new Audio("sounds/pianoF.mp3");
      pianoF.play();
      break;
    case "j":
      var pianoG = new Audio("sounds/pianoG.mp3");
      pianoG.play();
      break;
    case "k":
      var pianoH = new Audio("sounds/pianoH.mp3");
      pianoH.play();
      break;
    case "l":
      var pianoI = new Audio("sounds/pianoI.mp3");
      pianoI.play();
      break;
    case "q":
      var pianoJ = new Audio("sounds/pianoJ.mp3");
      pianoJ.play();
      break;
    case "w":
      var pianoK = new Audio("sounds/pianoK.mp3");
      pianoK.play();
      break;
    case "e":
      var pianoL = new Audio("sounds/pianoL.mp3");
      pianoL.play();
      break;
    case "r":
      var pianoM = new Audio("sounds/pianoM.mp3");
      pianoM.play();
      break;
    case "t":
      var pianoN = new Audio("sounds/pianoN.mp3");
      pianoN.play();
      break;
    default:
      console.log(buttonInnerHTML);

  }
}



function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
