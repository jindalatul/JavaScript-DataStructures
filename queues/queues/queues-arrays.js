
var queue = function(){

	this.count = 0;	
	this.storage = [];

	this.enqueue = function(item){
		// insert at end of queue
			this.storage[this.count] = item;
			this.count++;
	}
	
	this.dequeue = function(){
		// delete from begining of queue
		if(this.count===0)
			return false;
		else
		{
			this.storage.shift();
			this.count--;
		}
	}
	
	this.size = function(){
		return this.count;
	}
};

var myQueue = new queue();

myQueue.enqueue("Atul");
myQueue.enqueue("Ashu");
myQueue.enqueue("Bhaskar");
myQueue.enqueue("Amit");

console.log(myQueue);

myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue);
console.log(myQueue.size());

