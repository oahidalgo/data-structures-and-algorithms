class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    //Validate input
    //Create new node
    const newNode = new Node(value);
    //Check if stack is empty
    if (!this.top) {
      //If stack is empty
      //Make the new node both the top and bottom
      this.top = newNode;
      this.bottom = newNode;
    } else {
      //If stack is not empty
      //Hold the current top
      const prevTop = this.top;
      //Remove reference
      this.top = null;
      //Set the new node as the top
      this.top = newNode;
      //Set the next of the new node to the old top
      this.top.next = prevTop;
    }
    //Increment the length
    this.length++;
    return;
  }

  pop() {
    //Validate if stack is not empty
    if (this.top) {
      //Get the new Top
      const newTop = this.top.next;
      //Remove the previous top
      this.top = null;
      //Etablish the new top
      this.top = newTop;
      //If stack its empty, clear the bottom
      if (!this.top) this.bottom = null;
    }
  }

  print() {
    console.log('TOP');
    console.log(this.top);
    console.log('BOTTOM');
    console.log(this.bottom);
    console.log(this.length);
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push('STACK');
myStack.push('IS');
myStack.push('THIS');
myStack.print();
myStack.pop();
myStack.print();
myStack.pop();
myStack.print();
myStack.push('Jeff');
myStack.print();
myStack.pop();
myStack.pop();
myStack.print();
myStack.push('NEW');
myStack.print();
myStack.push('STACK');
myStack.print();
