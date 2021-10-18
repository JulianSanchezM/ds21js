/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * Queue implementation
 *
 */


/* para instaciar la clase stack */  let queue = new Queue();


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
