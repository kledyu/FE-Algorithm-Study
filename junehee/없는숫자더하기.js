function solution(numbers) {
  const compNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const diff = compNums.filter(i => !numbers.includes(i))

  return diff.reduce((arr, cur) => arr + cur)
}

// 넓은 범위로 가정
function solution(numbers, n = 0, m) {
  let sum = 0;
  
  for (let i = n; i < m; i++) {
      if(!numbers.includes(i)) {
          sum += i
      }
  }

  return sum;
}