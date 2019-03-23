var contentResult = document.getElementById("content-result");
var contentShowOperations = document.getElementById("content-show-operations");
var largeContenResult;
var largeContentShowOperations;
var firstNumber;
var secondNumber;
var sign;
var result = 0;
var count = 0;

//CLEANING FUNCTIONS
function addingAc() {
    contentResult.innerHTML = "0";
    contentShowOperations.innerHTML = "0";
}

function addingC() {
    var arr1 = contentResult.innerHTML.split("");
    console.log(arr1);
    var arr1WithoutLastIndex = arr1.pop();
    console.log(arr1);
    var stringfirstContent = arr1.join("");
    console.log(stringfirstContent);
    contentResult.innerHTML = stringfirstContent;

    var arr2 = contentShowOperations.innerHTML.split("");
    console.log(arr2);
    var arr2WithoutLastIndex = arr2.pop();
    console.log(arr2);
    var stringSecondContent = arr2.join("");
    console.log(stringSecondContent);
    contentShowOperations.innerHTML = stringSecondContent;
}

function addingCe() {
    var contentFirst = contentResult.innerHTML;
    console.log(contentFirst)
    var digits = contentFirst.length;
    console.log(digits);
    var contentSecond = contentShowOperations.innerHTML;
    console.log(contentSecond);
    var digits2 = contentSecond.length;
    console.log(digits2);
    var digit = digits2 - digits;
    console.log(digit);
    var clean = contentSecond.substring(0, digit);
    console.log(clean);
    contentShowOperations.innerHTML = clean;
    contentResult.innerHTML = "";
}

//FACTORIAL FUNCTION 
function factorial(num) {
    var total = 1;
    if (num === 0) {
        total = 1;
    }
    for (var i = 1; i <= num; i++) {
        total *= i;
    }
    return total;
}

//GENERAL FUNCTIONS
function writeNumbers(n) {
    largeContenResult = contentResult.innerHTML.length;
    largeContentShowOperations = contentShowOperations.innerHTML.length;

    if (contentShowOperations.innerHTML === "0" && largeContentShowOperations === 1) {
        contentResult.innerHTML = "" + n;
        contentShowOperations.innerHTML = "" + n;
    } else {
        if (contentShowOperations.innerHTML.includes("=") || contentResult.innerHTML.includes("=")) {
            contentResult.innerHTML = "" + n;
            contentShowOperations.innerHTML = "" + n;
        } else {
            contentResult.innerHTML += n;
            contentShowOperations.innerHTML += n;
        }
    }
}

function addingDot() {
    if (contentResult.innerHTML.includes(".") || contentShowOperations.innerHTML.includes("=") || contentResult.innerHTML.includes("=")) {
        contentResult.innerHTML = contentResult.innerHTML;
        contentShowOperations.innerHTML = contentShowOperations.innerHTML;
    } else {
        contentResult.innerHTML += ".";
        contentShowOperations.innerHTML += ".";
    }
}

function addingMoreAndLess() {
    if (contentShowOperations.innerHTML.includes("=")) {
        firstNumber = contentShowOperations.innerHTML.split("=")[1];
        console.log(contentShowOperations.innerHTML.split("="));
        console.log(firstNumber);
        sign = "±";
        resolving();
        contentShowOperations.innerHTML = result;
    } else {
        firstNumber = contentShowOperations.innerHTML;
        console.log(firstNumber);
        firstNumber = contentResult.innerHTML;
        console.log(firstNumber);
        var firstNumberLarge = firstNumber.length;
        console.log(firstNumberLarge);
        var numberSecondContent = contentShowOperations.innerHTML;
        var numberSecondContentLarge = numberSecondContent.length;
        console.log(numberSecondContentLarge);
        var large = numberSecondContentLarge - firstNumberLarge;
        console.log(large);
        var clean1 = numberSecondContent.substring(-1, large);
        console.log(clean1);
        sign = "±";
        resolving();
        contentShowOperations.innerHTML = clean1 + result;
    }
}

function adding3pow() {
    if (contentShowOperations.innerHTML.includes("=")) {
        firstNumber = contentShowOperations.innerHTML.split("=")[1];
        console.log(contentShowOperations.innerHTML.split("="));
        console.log(firstNumber);
        sign = "³";
        resolving();
        contentShowOperations.innerHTML = firstNumber + "³=" + result;
    } else {
        firstNumber = contentResult.innerHTML;
        console.log(firstNumber);
        sign = "³";
        resolving();
        contentShowOperations.innerHTML += "³=" + result;
    }
}

function adding2pow() {
    if (contentShowOperations.innerHTML.includes("=")) {
        firstNumber = contentShowOperations.innerHTML.split("=")[1];
        console.log(contentShowOperations.innerHTML.split("="));
        console.log(firstNumber);
        sign = "²";
        resolving();
        contentShowOperations.innerHTML = firstNumber + "²=" + result;
    } else {
        firstNumber = contentResult.innerHTML;
        console.log(firstNumber);
        sign = "²";
        resolving();
        contentShowOperations.innerHTML += "²=" + result;
    }
}

