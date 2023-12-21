function solution(wallpaper) {
    let x = [];
    let y = [];
    
    wallpaper.forEach((value, index) => {
      // x 좌표 구하기
      value.includes('#') && x.push(index)

      // y 좌표 구하기
      value.includes('#') && y.push(value.indexOf('#'), value.lastIndexOf('#'))
    })
    
    return [Math.min(...x), Math.min(...y), Math.max(...x) + 1, Math.max(...y) + 1];
}
