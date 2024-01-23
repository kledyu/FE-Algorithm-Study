function solution(a, b) {
  const dateArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(2016, a - 1, b);
  return dateArr[new Date(date).getDay()];
}
