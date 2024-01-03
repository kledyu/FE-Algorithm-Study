function solution(msg) {
    let answer = [];
    const ALPABHET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const dictionary = Array.from(ALPABHET, (value) => value);
    
    let currentInput = '';
    let nextInput = '';
    let sum = ''
    
    for (let index = 0; index < msg.length; index += 1) {
        // 현재 입력
        currentInput += msg[index];
        
        // 다음 글자
        nextInput = msg[index + 1];
        
        // 사전 추가할 글자 만들기
        sum = currentInput + nextInput;
        
        while (dictionary.includes(sum)) {
            currentInput += nextInput
            nextInput = msg[index + 2]
            sum = currentInput + nextInput
            index += 1
        }
        // 사전에 신규 글자 추가하기
        dictionary.push(sum);
        
        // 색인 번호 push
        answer.push(dictionary.indexOf(currentInput) + 1);
        
        // 초기화
        currentInput = ''
        nextInput = ''
    }
    
    return answer;
}
