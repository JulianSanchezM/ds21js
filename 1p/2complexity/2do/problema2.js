//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
//
// COMPLEXITY


//2. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]

 n =prompt("Ingresa el valor maximo para generar los numeros aleatorios");
num=[];
const generaraleatorio = (min,n)=>{

    return Math.floor(Math.random()*(n-min))+min
    
    };
    
    for(let x =0 ;x < n;x++){
    
    num.push(generaraleatorio(1,n))
    
    }
    console.log(num);