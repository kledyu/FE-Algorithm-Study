function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const change = [...alphabet].filter(char => !skip.includes(char));

    let answer = '';

    for (let char of s) {
        answer += change[(change.indexOf(char) + index) % change.length];
    }

    return answer;
}
