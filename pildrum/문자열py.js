function solution(s){
  let lowerCase = s.toLowerCase();
  let p = lowerCase.split("p").length;
  let y = lowerCase.split("y").length;
  return p === y ? true : false;
}