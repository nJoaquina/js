// Implemente la función de igualdad entre arreglos y realice las pruebas que se indican
function arrayEquals(a, b) { //ANDA
console.log( JSON.stringify(a) === JSON.stringify(b));
}
//fuente https://www.delftstack.com/es/howto/javascript/compare-two-arrays-javascript/#:~:text=Podemos%20hacerlo%20usando%20JSON.,si%20son%20iguales%20o%20no.
//¿Utilizó == o === para comparar los elementos? Utilizo === xq  con el == antes de hacer la comparación se convierten ambos datos a un tipo común. Con === ninguno de estos valores se convierte de manera implícita antes de ser comparado

var a = [1,2,3,4];
var b = [1,2,3,4];
var c = [1,2,3,4,5];
var d = "Hola";
var e = null;
console.log(arrayEquals(a, a));
console.log(arrayEquals(a, b));
console.log(arrayEquals(b, c));
console.log(arrayEquals(e, c));
console.log(arrayEquals(c, d));
console.log(arrayEquals(e, e));

