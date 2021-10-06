//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// may use code from previous exercises
// 

// 1. DS-obj
// a. produce 1e5 random names, ie name35927
// b. add each random name into our ds-obj
// c. measure the time it took
// d. calculate the average of 7 runs

let obj = {}
let inicio=new Date();


const add    = (key, value) => obj[key] = value
const get    = (key)  => obj[key]
const remove = (key)  => delete obj[key]
const clear  = ()  => obj = {}
for(y=0; y<7; y++){

    setTimeout(function(){

        iniciaralg(inicio);
            
        },0);

    for(x=0; x<100000; x++){
        add(x,"Name"+(Math.floor(Math.random()*100000)));
   
    }   

}
function iniciaralg(inicializacion){

    let fin = new Date();
    
     let dif = fin-inicializacion;
}
console.log(obj);

console.log("Tiempo promedio: "+ (dif)/7 + " ms");