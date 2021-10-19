//prime

//prime
function showPrimes(from, to) {
  for (let i = from; i <= to; i++) {
    if (isPrime(i)) {
      console.log(`${i} is PRIME`);
    } else {
      console.log(`${i} is not PRIME`);
    }
  }
}

function isPrime(number) {
  let isPrime = true;
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

showPrimes(1, 100);
