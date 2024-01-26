function solution(nums) {
  var answer = 0;
  const choice = nums.length / 2;
  const set = [...new Set(nums)];
  if (choice >= set.length) {
    return set.length;
  }
  return choice;
}
 
