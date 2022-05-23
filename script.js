let container = document.getElementById("grid");
let userInput = 16;

// INITIAL BOARD OF GAME WITH 16 X 16 DIMENSIONS

let parsedInput = parseInt(userInput) * parseInt(userInput);

for (i = 1; i <= parsedInput; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cellStyle");
  container.appendChild(cell);
}
function makeRows(rows, columns) {
  grid.style.setProperty("--grid-rows", rows);
  grid.style.setProperty("--grid-columns", columns);
}
makeRows(userInput, userInput);

// FUNCTION TO CHANGE COLOR WITH MOUSEOVER

let divs = document.querySelectorAll(".cellStyle");

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("mouseover", function () {
    divs[i].style["background-color"] = "#EA6032";
  });
}
// RESET THE GRID FOR PLAY IN A NEW SET OF DIMENSIONS

function promptUser() {
  let userInputUpdated = prompt(
    "Huh-huh-huh hey kids!!! Pick a value from 2 to 100...and don't be stingy!"
  );
  let parsedInputUpdated =
    parseInt(userInputUpdated) * parseInt(userInputUpdated);
  const clearedDivs = document.querySelectorAll(".cellStyle");
  clearedDivs.forEach((cellStyle) => {
    cellStyle.remove();
  });
  for (i = 1; i <= parsedInputUpdated; i++) {
    let newCells = document.createElement("div");
    newCells.classList.add("cellStyle");
    container.appendChild(newCells);
  }
  makeRows(userInputUpdated, userInputUpdated);
  let divsUpdated = document.querySelectorAll(".cellStyle");
  for (let i = 0; i < divsUpdated.length; i++) {
    divsUpdated[i].style["background-color"] = "#ADB1D7";
  }
  for (let i = 0; i < divsUpdated.length; i++) {
    divsUpdated[i].addEventListener("mouseover", function () {
      divsUpdated[i].style["background-color"] = "#EA6032";
    });
  }
}
