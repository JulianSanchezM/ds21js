//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// may use code from previous exercises
//
// SORTING

//2. selectionsort
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted

// forEach
// + verify is sorted
//
// + print
// - time it took
// - steps it tooks

numrand = prompt("Cuantos numeros random decea generar?")

var pasos=0;

let inicio=new Date();

num=[];//array donde se guardaran los numeros

setTimeout(function(){

iniciaralg(inicio);

},0);//es el contador del timepo

const generaraleatorio = (min,max)=>{

return Math.floor(Math.random()*(max-min))+min

};//funcion para genererar los numeros

for(let x =0 ;x < numrand;x++){

num.push(generaraleatorio(1,numrand))

}//se generan 10000 numeros entre el 1 y el 10000 y se guardan en el array
function swap(i,f){

    t=num[i];
    
    num[i] = num[f];
    
    num[f] = t;
    
    }
    
    function Selection(num){
    
    var length = num.length,
    
    indexMin;
    
    for (var i=0; i<length-1; i++){
    
    indexMin = i;
    
    for (var j=i; j<length; j++){
    
    if(num[indexMin]>num[j]){
    
    indexMin = j;
    
    }
    
    }
    
    if (i !== indexMin){
    
    swap(i, indexMin);
    
    pasos++;}
    
    }
    
    };
    
    console.log("Array sin Ordenamiento: "+ num);
    
    Selection(num);
    
    console.log("Array Ordenado: " + num);
    
    console.log("Los pasos que se realizaron fueron: "+pasos);
    
    function iniciaralg(inicializacion){
    
    let fin = new Date();
    
    let diferencia = fin-inicializacion;
    
    console.log("Tiempo de ejecucion: "+ diferencia + "ms");
    
    }
