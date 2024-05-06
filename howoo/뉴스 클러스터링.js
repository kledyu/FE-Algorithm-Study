// 배열의 요소의 개수를 카운팅하는 함수
// array가 [1,2,2,3,3,3] 이라면 {1 => 1, 2 => 2, 3 => 3} 리턴
function countElements(array) {
  const counterMap = new Map();
  array.forEach((element) => {
    counterMap.set(element, (counterMap.get(element) || 0) + 1);
  });
  return counterMap;
}

// 교집합을 구하는 함수
// arr1이 [1,2,2,3,3,3], arr2가 [1,1,1,2,2,3]이라면 [1,2,2,3] 리턴
function intersection(arr1, arr2) {
  const map1 = countElements(arr1);
  const map2 = countElements(arr2);

  // 두 집합의 공동 요소들을 배열에 담음 ==> [1,2,3]
  const commonElements = new Set([...arr1, ...arr2]);

  const intersection = [];
  // 공동요소들을 반복하면서 map1과 map2에서 있는지를 확인하고 있다면 둘 중 작은 수의 횟수만큼 intersection배열에 push
  commonElements.forEach((element) => {
    const n = Math.min(map1.get(element) ?? 0, map2.get(element) ?? 0);
    for (let i = 0; i < n; i++) {
      intersection.push(element);
    }
  });
  return intersection;
}

// 교집합을 구하는 함수
// arr1이 [1,2,2,3,3,3], arr2가 [1,1,1,2,2,3]이라면 [1,1,1,2,2,3,3,3] 리턴
function union(arr1, arr2) {
  const map1 = countElements(arr1);
  const map2 = countElements(arr2);

  const commonElements = new Set([...arr1, ...arr2]);

  const union = [];
  // 공동요소들을 반복하면서 map1과 map2에서 있는지를 확인하고 있다면 둘 중 큰 수의 횟수만큼 union배열에 push
  commonElements.forEach((element) => {
    const n = Math.max(map1.get(element) ?? 0, map2.get(element) ?? 0);
    for (let i = 0; i < n; i++) {
      union.push(element);
    }
  });
  return union;
}

// 문자길이가 2인 배열을 생성하는 함수
// 특수문자와 숫자의 경우 요소로 담지 않음
function make2LengthedStrArray(string) {
  // 숫자와 특수문자, _ 정규표현식 (_때문에 8번 통과 계속 못하다가 질문에서 찾았어요)
  const REGEX = /[\W\d_]/;
  const arr = [];
  for (let i = 0; i < string.length - 1; i++) {
    const element = string.slice(i, i + 2);
    if (!REGEX.test(element)) {
      arr.push(string.slice(i, i + 2));
    }
  }
  return arr;
}

function solution(str1, str2) {
  const MULTIPLE = 65536;

  // 소문자로
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // 두글자씩
  const str1Arr = make2LengthedStrArray(str1);
  const str2Arr = make2LengthedStrArray(str2);

  // 공집합인 경우  early return
  if (str1Arr.length === 0 && str2Arr.length === 0) {
    return 1 * MULTIPLE;
  }

  // 교집합
  const intersectionArr = intersection(str1Arr, str2Arr);
  // 합집합
  const unionArr = union(str1Arr, str2Arr);

  // 유사도
  const similarity = intersectionArr.length / unionArr.length;

  // 형식 변경
  const answer = parseInt(similarity * MULTIPLE);

  return answer;
}

console.log(solution('E=Maaa*C^aaa2', 'e=m*c^aa2')); //
