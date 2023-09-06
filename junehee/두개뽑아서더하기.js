// 이중 for문을 통한 접근
function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j]
      if (!answer.includes(sum)) {
        answer.push(sum)
      }
    }
  }
  
  return answer.sort((a, b) => a - b);
}

// ES6 Set 문법을 통한 접근 
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const anwer = [...new Set(temp)];
  return answer.sort((a, b) => a - b);
}
