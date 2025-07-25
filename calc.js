/*Nia Manning
 7-28-2025
 Guided Inquiry #7 */
const calcDisplay = document.getElementById("calcDisplay");

function appendToDisplay(input){ /* Puts calculations on the screen */
    calcDisplay.value += input;
    console.log("input pressed");
 }

 function clearDisplay(){ /*Clear Numbers from Calculator*/
    calcDisplay.value = "";
    console.log("input cleared");
 }

 function changeSign(){ //+/- button
    let newNum = parseFloat(calcDisplay.value); //parses a string argument and returns a floating point number.
    newNum = -newNum;
    calcDisplay.value = newNum;
    console.log("is it positive? or negative?")
 }

  function percentDec(){ /* % button*/
    let newNum = parseFloat(calcDisplay.value);
    if(!isNaN(newNum)){
        let result = newNum/100;
        calcDisplay.value = result;
        console.log("percentages.");
    }else{
        calcDisplay.value = 'Error';
        alert('Invalid input!');
    }
 }

 function piCalc(){ //pi button
    let newPiNum = parseFloat(calcDisplay.value);
    if(!isNaN(newPiNum)){
        let resultPi = newPiNum * Math.PI;
        calcDisplay.value = resultPi;
        console.log("pi time");
    }else{
        alert('Invalid input!');
    }
 }
 
 function calculate(){ //try...catch statement
    try {
        calcDisplay.value = eval(calcDisplay.value);
        console.log("equals");
    } catch (error) {
        alert('Invalid input!');
    }
 }