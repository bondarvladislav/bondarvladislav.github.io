//Validation for sparseness
function fillNumbers() {
  var firstElem = document.getElementById("first-input");
  var userVal = firstElem.value;
  var inputElem = document.getElementById("second-input");
  var spars = inputElem.value;

  if (spars < 0 || spars > 100 || spars/Math.floor(spars) != 1) {
    showModal();
    setTimeout(hideModal, 1000);
  }

  else if (spars >= 0 && spars <= 100) {
    hideSecondDOMElems();
    startFilling(userVal, spars);
  }
}

//Create array with nulls and ones
function startFilling(userVal, sparseness) {
  var matrixArray = [];
  var arrCounter;
  var helpCounter;
  var rand;

  //Fill numbers to array using sparseness
  for (arrCounter = 0; arrCounter < userVal; arrCounter++) {
    matrixArray.push(new Array(userVal));
    for (helpCounter = 0; helpCounter < userVal; helpCounter++) {
      rand = Math.random();
      if (sparseness/100 > rand) {
        matrixArray[arrCounter][helpCounter] = 0;
      }

      if (sparseness/100 <= rand) {
        matrixArray[arrCounter][helpCounter] = 1;
      }
    }
  }

  //Set "0" to left bottom corner and right top corner
  matrixArray[0][userVal-1] = 0;
  matrixArray[userVal-1][0] = 0;

  displayMatrix(matrixArray);
}

var row = 0;
var cell = 0;

//Fill numbers from array into table and make numbers editable
function displayMatrix(matrixArray) {
  var table = document.getElementById("matrix");

  //Fill nulls and ones into table
  setTimeout(function () {
    if (row == matrixArray.length) {
      return;
    }

    table.rows[row].cells[cell].innerHTML = matrixArray[cell][row];
    cell++;

    if (cell < matrixArray.length) {
      displayMatrix(matrixArray);
    }

    if (cell == matrixArray.length) {
      cell = 0;
      row++;
      displayMatrix(matrixArray);
    }
  }, 100);

  //Make numbers editable by click
  table.onclick = function (event) {
    var target = event.target;
    if (target.nodeName == 'TD') {
      if (target.innerHTML == 0) {
        target.innerHTML = 1;
        return;
      }

      if (target.innerHTML == 1) {
        target.innerHTML = 0;
        return;
      }
    }
  };

}