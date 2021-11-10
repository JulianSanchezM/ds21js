
//Cola con lista

function iniciar(){
    inc = performance.now();
}

function final(){
    fin =  performance.now();
}

iniciar();

let pasos=0;

class Node {     
    constructor(data,next=null){         
        this.data=data         
        this.next=next     
    } 
} 

class LinkedList{     
    constructor(){         
        this.head=null         
        this.size=0 
        this.tail=null    
    }
}

function Queue() {
    this.dataStore = LinkedList;
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;

}
    
function enqueue(data) {
    let node=new Node(data,null)
        if(this.head==null){
            let node=new  Node(data)   
            node.next = this.head 
            this.head=node
            if(this.tail==null){
                this.tail=node
            }
            this.size++  
        }
        else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
}

function dequeue() {
    var current=this.head
    current=this.head        
        Eliminado=current                         
        current=current.next
        this.head=current            
}

function front() {
    return this.head.data;
}

function back() {
    return this.tail.data;
}

function toString() {
    var current=this.head 

    while(current){         
        console.log(current.data)         
        current=current.next         
    }    
}
    
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else{
        return false;
    }
}


let l = new Queue();

    for(j=0; j<10000; j++){
        l.enqueue(Math.floor(Math.random()*100));   
        pasos++  
        }
final()
console.log("numero de pasos: "+ pasos);
console.log("tiempo tomado: "+((fin-inc))+" ms");


// cola con arrays

function iniciar(){
    inc = performance.now();
}

function final(){
    fin =  performance.now();
}

iniciar();

let pasos=0;


 class Queue {
    constructor() {
        
        this.items = [];       

    }

    enqueue(item){
        return this.items.push(item);
    }
    
    dequeue(){
        return this.items.shift();
    }

    front(){
        return this.items[0];
    }
     
    isEmpty(){
        return this.items.length == 0;
    }

    size(){
        return this.items.length;
    }
    print(){
        console.log(this.items.toString());
    }
 
}

let q = new Queue();

for(j=0; j<10000; j++){
    q.enqueue(Math.floor(Math.random()*100));   
    pasos++  
    }
final()
console.log("numero de pasos: "+ pasos);
console.log("tiempo tomado: "+((fin-inc))+" ms");