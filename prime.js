function isPrime(n) {
  if (n == 2 || n == 3) {
    return true;
  }
  if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }
  for (let i = 5; i < n; i += 6) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
function primeNumbers() {
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
primeNumbers();
