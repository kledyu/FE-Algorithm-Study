function solution(n) {
  let target = n + 1
    
  while (true) {
    // 이진 변환
    const binaryN = [...n.toString(2)].filter(v => v === '1')
    const binaryTarget = [...target.toString(2)].filter(v => v === '1')

    // 1의 개수가 같다면 반복문 종료 후 target 리턴
    if (binaryN.length === binaryTarget.length) return target;
      
    target += 1;
  }
}
