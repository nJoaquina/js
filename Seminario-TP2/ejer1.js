// Dadas las siguientes definiciones de variables, imprima en la consola el resultado que arroja el operador
// typeof para cada una.
let a = 1;
console.log(typeof a); 
//number
let b = true;
console.log(typeof b);
//boolean
let c = "Hola";
console.log(typeof c);
//string
let d = null;
console.log(typeof d);
//object
let e;
console.log(typeof e);
//undefined
let f = 2n ** 60n;
console.log(typeof f);
//bigint
// BigInt es un tipo numérico especial que provee soporte a enteros de tamaño arbitrario. Un bigint se crea agregando n al final del literal entero o llamando a la función BigInt que crea bigints desde cadenas, números, etc
let g = new Date();
console.log(typeof g);
//object
let h = [1,2,3,4];
console.log(typeof h);
//object
let i = 'Hola';
console.log(typeof i);
//string
let j = { x: 2.0, y: -3.6 };
console.log(typeof j);
//object
let k = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
console.log(typeof k);
//object 

