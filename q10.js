const isPrime = (num) => {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
    return num > 1;
  }
};

for (let i = 0; i <= 30; i++) {
  if (isPrime(i)) {
    console.log(i, "is prime number", isPrime(i));
  } else if (!isPrime(i)) {
    if (i < 3) {
      console.log(i, "is prime number", true);
    } else {
      console.log(i, "is not prime number", isPrime(i));
    }
  }
}
