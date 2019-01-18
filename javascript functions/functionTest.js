//isEven --> determines whether the number is even or odd 
// function isEven(num) {
//     if (num % 2 === 0) {
//         return true
//     }
//     return false;
// }

function isEven(num) {
    return num % 2 === 0;
}

//factorial --> returns factorial of numbers
function factorial(num) {
    var sum = 1;
    for(var i=1;i<=num;i++) {
        sum = sum * i;
    }
    return sum;
}

//kebabToSnake --> replaces - with _
function kebabToSnake(word) {
    var newWord = word.replace(/-/g,"_");
    return newWord;
}