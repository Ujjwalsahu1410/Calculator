var display = document.querySelector(".display");

const numbers = document.querySelectorAll(".number");
let string = "";
let a = '';
let ne = null;  // Changed from an empty string to null

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    string = string + number.innerHTML;
    display.value = string;
  });
});

const operators = document.querySelectorAll(".AC");
operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    display.value = "";
    if (a === "") {
      a = string;
      ne = operator.innerHTML;
    } else {
      // Check if ne is not null before performing the operation
      if (ne === "+") {
        a = Number(a) + Number(string);
        ne = operator.innerHTML;
      } else if (ne === "-") {
        a = Number(a) - Number(string);
        ne = operator.innerHTML;
      } else if (ne === "*") {
        a = Number(a) * Number(string);
        ne = operator.innerHTML;
      } else if (ne === "/") {
        a = Number(a) / Number(string);
        ne = operator.innerHTML;
      }
    }
    string = "";
  });
});

const equal = document.querySelector(".equals");
equal.addEventListener('click', () => {
  if (a === "") {
    a = string;
    display.value = a;
  } else {
    if (ne && ne === "+") {
      a = Number(a) + Number(string);
    } else if (ne && ne === "-") {
      a = Number(a) - Number(string);
    } else if (ne && ne === "*") {
      a = Number(a) * Number(string);
    } else if (ne && ne === "/") {
      a = Number(a) / Number(string);
    }
    display.value = a;
    string = null;
  }
});

const reset = document.querySelector('.all');
reset.addEventListener('click', () => {
  display.value = "";
  string = "";
  a = "";
  ne = null;  // Reset new operator on reset
});

const del = document.querySelector('.DE');
del.addEventListener('click', () => {
  let b = display.value;
  let c = b.length;
  let r;
  if (c > 0) {
    c--;
    r = b.slice(0, c);
  }
  display.value = r;
  if (display.value === "") {
    string = "";
  }
});
