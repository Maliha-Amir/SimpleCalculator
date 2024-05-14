function addToDisplay(value){
   document.getElementById("display").value += value;
}
function clearDisplay(){
document.getElementById('display').value = "";
}

function calculate(){
   let display = document.getElementById('display').value;
   let result = eval(display);
   document.getElementById('display').value=result;
}


// MY OWN CODE WHILE MAKING CALCULATOR:

// function add(a,b){
//    return  a+b;
// }

// let input1= prompt("Enter your number");
// let input2= prompt("Enter your number");

// // CONVERTING STRING VALUES TO NUMBERS:
// let num1=parseFloat(input1);
// let num2=parseFloat(input2);

// let result =add(num1,num2);
// console.log(result);

// function subtract(a,b){
//    return a-b;
// }
// let input_1=prompt("Enter your number");
// let input_2=prompt("Enter your number");

// // CONVERTING STRING VALUES TO NUMBERS:
// let num_1=parseFloat(input_1);
// let num_2=parseFloat(input_2);


// let result_1=subtract(num_1,num_2);
// console.log(result_1);

// function mult(a,b){
//    return a*b;
// }

// function divide(a,b){
//    return a/b;
// }

// function fraction(a,b){
// return a%b;
// }
