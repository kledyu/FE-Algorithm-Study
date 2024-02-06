// 문자열 풀이
function solution(food) {
  let answer = '';

  for (let i = 1; i < food.length; i++) {
    answer += String(i).repeat(parseInt(food[i] / 2))  
  }

  let reverse = [...answer].reverse().join('')

  return answer + "0" + reverse;
}

// 배열 풀이
function solution(food) {
    let answer = [];
    
    food.map((el, i) => {
        if (el > 1) {
            answer.push(String(i).repeat(parseInt(el / 2)));
        }
    });
    
    let reverse = [...answer].reverse().join('')

    return answer.join("") + "0" + reverse
}
