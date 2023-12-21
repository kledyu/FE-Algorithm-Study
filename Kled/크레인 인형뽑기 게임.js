function solution(board, moves) {
    let answer = 0;
    let result = [];
    
    // 1. moves 순회
    moves.forEach(move => {
        // 2. board 순회
        for (let i = 0; i < board.length; i += 1) {
            // 3. 만약 board 배열 내 요소가 0이 아닌 truthy한 숫자 값일 때,
            if (board[i][move - 1]) { 
                // 4. result 배열에 해당 요소 push
                let doll = board[i][move - 1];
                
                result.push(doll)
                
                // 5. 만약 result 배열 내 터트릴 조건이 참이면, answer에 2를 더하고, result 배열에서 제거
                if (result.length > 1 && result[result.length - 2] === doll) {
                    answer += 2
                    result.splice(result.length - 2, 2)
                }
                
                // 6. 크레인이 뽑아간 요소이므로 0으로 변경
                board[i][move - 1] = 0;
                
                // 7. 즉시 for문을 break하고 탈출
                break;
            }
        }
    })
    
    return answer;
}
