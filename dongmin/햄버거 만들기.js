function solution(ingredient) {
  let count = 0;
  const arr = [];

  // 재료 배열에서 하나씩 재료를 꺼내 arr 배열에 담음
  for (let i = 0; i < ingredient.length; i += 1) {
    arr.push(ingredient[i]);
    // 해당 재료가 1이 아니면 담기만 하고 하위 로직은 패스
    if (ingredient[i] !== 1) {
      continue;
    }
    // 만약 해당 재료가 1이고 arr의 마지막 4개 원소가 각각 1,2,3,1 이면
    // 카운트롤 올리고 해당 4개 원소 제거
    if (
      arr.length >= 4 &&
      arr[arr.length - 2] === 3 &&
      arr[arr.length - 3] === 2 &&
      arr[arr.length - 4] === 1
    ) {
      arr.splice(-4, 4);
      count += 1;
    }
  }

  return count;
}
