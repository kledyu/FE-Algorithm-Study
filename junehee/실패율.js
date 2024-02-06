// total : 전체 인원수
// player : 현재 스테이지에 있는 사람
// failure : 실패율 (player / total)

function solution(N, stages) {
    let answer = [];
    let total = stages.length;
    
    for (let i = 1; i <= N; i++) {
        let player = stages.filter(n => n === i).length;
        let failure = player / total;
        answer.push([i, failure]);
        total -= player;
    }
    
    answer.sort((a, b) => b[1] - a[1]);
    
    return answer.map(a => a[0]);
}
