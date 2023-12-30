function solution(progresses, speeds) {
    let answer = [];
    let deployDates = [];
    let count = 0;
    
    // 기능별 배포에 필요한 날짜 계산 [7, 3, 9] ...
    progresses.forEach((value, index) => {
        deployDates.push(Math.ceil((100 - value) / speeds[index]));
    })
    
    let target = deployDates[0];
    const lastIndex = deployDates.length - 1
    
    deployDates.forEach((date, index) => {
        if (target >= date) {
            count += 1;
            index === lastIndex && answer.push(count)
            
        } else {
            answer.push(count);
            count = 1;

            index === lastIndex && answer.push(count)
            target = date
        }
    })
    
    return answer;
}
