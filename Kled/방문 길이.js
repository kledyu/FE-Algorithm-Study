function solution(dirs) {
    let x = 0;
    let y = 0;

    const map = new Map()
    
    for (let i = 0; i < dirs.length; i += 1) {
        let dir = dirs[i];

        // UP
        if (dir === 'U' && y !== 5) {
            y += 1;
            // [1][0] -> [0][0] 으로 방문한 적이 없다면
            if (!map.get(`${x}${y}${x}${y - 1}`)) {
                // [0][0] -> [1][0] 경로 저장
                map.set(`${x}${y - 1}${x}${y}`, 1)
            }
            continue;
        }

        // DOWN
        if (dir === 'D' && y !== -5) {
            y -= 1;
            if (!map.get(`${x}${y}${x}${y + 1}`)) {
                map.set(`${x}${y + 1}${x}${y}`, 1)
            }
            continue;
        }

        // LEFT
        if (dir === 'L' && x !== -5) {
            x -= 1;
            if (!map.get(`${x}${y}${x + 1}${y}`)) {
                map.set(`${x + 1}${y}${x}${y}`, 1)
            }
            continue;
        }

        // RIGHT
        if (dir === 'R' && x !== 5) {
            x += 1;
            if (!map.get(`${x}${y}${x - 1}${y}`)) {
                map.set(`${x - 1}${y}${x}${y}`, 1)
            }
            continue;
        }
    }
    
    return map.size;
}
