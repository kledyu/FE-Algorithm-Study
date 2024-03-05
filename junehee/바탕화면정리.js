function solution(wallpaper) {
    const X = [];
    const Y = [];

    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === "#") {
                X.push(j);
                Y.push(i);

            }
        }
    }

    let top = Math.min(...Y);
    let bottom = Math.min(...X);
    let left = Math.max(...Y) + 1;
    let right = Math.max(...X) + 1;

    return [top, bottom, left, right];
}
