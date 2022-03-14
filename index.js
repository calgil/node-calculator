let rs = require('readline-sync');


var input;
var num1;
var num2;
var result;
var operation = false;

var equation;

// Going for extra credit

function doTheMath (numb1, operator, numb2){
    if (operator === '+'){
        return numb1 + numb2
    } else if (operator === '-'){
       return numb1 - numb2
    } else if (operator === '*'){
       return numb1 * numb2
    } else if (operator === '/') {
       return numb1 / numb2
    } 
}

while (!operation) {
    equation = rs.question('Please input equation ').split("")
    if (equation[1] === '+'
    || equation[1] === '-'
    || equation[1] === '*'
    || equation[1] === '/'
    ){
        operation = true;
    } else {
        console.log('That is not a valid operation');
    }
}

result = doTheMath(equation[0], equation[1], equation[2])
console.log(result);





// This all works
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
//  } else if (input==='-'){
//      return firstNum - secondNum
//  } else if(input==='*'){
//      return firstNum * secondNum
//  }else if(input==='/'){
//      return firstNum / secondNum
//  }
// }
 
//  result = evaluate(num1,num2)
//  console.log(result)

