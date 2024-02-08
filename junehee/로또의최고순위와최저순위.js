function solution(lottos, win_nums) {
    let answer = [];       // 정답을 담을 배열 [최고순위, 최저순위]
    
    let yes = 0;           // 정답 갯수
    let no = 0;            // 틀린 갯수
    let zero = 0;          /// 0 갯수

    // 맞은 갯수가 key일 때 [최고순위, 최저순위]
    const rank = {
        "0": [6, 1],
        "1": [6, 2],
        "2": [5, 3],
        "3": [4, 4],
        "4": [3, 5],
        "5": [2, 6],
        "6": [1, 6],
    }

    // lottos 루프 돌면서 0일 경우, 당첨번호인 경우, 당첨번호 아닌 경우 카운트
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] !== 0) {
            if (win_nums.includes(lottos[i])) yes++;
            else no++;
        } else zero++;
    }
    
    answer.push(rank[yes + zero][0], rank[no + zero][1])
    
    return answer;
}
