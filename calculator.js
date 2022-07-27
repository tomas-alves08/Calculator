//CONSTANTS
const result = document.querySelector(".display");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const del = document.getElementById("del");
const plus = document.getElementById("sum");
const minus = document.getElementById("subtract");
const multiplication = document.getElementById("multiply");
const division = document.getElementById("divide");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");
const display = document.querySelector(".display");
const arithmeticButtons = document.querySelectorAll(".arithmetic");
const clickSound = new Audio("click.wav");

// INITIAL CONDITIONS
let num1 = [0];
let num2 = [0];
let arithmeticFunctionVar = "";
let chosenNumber1 = "";
let chosenNumber2 = "";
let calcResult = "";
let saveCalcResults = "";

// <-- FUNCTIONS --> //
const sum = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const deleteValue = (arr) => arr.pop();

const enter = (number1, number2) => {
  if (arithmeticFunctionVar === "sum") {
    calcResult = sum(number1, number2);
  } else if (arithmeticFunctionVar === "subtract") {
    calcResult = subtract(number1, number2);
  } else if (arithmeticFunctionVar === "multiply") {
    calcResult = multiply(number1, number2);
  } else if (arithmeticFunctionVar === "divide") {
    calcResult = divide(number1, number2);
  }
  calcResult = calcResult;
  display.innerHTML = calcResult;
};

const resetConditions = () => {
  num1 = [0];
  num2 = [0];
  arithmeticFunctionVar = "";
  chosenNumber1 = "";
  chosenNumber2 = "";

  calcResult === "" ? (saveCalcResults = 0) : (saveCalcResults = calcResult);
  display.innerHTML = saveCalcResults;
  calcResult = "";

  for (let i = 0; i < arithmeticButtons.length; i++) {
    document.getElementById(arithmeticButtons[i].value).style.backgroundColor =
      "hsl(45, 7%, 89%)";
  }
};

const joinChosenNumbers = () => {
  chosenNumber1 = Number(num1.join(""));
  chosenNumber2 = Number(num2.join(""));
};

// <-- CALCULATOR FUNCTIONALITY --> //
document.querySelector(".buttons-area").addEventListener("click", (e) => {
  let event = e.target.value;
  let num = [];
  clickSound.play();

  // ENTER FUNCTIONALITY
  if (event === "enter") {
    enter(chosenNumber1, chosenNumber2);
    resetConditions();
  } else if (event === "reset") {
    resetConditions();
  } else if (
    event === "sum" ||
    event === "subtract" ||
    event === "multiply" ||
    event === "divide"
  ) {
    arithmeticFunctionVar = event;

    // GIVING COLORS TO BUTTONS
    for (let i = 0; i < arithmeticButtons.length; i++) {
      if (arithmeticButtons[i].value === event) {
        document.getElementById(
          arithmeticButtons[i].value
        ).style.backgroundColor = "rgb(212, 230, 111, 0.7)";
      } else {
        document.getElementById(
          arithmeticButtons[i].value
        ).style.backgroundColor = "hsl(45, 7%, 89%)";
      }
    }
  } else {
    arithmeticFunctionVar === "" ? (num = num1) : (num = num2);
    joinChosenNumbers();

    // DELETE FUNCTIONALITY
    if (event === "delete") {
      deleteValue(num);
      joinChosenNumbers();
      arithmeticFunctionVar === ""
        ? (display.innerHTML = chosenNumber1)
        : (display.innerHTML = chosenNumber2);
    } else {
      // DISPLAY FUNCTIONALITY
      num.push(event);
      joinChosenNumbers();

      display.innerHTML =
        arithmeticFunctionVar === "" ? chosenNumber1 : chosenNumber2;

      console.log(chosenNumber1);
      console.log(chosenNumber2);

      if (display.innerHTML === "0" && event === ".") display.innerHTML = "0.";
    }
  }
});
