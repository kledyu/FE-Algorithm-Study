// 방법1 - forEach, for문 사용
function solution(n, m, section) {
    // 페인트칠 최소 횟수
    let answer = 0
    
    let wall = new Array(n).fill(false);
    section.forEach(v => wall[v - 1] = true);
    
    // [1, 2, 3, 4]
    // [true, true, true, true]
    for (let i = 0; i < wall.length;) {
        if (wall[i]) {
            i += m - 1;   // 해당 구역부터 롤러 길이만큼 페인트칠
            answer++;     // 페인트칠 횟수 추가
        }
        i++;
    }
    
    return answer;
}


// 방법2 - for...of 사용
function solution(n, m, sections) {
    let answer = 0;
    let painted = 0;
    
    for (const section of sections) {
        if (painted < section) {
            painted = section + (m - 1);
            answer += 1;
        }
    }

    return answer;
}
