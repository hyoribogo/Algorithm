function solution(numbers) {
  const arr = numbers.split(''); // 문자열을 배열로 변환
  const primes = new Set(); // 소수를 저장할 Set 객체

  // 순열 생성 함수
  const generatePermutations = (source, visited, current) => {
    if (current.length > 0) {
      const num = parseInt(current.join(''));
      if (isPrime(num)) {
        primes.add(num);
      }
    }

    for (let i = 0; i < source.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        current.push(source[i]);
        generatePermutations(source, visited, current);
        current.pop();
        visited[i] = false;
      }
    }
  };

  // 소수 판별 함수
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // 순열 생성 시작
  generatePermutations(arr, Array(arr.length).fill(false), []);

  return primes.size;
}

// 예시 입력
console.log(solution("17")); // 3
console.log(solution("011")); // 2
