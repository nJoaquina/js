// Defina las funciones max, min, avg, sum de manera que reciban un arreglo de números como parámetro.
function max(values) { //ANDA
    let result;
    if (values.length == 0){
        result = 'Arreglo vacio'
    }else {
    result=  Math.max.apply(null, values);
    }
    return result; 
}

function min(values) { //ANDA
    let result;
    if (!values.length){
        result = 'Arreglo vacio'
    }else {
    result=  Math.min.apply(null, values);
    }

 // retorna el valor promedio
function avg(values) {
    let result = 0 ;
    if(!values.length ){
        result = 'Arreglo vacio'
    }else{
    //fuente https://www.jstips.co/es_es/javascript/array-average-and-median/
        let suma = values.reduce((previous, current) => current += previous);
        result = suma / values.length; 
}
    return result;
} //con el ejemplo de la catedra var prices = [1.2, 2, 22, -33, 12, 0.0, "13", Math.PI] me da NaN eso esta bien no? 

// retorna la sumatoria de los valores 
function sum(values) { //ANDA
    let result;
    if(values.length == 0){
        result ="arreglo vacio"
    }else{
        result= values.reduce((previous, current) => current += previous); }
return result; 
}
}