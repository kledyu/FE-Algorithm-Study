// priorities : [1, 1, 9, 1, 1, 1]
function solution(priorities, location) {
    let count = 0;
    let queue = [];

    // queue : [0, 1, 2, 3, 4, 5]
    for (let i = 0; i < priorities.length; i++){
        queue.push(i);
    }

    while (queue.length !== 0) {
        // 9
        let max = Math.max(...priorities);
        // 현재 실행할 프로세스 우선순위가 max보다 낮을 경우 맨 뒤로 대기
        if (priorities[0] < max) {
            priorities.push(priorities.shift());
            queue.push(queue.shift());
        } else {
            count += 1;           // 우선순위가 더 높은 경우에는 실행해야 하므로 프로세스 실행 +1
            priorities.shift();   // 실행했으므로 큐에서 삭제하
            if (queue.shift() === location) return count;  // 만약 방금 실행한 프로세스가 location과 같으면 현재 카운트값 리턴
        }
    }
}
