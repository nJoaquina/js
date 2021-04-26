// Dada la siguiente función concat que devuelve la concatenación de dos strings
function concat(left, right) {
    return left.concat(right);
}   
// qué imprime la siguiente sentencia?
var names = ["John", "Paul", "George", "Ringo"];
console.log(names.reduce(concat));
//lo que imprime es JohnPaulGeorgeRingo
// ¿Qué sucede si se invoca reduce sobre un arreglo vacío? Nunca se ejecuta no?

