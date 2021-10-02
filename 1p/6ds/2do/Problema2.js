// 2. Map
// a. produce 1e5 random names, ie name35927
// b. add each random name into a Map
// c. measure the time it took
// d. calculate the average of 7 runs


const MapNombres = new Map();
let inicio=new Date();

for(y=0; y<7; y++){

    setTimeout(function(){

        iniciaralg(inicio);      
    },0);

    for(x=0; x<100000; x++){
        MapNombres.set(x,"Name"+(Math.floor(Math.random()*100000)));
   
    }   
}
function iniciaralg(inicializacion){

    let fin = new Date();
    
    let dif = fin-inicializacion;
}

console.log(MapNombres);

console.log("Tiempo promedio: "+ (dif/7) + " ms");