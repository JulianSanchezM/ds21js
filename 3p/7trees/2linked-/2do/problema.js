/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * 
 * PROBLEM 1
 * inorder(n)
 *
 * traverses a tree in INORDER
 * @arg {tree} n - tree
 *
 * @example
 * inorder(root)
 * 
 * PROBLEM 2
 * posorder(n)
 *
 * traverses a tree in POSORDER
 * @arg {tree} n - tree
 *
 * @example
 * posorder(root)
 * 
 */

 class Node
 {
     constructor(data)
     {
         this.data = data;
         this.left = null;
         this.right = null;
     }
 }

 
class Tree
{
	constructor()
	{
		this.root = null;
	}

    insert(data)
    {

	var newNode = new Node(data);

	if(this.root === null)
		this.root = newNode;
	else
		this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode)
    {

	if(newNode.data < node.data)
	{
		if(node.left === null)
			node.left = newNode;
		else
			this.insertNode(node.left, newNode);
	}
	else
	{
		if(node.right === null)
			node.right = newNode;
		else
			this.insertNode(node.right,newNode);
	}
    }

    remove(data)
    {
	
	    this.root = this.removeNode(this.root, data);
    }


    removeNode(node, key)
    {
		
	    
	    if(node === null)
		return null;

	
	    else if(key < node.data)
	    {
		node.left = this.removeNode(node.left, key);
		return node;
	    }

	    else if(key > node.data)
	    {
		    node.right = this.removeNode(node.right, key);
		    return node;
	    }

	    
	    else
	    {
		    
		    if(node.left === null && node.right === null)
		    {
			node = null;
			return node;
		    }

		    
		    if(node.left === null)
		    {
			node = node.right;
			return node;
		    }
		
		    else if(node.right === null)
		    {
			node = node.left;
			return node;
		    }

		    var aux = this.findMinNode(node.right);
		    node.data = aux.data;

		    node.right = this.removeNode(node.right, aux.data);
		    return node;
	    }

    }

        // busca el el nodo menor en el arbol
        //empieza a buscar desde el nodo dado
        findMinNode(node)
        {
	        // si la izq de un nodo es null debera ser el nodo menor
	        if(node.left === null)
		        return node;
	        else
		        return this.findMinNode(node.left);
        }

        //regresa el root del arbol
        getRootNode()
        {
	        return this.root;
        }

        //nusca un nodo con ciertos datos
        search(node, data)
        {   
            // si esta vacio regresa null
	    if(node === null)
		    return null;

            //si los datos son menores que los del nodo se mueve a la izq
	    else if(data < node.data)
		    return this.search(node.left, data);

            //si los datos son mayor que los del nodo se mueve a la der
	    else if(data > node.data)
		    return this.search(node.right, data);

            //si es igual al dato del nodo regresa el nodo
	    else
		    return node;
        }


    inorder(node)
    {
	    if(node !== null)
	    {
		this.inorder(node.left);
		console.log(node.data);
		this.inorder(node.right);
	    }
    }

    preorder(node)
    {
	    if(node !== null)
	    {
		console.log(node.data);
		this.preorder(node.left);
		this.preorder(node.right);
	    }
    }

    postorder(node)
    {
	    if(node !== null)
	    {
		this.postorder(node.left);
		this.postorder(node.right);
		console.log(node.data);
	    }
    }

				
}

var t = new tree()
t.insert(15);
t.insert(25);
t.insert(10);
t.insert(7);
t.insert(22);
t.insert(17);
t.insert(13);
t.insert(5);
t.insert(9);
t.insert(27);

var root = t.getRootNode();

console.log("inorder");
t.inorder(root);    

console.log("postorder");
t.postorder(root);

console.log("preorder");
t.preorder(root);
