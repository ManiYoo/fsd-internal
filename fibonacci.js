export default function fibonacci(n) {
  let res = [0, 1];
  for (let i = 2; i < n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }
  return res[n - 1];
}
