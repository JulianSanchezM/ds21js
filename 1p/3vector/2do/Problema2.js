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
 * Verify operation result by outputing the array before and after
 *
 * PROBLEM 2
 * removeAt(p)
 *
 * removes value at position p
 * @arg {number} p - position
 *
 * @example
 * removeAt(3)
 *
 */

 let numeros = [1,2,3,4,5,6,7,8,9]

 function rm(p){
 numeros.splice(p,1)
 };
 
 console.log("Array antes: " + numeros);
 rm(0)
 console.log("Array despues: " +numeros);