function addingSquareRoot() {
    if (contentShowOperations.innerHTML.includes("=")) {
        firstNumber = contentShowOperations.innerHTML.split("=")[1];
        console.log(contentShowOperations.innerHTML.split("="));
        console.log(firstNumber);
        sign = "√";
        resolving();
        contentShowOperations.innerHTML = "√" + firstNumber + "=" + result;
    } else {
        firstNumber = contentResult.innerHTML;
        console.log(firstNumber);
        sign = "√";
        resolving();
        contentShowOperations.innerHTML = "√" + contentShowOperations.innerHTML + "=" + result;
    }
}

function addingFactorialAdd() {
    if (contentShowOperations.innerHTML.includes("=")) {
        firstNumber = contentShowOperations.innerHTML.split("=")[1];
        console.log(contentShowOperations.innerHTML.split("="));
        console.log(firstNumber);
        sign = "!+";
        resolving();
        contentShowOperations.innerHTML = firstNumber + "!+=" + result;
    } else {
        firstNumber = contentResult.innerHTML;
        console.log(firstNumber);
        sign = "!+";
        resolving();
        contentShowOperations.innerHTML += "!+=" + result;
    }
}

function addingFactorial() {
    if (contentShowOperations.innerHTML.includes("=")) {
        firstNumber = contentShowOperations.innerHTML.split("=")[1];
        console.log(contentShowOperations.innerHTML.split("="));
        console.log(firstNumber);
        sign = "!";
        resolving();
        contentShowOperations.innerHTML = firstNumber + "!=" + result;
    } else {
        firstNumber = contentResult.innerHTML;
        console.log(firstNumber);
        sign = "!";
        resolving();
        contentShowOperations.innerHTML += "!=" + result;
    }
}

function resolvingOperations(signOperation) {
    if (contentShowOperations.innerHTML.includes("=")) {
        firstNumber = contentShowOperations.innerHTML.split("=")[1];
        console.log(contentShowOperations.innerHTML.split("="));
        contentShowOperations.innerHTML = firstNumber + signOperation;
    } else {
        var arr = contentShowOperations.innerHTML.split("");
        console.log(arr);
        var largeArray = arr.length;
        var indexlessOne = (largeArray - 1);
        if (arr[indexlessOne] === "+" || arr[indexlessOne] === "-" || arr[indexlessOne] === "*" || arr[indexlessOne] === "/") {
            contentShowOperations.innerHTML = contentShowOperations.innerHTML;
        } else {
            contentShowOperations.innerHTML += signOperation;
        }
    }
    firstNumber = contentShowOperations.innerHTML.split("");
    console.log(firstNumber);
    var missLastFirstNumber = firstNumber.pop();
    console.log(firstNumber);
    var firstNumberWithoutLast = firstNumber.join("");
    firstNumber = firstNumberWithoutLast;
    sign = signOperation;
    contentResult.innerHTML = "";
}

function addingEqualSign() {
    if (contentShowOperations.innerHTML === "0" || contentResult.innerHTML === "0" || contentShowOperations.innerHTML.includes("=") || contentResult.innerHTML.includes("=")) {
        contentResult.innerHTML = contentResult.innerHTML;
        contentShowOperations.innerHTML = contentShowOperations.innerHTML;
    } else {
        contentShowOperations.innerHTML += "=";
        secondNumber = contentResult.innerHTML;
        console.log(secondNumber);
        resolving();
        contentShowOperations.innerHTML += result;
    }
}

function resolving() {
    switch (sign) {
        case "+":
            result = eval(firstNumber + "+" + secondNumber);
            console.log(result);
            break;
        case "-":
            result = eval(firstNumber + "-" + secondNumber);
            console.log(result);
            break;
        case "*":
            result = eval(firstNumber + "*" + secondNumber);
            console.log(result);
            break;
        case "/":
            result = eval(firstNumber + "/" + secondNumber);
            console.log(result);
            break;
        case "%":
            result = eval(firstNumber + "%" + secondNumber);
            console.log(result);
            break;
        case "^":
            result = eval(Math.pow(firstNumber, secondNumber));
            console.log(result);
            break;
        case "√":
            result = eval(Math.sqrt(firstNumber));
            console.log(result);
            break;
        case "²":
            result = eval(Math.pow(firstNumber, 2));
            break;
        case "³":
            result = eval(Math.pow(firstNumber, 3));
            break;
        case "±":
            result = eval(firstNumber * -1);
            break;
        case "!+":
            if (contentShowOperations.innerHTML.charCodeAt(0) < 48 || contentShowOperations.innerHTML.charCodeAt(0) > 57) {
                var secondPart = eval(secondNumber + "+" + 1);
                result = eval((secondNumber * secondPart) / 2);
                console.log(secondPart);
                console.log(result);
            } else {
                var firstPart = eval(firstNumber + "+" + 1);
                result = eval((firstNumber * firstPart) / 2);
                console.log(firstPart);
                console.log(result);
            }
            break;
        case "!":
            if (contentShowOperations.innerHTML.charCodeAt(0) < 48 || contentShowOperations.innerHTML.charCodeAt(0) > 57) {
                result = eval(factorial(secondNumber));
                console.log(result);
            } else {
                result = eval(factorial(firstNumber));
                console.log(result);
            }
            break;
    }
    contentResult.innerHTML = result;
}
