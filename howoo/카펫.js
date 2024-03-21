function solution(brown, yellow) {
  for (let i = 3; i < brown / 2; i++) {
    // 세로길이를 3부터 1씩 증가
    let colLength = i;

    // (세로길이 + 가로길이) * 2 - 4 = 갈색개수
    let rowLength = (brown + 4) / 2 - colLength;

    // 노란개수 = (가로길이 - 2) * (세로길이 -2) 가 실제 노란개수랑 일치하는 순간 가로세로길이 retrun
    if ((colLength - 2) * (rowLength - 2) === yellow) {
      return [rowLength, colLength];
    }
  }
}
