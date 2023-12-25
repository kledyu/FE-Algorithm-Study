function solution(arr) {
  const biggest = Math.max(...arr);
  let answer = biggest;
  let isFind = false;
  
  while(!isFind) {
    answer += biggest;

    // 배열 내 모든 요소가 공배수 요건을 충족하면 true 반환, 하나라도 충족하지 않으면 false
    isFind = arr.every(value => answer % value === 0)
  }
  
  return answer
}
