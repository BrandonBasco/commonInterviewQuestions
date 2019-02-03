 class Node {
            constructor(input){
            this.value = input;
            this.next = null;
            }
        }

        class DoubleNode {
            constructor(input){
            this.value = input;
            this.next = null,
            this.prev = null
            }
        }

        class DoubleLinkedList {
            constructor(input)
            {
                this.head = {
                    value: input,
                    next: null,
                    previous: null
                }
                this.tail = this.head;
                this.length = 1;
            }
            append(input)
            {
                const newNode = new DoubleNode(input);
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
                this.length++;
                return this;
            }

            prepend(input) {
                const newNode = new DoubleNode(input);
                newNode.next = this.head;
                this.head.previous = newNode;
                this.head = newNode;
                this.length++;
                return this;
            }

            insert(index, input) {
     
                if (index >= this.length)
                    return this.append(input);

                const newNode = new DoubleNode(input);
                const leader = this.traverseToIndex(index - 1);
                const follower = leader.next;
                leader.next = newNode;
                newNode.prev = leader;
                newNode.next = follower;
                follower.prev = newNode;
                this.length++;
                return this
            }

            remove(index) {
            
                const leader = this.traverseToIndex(index - 1);
                const follower =  this.traverseToIndex(index + 1);
                const unwantedNode = leader.next;
                leader.next = follower;
                follower.prev = leader;
                this.length--;
                return this;
            }

            traverseToIndex(index) {
                let counter = 0;
                let currentNode = this.head;
                while (counter !== index) {
                    currentNode = currentNode.next;
                    counter++;
                }
                return currentNode;
            }

            reverse() {
        
                let currentNode = this.head;
                this.tail = currentNode;

                while (currentNode !== null) {
                let prev = currentNode.prev;
                currentNode.prev = currentNode.next;
                currentNode.next = prev;

                    if (currentNode.prev) {
                        currentNode = currentNode.prev;
                    } else {
                        this.head = currentNode;
                        break;
                    }
                }
            }                
                        

            printList() {
                const array = [];
                let currentNode = this.head;
                while (currentNode !== null) {
                    array.push(currentNode.value);
                    currentNode = currentNode.next;
                }
                return array;
            }

        }
        

        class LinkedList {
            constructor(input)
            {
                this.head = {
                    value: input,
                    next: null
                }
                this.tail = this.head;
                this.length = 1;
            }
            

            append(input)
            {
                const newNode = new Node(input);
                this.tail.next = newNode;
                this.tail = newNode;
                this.length++;
                return this;
            }

            prepend(input) {
                const newNode = new Node(input);
                newNode.next = this.head;
                this.head = newNode;
                this.length++;
                return this;
            }

            insert(index, input) {
                if (index >= this.length)
                    return this.append(input);

                const newNode = new Node(input);
                const leader = this.traverseToIndex(index - 1);
                const holdingPointer = leader.next;
                leader.next = newNode;
                newNode.next = holdingPointer;
                this.length++;
                return this
            }

            remove(index) {
                  
                const leader = this.traverseToIndex(index - 1);  
                const unwantedNode = leader.next;
                leader.next = unwantedNode.next;
                this.length--;
                return this;
            }

            traverseToIndex(index) {
            
                let counter = 0;
                let currentNode = this.head;
                while (counter !== index) {
                    currentNode = currentNode.next;
                    counter++;
                    }
                    return currentNode;
                }

            printList() {
                const array = [];
                let currentNode = this.head;
                while (currentNode !== null) {
                    array.push(currentNode.value);
                    currentNode = currentNode.next;
                    }
                    return array;
                }
            
            reverse() {
                if (this.length === 1) {
                    return this;
                }
                let first = this.head;
                this.tail = this.head;
                let second = first.next;
                while (second) {
                    const tempThird = second.next;
                    second.next = first;
                    first = second;
                    second = tempThird;
                }
                this.head.next = null;
                this.head = first;
                return this;
            }
        }

        const myLinkedList = new LinkedList(10);
        
        myLinkedList.append(5);
        myLinkedList.append(16);
        myLinkedList.prepend(1);
        myLinkedList.insert(3,99);
        myLinkedList.remove(3);
        myLinkedList.reverse();

        const myDoublyLinkedList = new DoubleLinkedList(10);
      
        myDoublyLinkedList.append(41);
        myDoublyLinkedList.prepend(42);
        myDoublyLinkedList.insert(1,36);
        myDoublyLinkedList.remove(2);
        myDoublyLinkedList.reverse();

        myLinkedList.printList();
        myDoublyLinkedList.printList();
