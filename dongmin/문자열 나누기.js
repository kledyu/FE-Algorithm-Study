function solution(s) {
    let answer = 0;
    let count = 0;
    let x = '';
    for (let i = 0; i < s.length; i++) {
      if (!x) {
        x = s[i];
      }
      if (x === s[i]) {
        count++;
      } else {
        count--;
      }
      if (!count || (i === s.length - 1 && x)) {
        answer++;
        x = '';
      }
    }
    return answer;
  }
