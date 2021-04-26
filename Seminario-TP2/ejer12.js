var numbers = [ 1, 3, 4, 6, 23, 56, 56, 67, 3, 567, 98, 45, 480, 324, 546, 56 ];
var sum = (x, y) => x + y ; 
function reduce(array, binaryOperation, initialValue){
    let total = 0; 
if(array.length> initialValue){ 
        for (initialValue; initialValue<array.length; initialValue+2){
            total += binaryOperation(array[initialValue],array[initialValue++]); 
    }
    return total;
}   
console.log(reduce(numbers, sum, 0));
}
//console - tira undefiend
// var sum = (x, y) => x + y ;
// var numbers = [ 1, 3, 4, 6, 23, 56, 56, 67, 3, 567, 98, 45, 480, 324, 546, 56 ]; 
// console.log(sum(numbers[1],numbers[2]));