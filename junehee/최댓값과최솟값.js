// 전개연산자, min-max 사용
function solution(s) {
    let min = Math.min(...s.split(" "));
    let max = Math.max(...s.split(" "));
    return `${min} ${max}`;
}

// sort 사용
function solution(s) {
    const sortS = s.split(" ").sort((a, b) => a - b);
    return `${sortS[0]} ${sortS[sortS.length - 1]}`
}
