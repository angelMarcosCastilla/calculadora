const $screen = document.getElementById("screen");
let resultado = 0;
let flagOperation = true; // controls that two operations are not repeated (+-)

const reset = () => {
  $screen.textContent = "0";
  resultado = 0;
};
const numberDelete = (numberScreen) => {
  if (numberScreen !== "0") {
    $screen.textContent = numberScreen.substring(0, numberScreen.length - 1);
  }
  if ($screen.textContent === "") $screen.textContent = "0";
};
const addNumbers = (number) => {
  if ($screen.textContent === "0") {
    $screen.textContent = "";
  }
  $screen.textContent += number;
  flagOperation = true;
};

const operation = (operations) => {
  if (flagOperation) {
    $screen.textContent += operations;
    flagOperation = false;
  }
};
const calcular = (op) => {
  resultado = eval(op);
  $screen.textContent = `${resultado}`;
};

window.addEventListener("click", (e) => {
  if (e.target.matches(".numbers")) {
    addNumbers(e.target.textContent);
  }
  if (e.target.matches(".operation")) {
    operation(e.target.textContent);
  }

  if (e.target.matches(".reset")) {
    reset();
  }
  if (e.target.matches(".delete")) {
    numberDelete($screen.textContent);
  }
  if (e.target.matches(".calcular")) {
    calcular($screen.textContent);
  }
});
