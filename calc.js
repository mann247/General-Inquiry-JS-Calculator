/*Nia Manning
 7-28-2025
 Guided Inquiry #7*/
const calcDisplay = document.getElementById("calcDisplay");

function appendToDisplay(input){ /* Puts calculations on the screen */
    calcDisplay.value += input;
    console.log("input pressed");
 }
 function clearDisplay(){ /* AC Button. Clear Numbers from Calculator*/
    calcDisplay.value = "";
    console.log("input cleared");
 }
 function dltNum(){
    calcDisplay.value = calcDisplay.value.slice(0,-1);
    console.log("backspace");
 }
 /* +/- button
 changes numerical value to a positive or negative number*/ 
 function changeSign(){ 
    let newNum = parseFloat(calcDisplay.value); //parses a string argument and returns a floating point number.
    if(!isNaN(newNum)){
         newNum = -newNum;
        calcDisplay.value = newNum;
        console.log("is it positive? or negative?")
    }else{
        calcDisplay.value = 'Error';
        alert('Invalid input! Please click buttons 0-9 to continue.');
        console.log("invalid input");
    }
 }
 /* % button
 divides user input by 100*/ 
  function percentDec(){ /* % button*/
    let newNum = parseFloat(calcDisplay.value);
    if(!isNaN(newNum)){
        let result = newNum/100;
        calcDisplay.value = result;
        console.log("percentages.");
    }else{
        calcDisplay.value = 'Error';
        alert('Invalid input! Please click buttons 0-9 to continue.');
        console.log("invalid input");
    }
 }
  /* pi button
multiplies user input by Pi.*/ 
 function piCalc(){ 
    let newPiNum = parseFloat(calcDisplay.value);
    if(!isNaN(newPiNum)){
        let resultPi = newPiNum * Math.PI;
        calcDisplay.value = resultPi;
        console.log("pi time");
    }else{
        calcDisplay.value = 'Error';
        alert('Invalid input! Please click buttons 0-9 to continue.');
        console.log("invalid input");
    }
 }
// try...catch statement to calculate user input
 function calculate(){ 
    const input = calcDisplay.value;
    try {
        /* Prints out an error alert instead of infinity when user divides a whole number by 0.*/
        if (input.includes("/0")){
            calcDisplay.value = 'Error';
            alert('Invalid input! Number can not be divided by 0.');
            console.log("cannot divide by 0.");
        }else{
            calcDisplay.value = eval(calcDisplay.value);
            console.log("equals");
        }
    /* Prints out an error alert if user clicks equal button with no input*/
        if(input.trim() === ""){
            calcDisplay.value = 'Error';
            alert('Invalid input! Please click buttons 0-9 to continue.');
            console.log("equals");
        }
    /* Prints out an error alert in case something is misclicked*/
    } catch (error) {
        alert('Invalid input! Please click buttons 0-9 to continue.');
        console.log("invalid input");
    }
 }