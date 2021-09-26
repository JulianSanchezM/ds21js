/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * insertAt(p,v)
 *
 * inserts a value v, at position p, in the array
 * @arg {number} p - position
 * @arg {number} v - value
 *
 * @example
 * insertAt(3,3)
 * Verify operation result by outputing the array before and after*/

let numeros = [1,2,3,4,5,6,7,8,9]

//p= prompt("Ingresa la posicion a ingresar el valor ")
//v=prompt("Ingresa el valor ")

function ingresarDatos(p,v){
numeros.splice(p,1,v)
};

console.log("Array antes: " + numeros);
ingresarDatos(0,12)
console.log("Array despues: " +numeros);


