function disableInput() {
  document.getElementById("third-input").setAttribute("disabled", "disabled");
}

//Show congratulations
function winGame() {
  document.getElementById("successModal").style.cssText = "opacity: 1;";
  setTimeout(function () {
    document.getElementById("successModal").style.cssText = "opacity: 0;";
  }, 2000);
}

//Show game over message
function loseGame() {
    document.getElementById("errorModal").style.cssText = "opacity: 1;";
    setTimeout(function () {
        document.getElementById("errorModal").style.cssText = "opacity: 0;";
    }, 2000);
}

//Main function
function findWay() {
  var matrix = document.getElementById("matrix");
  var userVal = document.getElementById("first-input").value;
  var rows = userVal - 1;
  var cells = 0;
  var temp = 1;

  //Counters for rows
  var mainRow = 1;
  var helpRow = 0;

  //Counters for cells
  var mainCell = 1;
  var helpCell = 0;

  matrix.rows[rows].cells[cells].innerHTML =
    '<img src="img/ball.png" width="25px" height="25px" id="ball">';

  disableInput();
  setDelay();

  //Find path from left bottom corner to right top corner
  function setDelay() {
    setTimeout(function () {
      if (matrix.rows[0].cells[rows].innerHTML !=
        '<img src="img/ball.png" width="25px" height="25px" id="ball">') {
          searchIt();
      }

      else {
        winGame();
      }
    }, 500);
  }

  //Finding path algorithm
  function searchIt() {
    //Move up
    if (rows - mainRow <= rows && cells + helpCell >= 0) {
      if (matrix.rows[rows - mainRow].cells[cells + helpCell].innerHTML == 0) {

        matrix.rows[rows - mainRow].cells[cells + helpCell].innerHTML =
          '<img src="img/ball.png" width="25px" height="25px" id="ball">';

        if (mainRow < rows) {
          mainRow++;
          helpRow++;
        }

        else if (mainRow == rows) {
          helpRow++;
        }
        setDelay();
        return;
      }

      if (matrix.rows[0].cells[rows].innerHTML ==
        '<img src="img/ball.png" width="25px" height="25px" id="ball">') {
          return;
      }
    }

    //Move right
    if (rows - helpRow <= rows && cells + mainCell >= 0) {
      if (matrix.rows[rows - helpRow].cells[cells + mainCell].innerHTML == 0) {

        matrix.rows[rows - helpRow].cells[cells + mainCell].innerHTML =
          '<img src="img/ball.png" width="25px" height="25px" id="ball">';

        if (mainCell < rows) {
          mainCell++;
          helpCell++;
        }

        else if (mainCell == rows) {
          helpCell++;
        }
        setDelay();
        return;
      }

      if (matrix.rows[0].cells[rows].innerHTML ==
        '<img src="img/ball.png" width="25px" height="25px" id="ball">') {
          return;
      }
    }

    //Move left
    if (rows - helpRow <= rows && cells + helpCell - temp >= 0) {
      if (matrix.rows[rows - helpRow].cells[cells + helpCell - temp].
              innerHTML == 0) {

        matrix.rows[rows - helpRow].cells[cells + helpCell - temp].innerHTML =
          '<img src="img/ball.png" width="25px" height="25px" id="ball">';

        if (helpCell > 0) {
          mainCell--;
          helpCell--;
          if (mainCell == helpCell) {
            mainCell++;
          }

          if (helpCell == 0) {
            temp--;
          }
          setDelay();
          return;
        }
      }
      if (matrix.rows[0].cells[rows].innerHTML ==
        '<img src="img/ball.png" width="25px" height="25px" id="ball">') {
          return;
      }
    }

    //Move down
    if (rows - helpRow + 1 <= rows && cells + helpCell >= 0) {
      if (matrix.rows[rows - helpRow + 1].cells[cells + helpCell].
              innerHTML == 0) {

      matrix.rows[rows - helpRow + 1].cells[cells + helpCell].innerHTML =
        '<img src="img/ball.png" width="25px" height="25px" id="ball">';

        if (helpRow > 0) {
          mainRow--;
          helpRow--;
          if (mainRow == helpRow) {
            mainRow++;
          }

          if (helpRow == 0) {
            helpRow++;
          }
          setDelay();
          return;
        }
      }
    }

    //Turn back down
    if (rows - helpRow + 1 <= rows && cells + helpCell >= 0) {
      if (matrix.rows[rows - helpRow + 1].cells[cells + helpCell].innerHTML ==
        '<img src="img/ball.png" width="25px" height="25px" id="ball">' &&
        matrix.rows[rows - helpRow].cells[cells + helpCell].innerHTML ==
        '<img src="img/ball.png" width="25px" height="25px" id="ball">') {

          matrix.rows[rows - helpRow].cells[cells + helpCell].innerHTML = 1;
          if (helpRow > 0) {
            mainRow--;
            helpRow--;
          }

          if (mainRow == helpRow) {
            mainRow++;
          }
          setDelay();
          return;
      }
    }

    //Turn back left
    if (rows - helpRow <= rows && cells + helpCell - 1 >= 0) {
      if (matrix.rows[rows - helpRow].cells[cells + helpCell - 1].innerHTML ==
        '<img src="img/ball.png" width="25px" height="25px" id="ball">' &&
        matrix.rows[rows - helpRow].cells[cells + helpCell].innerHTML ==
        '<img src="img/ball.png" width="25px" height="25px" id="ball">') {

          matrix.rows[rows - helpRow].cells[cells + helpCell].innerHTML = 1;
          mainCell--;
          helpCell--;
          if (mainCell == helpCell) {
            mainCell++;
          }
          setDelay();
          return;
      }
    }

    //Turn back right
    if (rows - helpRow <= rows && cells + helpCell + 1 <= rows) {
      if (matrix.rows[rows - helpRow].cells[cells + helpCell + 1].innerHTML ==
        '<img src="img/ball.png" width="25px" height="25px" id="ball">' &&
        matrix.rows[rows - helpRow].cells[cells + helpCell].innerHTML ==
        '<img src="img/ball.png" width="25px" height="25px" id="ball">') {

          matrix.rows[rows - helpRow].cells[cells + helpCell].innerHTML = 1;
          if (mainCell < rows) {
            mainCell++;
            helpCell++;
          }

          if (mainCell == rows) {
            helpCell++;
          }
          setDelay();
          return;
      }
    }

    //Turn back up
    if (rows - helpRow + 1 <= rows && cells + helpCell >= 0) {
      if (matrix.rows[rows - helpRow].cells[cells + helpCell].innerHTML ==
        '<img src="img/ball.png" width="25px" height="25px" id="ball">' &&
        matrix.rows[rows - helpRow + 1].cells[cells + helpCell].innerHTML ==
        '<img src="img/ball.png" width="25px" height="25px" id="ball">') {

          matrix.rows[rows - helpRow + 1].cells[cells + helpCell].innerHTML = 1;
          if (mainRow < rows) {
            mainRow++;
            helpRow++;
          }

          if (mainRow > rows) {
            helpRow--;
          }
          setDelay();
          return;
      }
    }

    else {
      loseGame();
    }

  }
}