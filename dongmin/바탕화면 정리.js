  function solution(wallpaper) {
    const xArr = [];
    const yArr = [];

    // 파일이 있는 칸의 x, y 좌표값들을 각 배열에 수집
    for (let x = 0; x < wallpaper.length; x += 1) {
      for (let y = 0; y < wallpaper[x].length; y += 1) {
        if (wallpaper[x][y] === '#') {
          xArr.push(x);
          yArr.push(y);
        }
      }
    }

    // 시작은 x, y 좌표들 중 최솟값을, 끝점은 x, y 좌표들 중 최댓값을 쓰되
    // 끝점이 모든 파일을 감싸야 하므로 각 좌표에 +1
    return [
      Math.min(...xArr),
      Math.min(...yArr),
      Math.max(...xArr) + 1,
      Math.max(...yArr) + 1,
    ];
  }
