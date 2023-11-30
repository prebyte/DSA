/* If you have a function that generate random number between 1 to 5,
   how could you generate random number between 5 to 7 by using that function. */

// 5 (from where we want to start, 2 number after 5)

function randomNom1to5 () {
    return 1 + Math.random() * 4;
}

function randomNum5to7 () {
  return 5 + randomNom1to5()/5 * 2;
}

console.log(randomNum5to7());
