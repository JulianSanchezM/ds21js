class Node {
  constructor (value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class Tree {
  constructor () {
    this.root = null
  }

  
  add (value) {
    // arbol no tiene elementos
    if (this.isEmpty()) {
      this.root = new Node(value)
      return
    }

    var aux = this.root

    while (aux) {
      // vamos hacia la izquierda
      if (value < aux.value) {
        if (aux.left) {
          aux = aux.left
        } else {
          aux.left = new Node(value)
          return
        }
      } else { // vamos hacia la derecha
        if (aux.right) {
          aux = aux.right
        } else {
          aux.right = new Node(value)
          return
        }
      }
    }
  }

   addRecursive (value, node = this.root) {
    if (!node) {
      this.root = new Node(value)
      return
    }

    if (value < node.value) {
      if (node.left) {
        return this.addRecursive(value, node.left)
      }
      node.left = new Node(value)
      return
    } else { // vamos hacia la derecha
      if (node.right) {
        return this.addRecursive(value, node.right)
      }
      node.right = new Node(value)
      return
    }
  }

  inOrder (node = this.root) {
    if (!node) {
      return
    }
    this.inOrder(node.left)
    console.log(node.value)
    this.inOrder(node.right)
  }

  preOrder (node = this.root) {
    if (!node) {
      return
    }
    console.log(node.value)
    this.preOrder(node.left)
    this.preOrder(node.right)
  }
  
  postOrder (node = this.root) {
    if (!node) {
      return
    }
    this.postOrder(node.left)
    this.postOrder(node.right)
    console.log(node.value)
  }
}

var t = new Tree();
var arr = [5,2,3]

for (var i = 0; i < arr.length; i++) {
  t.addRecursive(arr[i])
}
console.log("InOrder")
t.inOrder()
console.log()
console.log("preOrder")
t.preOrder()
console.log()
console.log("postOrder")
t.postOrder()
console.log()