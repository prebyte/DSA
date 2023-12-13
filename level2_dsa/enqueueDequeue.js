/* Implement enqueue and dequeue using only two stacks.
   (Queue is an array in a continuous memory space.
   LIFO structure - Last in First out)*/

let stack1 = [];
let stack2 = [];

function enqueue (ele) {
    stack1.push(ele);
    return stack1;
}
function dequeue () {
    if (stack2.length === 0) {
        if (stack1.length === 0) {
            return "Can not dequeue because queue is empty.";
        }
        while (stack1.length > 0) {
            let p = stack1.pop();
            stack2.push(p);
        }
    }
    return stack2.pop();
}

console.log(enqueue("a"));
console.log(enqueue("b"));
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
