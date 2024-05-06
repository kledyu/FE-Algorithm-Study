// 시간초과
function solution(phoneBook) {
  let answer = true;
  for (let i = 0; i < phoneBook.length; i++) {
    for (let j = 0; j < phoneBook.length; j++) {
      if (
        phoneBook[i] !== phoneBook[j] &&
        phoneBook[j].startsWith(phoneBook[i])
      ) {
        return false;
      }
    }
  }
  return answer;
}

// hashmap 사용
function solution(phonBook) {
  // 해시맵 생성
  const hashMap = new Map();

  // 전화번호를 해시맵에 저장
  phonBook.forEach((element) => {
    hashMap.set(element, true);
  });

  // 각 전화번호에 대해 접두어인 경우가 있는지 확인
  for (let phoneNumber of phonBook) {
    for (let i = 1; i < phoneNumber.length; i++) {
      // phoneNumber.slice(0, i) => 전화번호가 123인 경우 1, 12를 반복
      if (hashMap.has(phoneNumber.slice(0, i))) {
        return false; // 접두어인 경우 false 반환
      }
    }
  }

  return true; // 접두어가 없는 경우 true 반환
}
