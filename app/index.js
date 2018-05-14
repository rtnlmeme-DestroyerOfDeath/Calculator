var btnAll = document.querySelectorAll('BUTTON');
var expressionDisplay = document.querySelector('#expressionDisplay');
var resultDisplay = document.querySelector("#resultDisplay");
var inputFeedbackField = document.querySelector('#inputFeedbackField')

//add event listener to every item in btnAll

// btnAll.forEach(function(btn){
//     btn.addEventListener('click', function(){
//         console.log(btn.value);
//     })
// })

var input = '',
    inputOld = '';


for (i = 0; i < btnAll.length; i++) {
    btnAll[i].addEventListener('click', clickHandler)
}

function generateOutput (str) {
    return eval(str);
}

function equalHandler () {
    if (input !== '') {
        resultDisplay.innerHTML = generateOutput(input);
        inputOld = input;
        input = '';
        drawExpressionDisplay();
        inputFeedbackField.innerHTML = ''; 
    } // else... future feature might be to do the last operation again                                                      
}

function clickHandler () {
    element = this;
    if (!(element.classList.contains('special'))) {      //grow input string when standard btns clicked
    input = input + String(element.id);
    inputFeedbackField.innerHTML = input;
    } else if (element.id === '=') {            //handle special buttons
        equalHandler();
    } else if (element.id === 'u') {
        undo();
    } else if (element.id === 'c') {
        clearCalc();
    } else if (element.id === 'Ans') {
        input = inputOld;
    }
}

function undo () {
    if (input.length < 2) {
        input = '';
        inputFeedbackField.innerHTML = input;
    } else {
        var inputArr = input.split('');
        inputArr.pop();
        input = inputArr.join('');
        inputFeedbackField.innerHTML = input;
    }
}

function clearCalc() {
    input = '';
    resultDisplay.innerHTML = '';
    inputFeedbackField.innerHTML = '';
    expressionDisplay.innerHTML = '';
}

function drawExpressionDisplay() {
    expressionDisplay.innerHTML = inputOld + '                    =';
}
