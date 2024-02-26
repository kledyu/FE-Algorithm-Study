function solution(n, lost, reserve) {
  const students = new Array(n).fill(1);
  // students = [1, 1, 1, 1, 1]

  lost.forEach((number) => students[number - 1]--);
  // students = [1, 0, 1, 0, 1]

  reserve.forEach((number) => students[number - 1]++);
  // students = [2, 0, 2, 0, 2]

  for (let i = 0; i <= students.length; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }

  return students.filter((num) => num >= 1).length;
}
