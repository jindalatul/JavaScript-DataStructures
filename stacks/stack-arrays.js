var stack = new Array();

function pushItem(stack,item)
{
	var size = stack.length;

	stack[size]=item;
	
	return stack;
}

function popItem(stack)
{
	var size = stack.length;
		
	if(size<=0) 
		return false;
	
	size--;
	
	stack.splice(size, 1);
	return stack;
}

function getSize(stack)
{
	var size = stack.length;
	if(size>0)	
		return size;
	else 
		return false;
}
console.log(getSize(stack));

console.log(popItem(stack));

console.log(pushItem(stack,"Atul"));
console.log(pushItem(stack,"Ashu"));
console.log(pushItem(stack,"Bhaskar"));
console.log(pushItem(stack,"Amit"));

console.log(popItem(stack));
console.log(getSize(stack));

console.log(popItem(stack));
console.log(getSize(stack));

console.log(popItem(stack));
console.log(getSize(stack));
