function solution(people, limit) {
    people.sort((a, b) => a - b); // 몸무게가 가벼운 순서로 정렬
    
    let boat = 0;
    
    let front = 0;
    let back = people.length - 1;
    
    while (front <= back) {
        let sum = people[front] + people[back];  // 가장 가벼운 사람과 가장 무거운 사람의 합
        
        if (sum <= limit) {  // limit보다 가볍거나 같으면 두 사람 모두 한 보트에 탑승. 다음 사람 순서로 넘어감
            boat += 1;
            front++;
            back--;
        } else {   // limit 보다 무거우면 무거운 사람만 먼저 탑승
            boat += 1;
            back--;
        }
    }
     
    return boat;
}
