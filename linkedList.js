class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      prev: null,
      next: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      prev: null,
      next: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(array);
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      console.log('yes');
      return this.append(value);
    }

    const newNode = {
      value: value,
      prev: null,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    //Creando una auxiliar para recorrerla
    let currentNode = this.head;
    //Identificando la cola de la nueva lista
    //El head se convierte en el tail y apunta a nulo
    let tail = {
      value: currentNode.value,
      next: null,
    };

    for (let i = 0; i < this.length - 1; i++) {
      //Identificar el padre del nodo anterior
      currentNode = currentNode.next;
      //Crear el nuevo nodo
      let node = {
        value: currentNode.value,
        next: tail,
      };
      //Node se convierte en el nuevo tail
      tail = node;
    }

    return console.log(JSON.stringify(tail));
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.reverse();
//   myLinkedList.insert(20, 88);
//   myLinkedList.remove(2);
