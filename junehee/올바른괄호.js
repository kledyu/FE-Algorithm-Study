function solution(s){
    let pair = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") pair++;
        else pair--;
        
        if (pair < 0) return false;
    }

    return pair === 0;
}

// 효율성 미통과
function solution(s){
    while (s.includes('()')) {
        s = s.split('()').join('');
    }

    return s.length ? false : true;
}

// 스택 이용한 풀이 시도1 - 테스트 2, 6번 미통과
function solution(s){
    let bracket = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") bracket.push(s[i]);
        else bracket.pop();
    }

    return bracket.length === 0 ? true : false;
}

// 스택 이용한 풀이 시도 2 - 성공 (스택이 비어있을 때 예외처리 필요)
function solution(s){
    let bracket = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            bracket.push(s[i]);
        } else {
            if (bracket.length > 0) bracket.pop();
            else return false;
        }
    }

    return bracket.length === 0 ? true : false;   // bracket.length === 0 으로 줄여도 됨!
}

