/* Can you write code for this functions:-
   sum (a)(b)(c)...(n)(),
   (this should return the sum of a + b + c ... + n) */

let sumABC = function (a) {
    return function (b) {
        if (b) {
          return sumABC(a + b);
        }
        return a;
    }
}

console.log(sumABC(5)(2)(3)(4)(5)());
console.log(sumABC(22)());

let sumABC2 = a => b => b ? sumABC2(a + b) : a;

console.log(sumABC2(1)(2)(3)(4)());
