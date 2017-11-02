/*
References
https://www.youtube.com/watch?v=MozZbtPyqt8
https://codepen.io/beaucarnes/pen/ybOvBq?editors=0011
*/
/*
Pending tasks
- Insert at / remove at perticular index needs to be implemented
*/

var Node = function(data){
	this.data = data;
	this.next = null;
}

var LinkedList = function(){
	this._length = 0;
	this._head = null;
}	

/*
1. create new node; 
2. if list is empty i.e. head not set then point newly created node to head
3. if list is not empty i.e. list already has nodes then 
 - start by initalizing currentNode = head;
 - traverse till end of node.
 - assign new node at end by assigning currentNode.next = node;
*/

LinkedList.prototype.append = function(item){
		
		var node = new Node(item);
		
		if(!this._head)
		{
			this._head=node;
			this._length++;
		}
		else
		{
			var currentNode = this._head;
			while(currentNode.next)
			{
				currentNode = currentNode.next;
			}
			currentNode.next = node;
			this._length++;
		}
}	
/*
1. create new node; 
2. point next of new node to head
3.  head of linkedlist point to new node
*/
LinkedList.prototype.prepend =  function(item){
    
	var node = new Node(item);
	node.next = this._head;
	this._head = node;
	this._length++;
}

/* 
	Check if value is in the link List
*/
LinkedList.prototype.contains = function(item){
	var previous = null;
	var current = this._head;
	while(current.next)
	{
		if(current.data==item)
			return true;
		
		current = current.next;
	}
	
	return false;
}

LinkedList.prototype.remove = function(item){
	
	// check if length of linked list is not zero;
	
	if(this._length<=0)
		return false;
	
	// check if the linklist contains the element;
	if(!this.contains(item)) 
		return;
	
	// check if element to be removed from linked list is first element i.e. head element
	if(this._head.data === item)
	{
		this._head = this._head.next;
		this._length--;
		return;
	}
	// if element is to be removed from middle or anywhere

	var previous = null;
	var current = this._head;
	
	while(current.data != item)
	{
		previous = current; // this variable holds address of previous node.
		current = current.next; // this variable stores next node address to iterate.
	}
	previous.next = current.next;
	this._length--;
}

var LL= new LinkedList();

LL.append(10);
LL.append(20);

LL.append(30);

LL.prepend(8);
LL.prepend(5);


LL.append(40);
LL.append(50);

LL.remove(5);
LL.remove(8);

LL.remove(30);

console.log(LL.contains(310));

console.log(LL);
