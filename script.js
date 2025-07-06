function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function dlt() {
  document.getElementById("display").value -= 1;
}
function calculate() {
  let result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;
}
