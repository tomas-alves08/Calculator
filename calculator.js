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

// 1. Create a sum function
const sum = (num1, num2) => {
  return num1 + num2;
};

// 2. Create a subtraction function
const subtract = (num1, num2) => {
  return num1 - num2;
};

// 3. Create a multiply function
const multiply = (num1, num2) => {
  return num1 * num2;
};

// 4. Create a division function
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
  display.innerHTML = calcResult;
};

const resetConditions = () => {
  num1 = [0];
  num2 = [0];
  arithmeticFunctionVar = "";
  chosenNumber1 = "";
  chosenNumber2 = "";
  calcResult === ""
    ? (display.innerHTML = "0")
    : (display.innerHTML = calcResult);

  for (let i = 0; i < arithmeticButtons.length; i++) {
    document.getElementById(arithmeticButtons[i].value).style.backgroundColor =
      "hsl(45, 7%, 89%)";
  }
};

document.querySelector(".buttons-area").addEventListener("click", (e) => {
  let event = e.target.value;
  let num = [];
  let chosenNumber = 0;
  clickSound.play();
  event === "reset" && resetConditions();
  event === "enter" && enter();

  if (event === "enter") {
    enter(chosenNumber1, chosenNumber2);
    resetConditions();
  } else if (
    event === "sum" ||
    event === "subtract" ||
    event === "multiply" ||
    event === "divide"
  ) {
    arithmeticFunctionVar = event;
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

    console.log(arithmeticFunctionVar);
  } else {
    arithmeticFunctionVar === "" ? (num = num1) : (num = num2);
    chosenNumber1 = Number(num1.join(""));
    chosenNumber2 = Number(num2.join(""));

    if (event === "delete") {
      deleteValue(num);
      chosenNumber1 = Number(num1.join(""));
      chosenNumber2 = Number(num2.join(""));
      arithmeticFunctionVar === ""
        ? (display.innerHTML = chosenNumber1)
        : (display.innerHTML = chosenNumber2);
      console.log(
        event,
        num1,
        chosenNumber1,
        num2,
        chosenNumber2,
        typeof chosenNumber
      );
    } else {
      num.push(event);
      chosenNumber1 = Number(num1.join(""));
      chosenNumber2 = Number(num2.join(""));

      document.querySelector(".display").innerHTML =
        arithmeticFunctionVar === "" ? chosenNumber1 : chosenNumber2;

      if (display.innerHTML === "0" && event === ".") display.innerHTML = "0.";

      console.log(
        event,
        num1,
        chosenNumber1,
        num2,
        chosenNumber2,
        typeof chosenNumber
      );
    }
  }
});

// INCLUDE SOUND OF CLICK

// 5. Create a delete function
// 5.1 Create a function which deletes just the last number entered and
//     which does not change if there is already a number saved
//     previously

// 6. Create a reset function
// 6.1 Create a function which reset all the three variables for number
//     1, number 2 and arithmetic function variable

// 7. Create a enter function
// 7.1 Create a function that calls a function which will use both
//     saved number variables and the arithmetic function variable
//     as parameters

// 8. Put all functions together
// 8.1 Make all the arithmetic functions save the first number when
//     they are clicked in a variable
// 8.2 Once arithmetic function is clicked it will be saved in a
//     variable
// 8.3 Second number will be saved in a third variable
// 8.4 Enter button will call a function based on these 3 variables
//     as inputs
