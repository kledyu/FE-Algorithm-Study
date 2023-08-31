// k = 최상품 사과의 점수
// m = 한 상자에 들어가는 사과의 수
// score = 사과들의 점수

function solution(k, m, score) {
  // 이익이 나지 않을 경우 0 리턴
  if (score.length < m) return 0;
  
  let totalPrice = 0;
  score.sort((a, b) => a - b)

  while (score.length >= m) {
    let box = score.splice(score.length - m, m);
    let price = box[0] * box.length
    totalPrice += price
  }
  
  return totalPrice;
}
