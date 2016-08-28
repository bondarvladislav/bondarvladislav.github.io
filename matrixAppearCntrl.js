function showModal() {
  document.getElementById("openModal").style.cssText = "opacity: 1;";
}

function hideModal() {
  document.getElementById("openModal").style.cssText = "opacity: 0;";
}

function hideFirstDOMElems() {
  //Hide input field for size of matrix
  document.getElementById("first-step").style.cssText = "display: none;";
  document.getElementById("second-step").style.cssText = "display: block;";
  document.getElementById("first-button").style.cssText = "display: none;";
  document.getElementById("second-button").style.cssText = "display: block;";
  document.getElementById("first-input").style.cssText = "display: none;";
  document.getElementById("second-input").style.cssText = "display: block;";
}

function hideSecondDOMElems() {
  //Hide input field for sparseness of matrix
  document.getElementById("second-step").style.cssText = "display: none;";
  document.getElementById("third-step").style.cssText = "display: block;";
  document.getElementById("second-button").style.cssText = "display: none;";
  document.getElementById("third-button").style.cssText = "display: block;";
  document.getElementById("second-input").style.cssText = "display: none;";
  document.getElementById("third-input").style.cssText = "display: block;";
}

//Validation for size of matrix
function drawMatrix() {
  var inputElem = document.getElementById("first-input");
  var userVal = inputElem.value;

  if (userVal < 3 || userVal > 15 || userVal/Math.floor(userVal) != 1) {
    showModal();
    setTimeout(hideModal, 1000);
  }

  else if (userVal >= 3 && userVal <= 15) {
    hideFirstDOMElems();
    startDraw(userVal);
  }

}

//Create empty matrix
function startDraw(userVal) {
  var matrix = '<table id="matrix" border="1"><tbody>';
  var result = document.getElementById("outer");

  var rowCounter;
  var cellCounter;

  for (rowCounter = 0; rowCounter < userVal; rowCounter++) {
    matrix += '<tr>';
    for (cellCounter = 0; cellCounter < userVal; cellCounter++) {
       matrix += '<td>' + '</td>';
       result.innerHTML = matrix;
    }

    matrix += '</tr>';
  }
}