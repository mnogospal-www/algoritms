class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) this.head = newNode;
    else {
      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = newNode;
    }

    this.size++;
  }

  remove(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.nextNode;
      this.size--;

      return;
    }

    let currentNode = this.head;
    let previousNode = currentNode;

    while (currentNode) {
      if (currentNode.data === data) {
        previousNode.nextNode = currentNode.nextNode;
        this.size--;

        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
  }

  isExist(data) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === data) return true;
      currentNode = currentNode.newNode;
    }

    return false;
  }

  print() {
    let currentNode = this.head;
    const nodeValues = [];

    while (currentNode) {
      nodeValues.push(currentNode.data);
      currentNode = currentNode.nextNode;
    }

    console.log(`size: ${this.size}`, nodeValues);
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.print();

linkedList.remove(1);
linkedList.remove(2);

linkedList.print();

console.log('Is exist value: 1?', linkedList.isExist(1));
console.log('Is exist value: 2?', linkedList.isExist(2));
console.log('Is exist value: 3?', linkedList.isExist(3));
