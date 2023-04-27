function solution(n) {
  let arr = [...String(n)];
  let reverse = [];
  
  for (i=arr.length -1; i >= 0; i--) {
      reverse.push(Number(arr[i]));
  }
  return reverse;
}