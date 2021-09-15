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
        currentNode.next=null;
        return this
    }
    
    front(){
        if(this.head==null)
        {
            return null;
        }
        else{
            return this.head.value
        }
    }

    contains(value){
        if(this.head==null)
        {
            return false;
        }
        var runner=this.head
        while(runner !=null){
            if(runner.value==value)
            {
                return true;
            }
            runner=runner.next
        }
        return false;
    }

    length(){
        var count =0
        var runner=this.head
        while(runner != null){
            count+=1;
            runner= runner.next
        }
        return count;
    }
    display(){
        var runner= this.head
        while(runner != null){
            console.log(`Current node value is ${runner.value}`)
            runner=runner.next
        }
    }

    
}

//addFront tests
let myList= new SLL()
myList.addFront(1)
myList.addFront(2).addFront(3).addFront(4)
console.log(myList)

//removeFront tests
myList.removeFront()
console.log(myList)
myList.removeFront().removeFront()
console.log(myList)
myList.removeFront()
console.log(myList)


//front tests
let anotherList= new SLL()
console.log(anotherList.front())
anotherList.addFront(24).addFront(12).addFront(54)
console.log(anotherList.front())

//contains tests
console.log(anotherList.contains(54))
console.log(anotherList.contains(5))
console.log(anotherList.contains(12))

//length tests
console.log(myList.length())
console.log(anotherList.length())

//display tests
let someList= new SLL()
someList.addFront(23).addFront(85).addFront(1).addFront(32).addFront(837)
someList.display()