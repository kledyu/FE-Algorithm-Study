function solution(answers) {
    // 수포자 정답 패턴
    let supo = {
        1: [1, 2, 3, 4, 5],
        2: [2, 1, 2, 3, 2, 4, 2, 5],
        3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    }

    // 수포자 패턴대로 찍었을 경우 정답 갯수(점수)
    let supo_answers = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        // 정답과 일치할 경우 정답 갯수 증가
        if (supo[1][i % supo[1].length] === answers[i]) supo_answers[0]++;
        if (supo[2][i % supo[2].length] === answers[i]) supo_answers[1]++;
        if (supo[3][i % supo[3].length] === answers[i]) supo_answers[2]++;
    }

    // 제일 잘 맞춘 점수, 승리자
    let best = Math.max(...supo_answers);
    let winner = [];

    // 수포자들 점수가 베스트 점수와 일치할 경우 winner에 push (오름차순이므로 1번 수포자부터...)
    if (supo_answers[0] === best) winner.push(1);
    if (supo_answers[1] === best) winner.push(2);
    if (supo_answers[2] === best) winner.push(3);
    
    return winner;
}
