function solution(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 1 + i; j < array.length; j++) {
      arr.push(array[i] + array[j]);
    }
  }
  return [...new Set(arr.sort((a, b) => a - b))];
}
