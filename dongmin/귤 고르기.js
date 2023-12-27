function solution(k, tangerine) {
  const map = new Map();
  let index = 0;

  // 귤의 종류별로 map에 담기
  tangerine.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });

  // 내림차순 정렬
  const arr = Array.from(map.values()).sort((a, b) => b - a);

  // k가 0이하가 될 때 까지 index를 증가시켜 arr[index] 를 k에서 빼기
  while (k > 0) {
    const max = arr[index];
    k -= max;
    index += 1;
  }

  return index;
}
