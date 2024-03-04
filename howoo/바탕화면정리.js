function solution(wallpaper) {
  const wallpaperMatrix = []; // 2차원 배열을 만들기 위해
  const hashtagIndex = []; // "#"의 좌표를 저장하는 배열

  // 2차원 매트릭스 만들기
  wallpaper.forEach((row) => {
    wallpaperMatrix.push(row.split(''));
  });
  // ['.#...', '..#..', '...#.']) 를 아래와 같이 변환
  // [['.', '#', '.', '.', '.'], ['.', '.', '#', '.', '.'], ['.', '.', '.', '#', '.']]

  for (let i = 0; i < wallpaperMatrix.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaperMatrix[i][j] === '#') {
        // "#"의 좌표를 모두 저장
        hashtagIndex.push([i, j]);
      }
    }
  }
  console.log(hashtagIndex); // [[0, 1], [1, 2], [2, 3]]

  const xIndice = hashtagIndex.map((element) => element[0]); // #의 x좌표배열
  const yIndice = hashtagIndex.map((element) => element[1]); // #의 y좌표배열

  const lux = Math.min(...xIndice);
  const rdx = Math.max(...xIndice) + 1;
  const luy = Math.min(...yIndice);
  const rdy = Math.max(...yIndice) + 1;

  return [lux, luy, rdx, rdy];
}
