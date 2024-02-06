// 보너스 점수 계산 함수
const calculateBonus = (cur, bonus) => {
    const bonuses = { 'S': 1, 'D': 2, 'T': 3 };
    return Math.pow(cur, bonuses[bonus]);
};

function solution(dart) {
    let score = [];     // 점수 저장할 배열
    let cur = 0;        // 현재 다트 점수 임시 저장

    for (let i = 0; i < dart.length; i++) {
        if (!isNaN(dart[i])) {            // 현재 문자가 숫자일 때
            if (!isNaN(dart[i+1])) {      // 현재 다음 문자도 숫자일 때
                cur = 10;                 // 10점 임시 저장
                i++;                      // 다음 문자 건너뛰기
            } else cur = dart[i];         // 현재 문자가 문자일 때, 해당 문자를 임시 저장
        }

        // 보너스에 따른 추가 점수 계산
        if (dart[i] === 'S' || dart[i] === 'D' || dart[i] === 'T') {
            score.push(calculateBonus(cur, dart[i]));
        } else if (dart[i] === '#') {
            score[score.length - 1] *= -1;
        } else if (dart[i] === '*') {
            score[score.length - 1] *= 2;
            if (score.length > 1) score[score.length - 2] *= 2;
        }
    }
    
    return score.reduce((a, c) => a + c);
}
