function solution(s) {
  const found = s.match(/[A-Z]/gi)

  if (found === null && s.length === 4) {
    return true;
  } else if (found === null && s.length === 6) {
    return true
  } else return false
}