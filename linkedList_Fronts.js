class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }

}

class SSL{
    constructor(){
        this.head=null;
    }
    addFront(value){
        //creating the new node
        newNode= new Node(value)
        //creating pointer to current head
        newNode.next= this.head
        //reassigned this newNode as new head
        this.head=newNode;
        return this;
    }




}