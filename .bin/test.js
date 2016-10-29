l1 = {"val":2,"next":{"val":4,"next":{"val":3,"next":null}}}
l2 = {"val":5,"next":{"val":6,"next":{"val":4,"next":null}}}

var addTwoNumbers = function(l1, l2) {
    var re = {}
    var temp = {};
    var depLength = 0;
    while(l1.next){
    	// console.log(re)
       	// console.log('var data = re' + '.next'.repeat(depLength) );
    	eval('var data = re' + '.next'.repeat(depLength) );
        data = {
        	val:l1.val + l2.val,
        	next:{}
        }

        if(l1.next){
        	l1 = l1.next;
        	l2 = l2.next;
        }else{
        	data.next = null;
        }
        depLength++;
        console.log('data:',data);
        console.log('re:',re)
    }
    return re;
};
console.log(addTwoNumbers(l1,l2));