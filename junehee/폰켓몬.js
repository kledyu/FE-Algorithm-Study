// new Set을 사용한 중복 제거
function solution(nums) {
  let answer = 0;

  let monster = [...new Set(nums)]

  if (monster.length > nums.length / 2) {
    answer = nums.length / 2
  } else {
    answer = monster.length
  }

  return answer;
}


// 코드 간소화
function solution(nums) {
  let monster = [...new Set(nums)]
  let max = nums.length / 2

  return monster.length > max ? max : monster.length
}
