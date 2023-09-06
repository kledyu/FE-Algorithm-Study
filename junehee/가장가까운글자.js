function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
      let before = s.slice(0, i).split('').reverse()
      if (before.includes(s[i])) {
          answer.push(before.indexOf(s[i]) + 1)
      } else {
          answer.push(-1)
      }
  }

  return answer;
}
