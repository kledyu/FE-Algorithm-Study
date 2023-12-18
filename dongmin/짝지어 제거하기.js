function solution(s) {
  const arr = [];
  for (let i = 0; i < s.length; i += 1) {
    if (arr.at(-1) === s[i]) {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  return arr.length ? 0 : 1;
}
