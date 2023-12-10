/* How would you create all permutations of a string. */

let cretePermutation = (str) => {
  if (typeof str !== "string") {
     return "Please enter a string";
  }
  else if (str.length < 2) {
      return str;
  }
  let permutationArray = [];

  for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (str.indexOf(char) !== i) continue;
      let remainingChars = str.slice(0, i) + str.slice(i + 1, str.length);
      for (let permutation of cretePermutation(remainingChars)) {
          permutationArray.push(char + permutation)
      }
  }
  return permutationArray;
}

console.log(cretePermutation("aac"));
