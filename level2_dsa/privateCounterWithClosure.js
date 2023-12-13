/* How would you use a closure to create a private counter ? */

function privateCounterWithClosure () {
    let count = 2;
    return {
        add: function(increment) { count += increment },
        get: function() { return `The value of count is ${count}` }
    }
}

let modifyCount = privateCounterWithClosure()
modifyCount.add(3);
console.log(modifyCount.get());
