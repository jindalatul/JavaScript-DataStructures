var stack = function(){
	
	this.count = 0;
	this.storage = {};
	
	this.pop = function()
	{
		if(this.count===0)
			return false;
		else
		{
			var item = this.storage[count];
			delete this.storage[count];
			return item;
		}
	}
	
	this.push = function(item)
	{
		this.storage[this.count]=item;
		this.count++;
	}
	
	this.size = function(){
		return this.count;
	}
}

var myStack = new stack();

console.log(myStack);

console.log(myStack.pop());

myStack.push("Atul");

myStack.push("Jindal");

console.log(myStack);

console.log(myStack.size());
