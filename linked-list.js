class Node {
  constructor(value) {
    this.value = value || null;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    let headNode = value ? new Node(value) : null;
    this.head = headNode;
  }

  isEmpty() {
    if (!this.head) return true;
  }

  append(value) {
    // create a node with the passed value
    let newNode = new Node(value);

    //if the list is empty, set the new node as head node
    if (this.isEmpty()) {
      this.head = newNode;
      return;
    }

    //otherwise traverse to the end of the list and append the new node
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  prepend(value) {
    let newHeadNode = new Node(value);
    newHeadNode.next = this.head;
    this.head = newHeadNode;
  }

  get size() {
    if (this.isEmpty()) return 0; //if the head node does not have any value return 0

    let size = 0; //initializing
    let currentNode = this.head;

    while (currentNode) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }

  //get head "no need to build as list.head itself returns the head node"

  get tail() {
    if (this.isEmpty()) {
      console.log("The list is empty");
      return;
    }

    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  at(index) {
    if (this.isEmpty()) {
      console.log("The list is empty");
      return;
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("The list is empty. Nothing to pop.");
      return;
    }

    // If there's only one node in the list
    if (!this.head.next) {
      const removedNode = this.head;
      this.head = null;
      console.log(`Removed node with value: ${removedNode.value}`);
      return removedNode; // Optionally return the removed node
    }

    // Traverse to the second-to-last node
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.next != null) {
      currentNode = currentNode.next;
    }

    // Remove the last node
    const removedNode = currentNode.next;
    currentNode.next = null;
    console.log(`Removed node with value: ${removedNode.value}`);
    return removedNode; // Optionally return the removed node
  }

  find(value) {
    if (this.isEmpty()) return null;

    let currentNode = this.head;
    let index = 0;
    while (true) {
      if (currentNode.value === value) return index;
      if (currentNode.next === null) return null;
      currentNode = currentNode.next;
      index++;
    }
  }

  contains(value) {
    if (this.isEmpty()) return false;

    let currentNode = this.head;
    while (true) {
      if (currentNode.value === value) return true;
      if (currentNode.next === null) return false;
      currentNode = currentNode.next;
    }
  }

  toString() {
    if (this.isEmpty()) return "";

    let stringifiedList = "";
    let currentNode = this.head;
    do {
      stringifiedList += `( ${currentNode.value} ) => `;
      currentNode = currentNode.next;
    } while (currentNode);
    stringifiedList += " (null) ";

    return stringifiedList;
  }

  insertAt(value, index) {
    let listSize = this.size;
    if (index < 0 || index >= listSize) {
      console.log(`There is no index ${index} in the list.`);
      return;
    }

    if (index == 0) {
      this.prepend(value);
      return;
    }

    let currentNode = this.head;
    let newNode = new Node(value);

    // Traverse to the (index - 1)th node
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    // Insert the new node
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
}


// const list = new LinkedList();

// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");

// list.insertAt("bhalu", list.size -1);

// console.log(list.toString());
