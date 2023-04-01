function solution(n) {
  const MOD = 1234567;
  const dp = [1, 2];

  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
  }

  return dp[n - 1];
}