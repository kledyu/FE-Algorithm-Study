// solution(6, [1, 3, 2, 5, 4, 5, 2, 3])
function solution(k, tangerine) {
  const hash = []; // [empty, 1, 2, 2, 1, 2]
  for (const element of tangerine) {
    if (hash[element]) {
      hash[element]++;
    } else {
      hash[element] = 1;
    }
  }

  // empty를 없에고 내림차순으로 정렬
  // [2, 2, 2, 1, 1]
  const sortedHash = hash.filter((el) => el).sort((a, b) => b - a);

  // sortedHash의 요소를 하나씩 더해가면서 만약 합이 k보다 많거나 같아지는 순간의 i + 1 값을 return함
  let sum = 0;
  for (let i = 0; i < sortedHash.length; i++) {
    sum += sortedHash[i];
    if (sum >= k) {
      return i + 1;
    }
  }
}
