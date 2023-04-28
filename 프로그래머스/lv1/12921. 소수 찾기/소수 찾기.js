function solution(n) {
  let cnt = 1
  for (let i = 3; i <= n; i += 2) {
    if (isPrime(i)) cnt++
  }
  return cnt;
}

function isPrime(num) {
  const sqrt = Math.floor(Math.sqrt(num));
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}