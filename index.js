function longestPalindromeSubseq(s) {
  const n = s.length;
  const dp = Array.from(Array(n), () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1;
      if (s[i] === s[j]) {
        dp[i][j] = 2 + dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][n - 1];
}
