// ver.1
function solution(a, b) {
  let answer = 0;
    
  let max = Math.max(a, b);
  let min = Math.min(a, b);
    
  for (let i = min; i <= max; i++) {
    answer += i;
  }
    
  return answer;
}

// ver.2
function solution(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
    
  let answer = (a + b) * (max - min + 1)
    
  return answer / 2;
}