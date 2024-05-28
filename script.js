const userInput = document.getElementById("user-input");
const userInputValue = document.getElementById("user-input").value;
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

function validateButtonFunctions() {
    empty();
}

function empty() {
    if (userInput.value.length <= 0) {
        alert("Please input a value")
    }
}