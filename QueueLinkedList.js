class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  //Add items to the queue
  enqueue(value) {
    //Validate input
    //Create the node with value
    let newNode = new Node(value);
    //If queue is empty, value will be first and last
    if (!this.last) {
      this.last = newNode;
      this.first = newNode;
    } else {
      //If queue has an item
      newNode.next = this.last;
      this.last = newNode;
    }
    //Increment the length
    this.length++;
  }
  //Remove items
  dequeue() {
    //Return if queue has no items
    if (!this.last || this.length === 0) return null;
    //Get last node
    const lastNode = this.last.value;
    //Asign the new last
    this.last = this.last.next;
    //Decrement the length
    this.length--;
    //If length its 0, then first node should be removed
    if (this.length === 0) this.first = null;
    //Return the removed node
    return lastNode;
  }
  //isEmpty;
  print() {
    console.log('FIRST', this.first);
    console.log('LAST', this.last);
    console.log('LENGTH', this.length);
  }
}

const myQueue = new Queue();
myQueue.enqueue('Jay');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
myQueue.print();
myQueue.dequeue();

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.enqueue('Samir');

myQueue.print();

//Joy
//Matt
//Pavel
//Samir
