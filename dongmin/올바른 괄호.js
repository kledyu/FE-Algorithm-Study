function solution(s) {
  let count = 0;


  for (i = 0; i < s.length; i += 1) {
  // 여는 괄호를 만나면 count+1, 닫는 괄호를 만나면 count-1
    s.charAt(i) === '(' ? (count += 1) : (count -= 1);
    
  // 만약 카운트가 음수거나 문자열 순회가 끝났을 때 0이 아니면 false 반환  
    if (count < 0 || (i === s.length - 1 && count > 0)) {
      return false;
    }
  }
  return true;
}
