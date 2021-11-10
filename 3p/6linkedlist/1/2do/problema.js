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

    AddFirst(data){
        let node=new  Node(data, null)   
        node.next = this.head 
        this.head=node
        if(this.tail==null){
            this.tail=node
        }
        this.size++     
    }

     AddEnd(data){
        let node=new Node(data,null)
        if(this.head==null){
            this.AddFirst(data)
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    } 

    PrintList(){         
        var current=this.head 

        while(current){         
            console.log(current.data)         
            current=current.next         
        }     
    }  
    
    Contains(v){
        var current=this.head 
        var contains=false

        while(current){
            if(current.data==v){
                contains=true
            }                    
            current=current.next         
        } 
        console.log(contains)
    }
     
    SizeList(){
        console.log(this.size)
    }
}

let l = new LinkedList