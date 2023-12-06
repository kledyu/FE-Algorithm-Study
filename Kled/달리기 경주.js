function solution(players, callings) {
    // 1. 플레이어의 순서를 나타내는 배열 선언
    let answer = []
    
    // 2. 플레이어의 등수를 나타내는 객체
    let hash = new Map()
    
    // 3. 초기화
    players.forEach((player, index) => {
        hash.set(player, index);
        answer.push(player)
    })
    
    // 4. 레이스
    callings.forEach(calling => {
        // 호명된 플레이어의 등수 할당
        let score = hash.get(calling);
        // 해시에 호명된 플레이어의 등수 조정
        hash.set(calling, score - 1);

        // 앞 플레이어 이름 할당
        let frontPlayer = answer[score - 1];
        
        // 해시에 앞 플레이어의 등수 조정
        hash.set(frontPlayer, hash.get(frontPlayer) + 1);
        
        // 등수에 따른 배열 순서 조정
        answer[score] = frontPlayer;
        answer[score - 1] = calling;
    });
    
    return answer;
}
