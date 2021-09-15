class SLLNode{
    constructor(value){
        this.value=value;
        this.next=null;
    }

}

class SLL {
    constructor(){
        this.head=null;
    }
    addFront(value){
        //creating the new node
        var newNode= new SLLNode(value)
        //creating pointer to current head
        newNode.next= this.head
        //reassigned this newNode as new head
        this.head=newNode;
        return this;
    }

    removeFront()
    {
        if( this.head==null){
            return null;
        }
        var currentNode= this.head
        this.head=currentNode.next
        return this
    }
    
    front(){
        if(this.head==null)
        {
            return null;
        }
        var front = this.head
        return front.value
    }

    
}

var myList= new SLL()
var testList= new SLL()
// console.log(myList)
myList.addFront(1)
myList.addFront(2)
myList.addFront(3)
myList.addFront(4)

// console.log(myList)
// myList.removeFront()
// // console.log(testList.removeFront())
// console.log(myList)
console.log(myList.front())
