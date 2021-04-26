let a = 25;
//imprime 26, primero aumenta el valor de a y despues imprime
console.log(++a);

let a = 25;
//imprime 25,imprime despues suma 
console.log(a++);
// La diferencia es que mientras que con el == antes de hacer la comparación se convierten ambos datos a un tipo común. Con === ninguno de estos valores se convierte de manera implícita antes de ser comparado
console.log(a == '27'); //true
console.log(a === '27'); //false

