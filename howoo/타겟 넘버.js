function dfs(numbers, target, index, currentSum) {
  const length = numbers.length;
  if (index === length) {
    return currentSum === target ? 1 : 0;
  } else {
    return (
      dfs(numbers, target, index + 1, currentSum + numbers[index]) +
      dfs(numbers, target, index + 1, currentSum - numbers[index])
    );
  }
}

function solution(numbers, target) {
  return dfs(numbers, target, 0, 0);
}

