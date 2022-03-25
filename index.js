let rs = require('readline-sync');


// Calculator 1 input on one line


let equation ;
let operator ;
let operation = false;


function calculation(){
    if (operator === '+') {
        return num1 + num2
    } else if (operator === '-'){
        return num1 - num2
    } else if (operator === '*'){
        return num1 * num2
    } else if (operator === '/'){
        if(num2 !== 0){
            return num1 / num2
        } else {console.log('Cannot divide by 0');}
        
    }
}

while (!operation){
    equation = rs.question('Insert equation.. ex.. 6+6  ')
    var operatorPos = equation.search(/[\+\-\*\/]/);
    operator = equation.slice(operatorPos, operatorPos + 1)
    num1 = parseInt(equation.slice(0, (operatorPos)))
    num2 = parseInt(equation.slice(operatorPos + 1))
    if (operatorPos < 0){
        console.log('Not a valid operation');
    } else {
        operation = true;
    }
}



console.log(calculation());


// Calculator 2 Multiple lines
// var input;
// var num1;
// var num2;
// var result;
// var operation = false;



// while(!operation){
//     input =rs.question(' I can only + - * /  What function would you like to do? ')
//     if (input==='+'
//     || input==='-'
//     || input==='*'
//     ||input==='/'){
//         operation = true;
//     } else{
//         console.log('That is not a valid operation')
//     }
// }

// num1 = rs.questionInt('Please enter the first number ');
// num2 = rs.questionInt('Please enter the second number ');

// function evaluate(firstNum,secondNum){
//      if (input==='+'){
//         return firstNum + secondNum
//      } else if (input==='-'){
//         return firstNum - secondNum
//     } else if(input==='*'){
//         return firstNum * secondNum
//     }else if(input==='/'){
//       if(num2 !== 0){
//         return num1 / num2
//     } else {console.log('Cannot divide by 0');}
//  }
// }
 
//  result = evaluate(num1,num2)
//  console.log(result)

