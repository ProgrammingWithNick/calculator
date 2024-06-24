const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

let firstVal = "";
let isFirstVal = false;
let secondVal = "";
let isSecondVal = false;
let sign = "";
let resultVal = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (isFirstVal === false) {
            getFirstVal(atr);
        }
        if (isSecondVal === false) {
            getSecondVal(atr);
        }
    });
}

function getFirstVal(el) {
    result.innerHTML = "";
    firstVal += el;
    result.innerHTML = firstVal;
    firstVal = +firstVal;
}

function getSecondVal(el) {
    if (firstVal != "" && sign != "") {
        secondVal += el;
        result.innerHTML = secondVal;
        secondVal = +secondVal;
    }
}

function getsign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstVal = true;
        })
    }
}
getsign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if (sign === "+") {
        resultVal = firstVal + secondVal;
    }
    else if (sign === "-") {
        resultVal = firstVal - secondVal;
    }
    else if (sign === "x") {
        resultVal = firstVal * secondVal;
    }
    else if (sign === "/") {
        resultVal = firstVal / secondVal;
    }
    result.innerHTML = resultVal;
    firstVal = resultVal;
    secondVal = "";

    checkResultLenght();
})

function checkResultLenght() {
    resultVal = JSON.stringify(resultVal);

    if (resultVal.length >= 8) {
        resultVal = JSON.parse(resultVal);
        result.innerHTML = resultVal.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstVal != "") {
        resultVal = -firstVal;
        firstVal = resultVal;
    }
    if (firstVal != "" && secondVal != "" && sign != "") {
        resultVal = -resultVal;
    }
    result.innerHTML = resultVal;
})

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstVal != "") {
        resultVal = firstVal / 100;
        firstVal = resultVal;
    }
    if (firstVal != "" && secondVal != "" && sign != "") {
        resultVal = -resultVal / 100;
    }
    result.innerHTML = resultVal;
})

clear.addEventListener('click', () => {
    result.innerHTML = 0;

    firstVal = "";
    isFirstVal = false;
    secondVal = "";
    isSecondVal = false;
    sign = "";
    resultVal = 0;
})
