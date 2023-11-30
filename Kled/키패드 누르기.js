function solution(numbers, hand) {
    let answer = '';
    let leftHandIndex = Array.from({ length: 2 }, () => 0);
    let rightHandIndex = Array.from({ length: 2 }, () => 0);
    
    const leftNumbers = ['*', 7, 4, 1];
    const rightNumbers = ['#', 9, 6, 3];
    const centralNumbers = [0, 8, 5, 2];
    const LEFT = 'L';
    const RIGHT = 'R';
    
    
    numbers.forEach(number => {
      // 왼쪽 열에 해당하는 경우, 왼손의 현재 위치를 저장하고 answer에 'L'을 추가
      if (leftNumbers.includes(number)) {
        leftHandIndex = [0, leftNumbers.indexOf(number)];
        answer += LEFT;
      } 

      // 오른쪽 열에 해당하는 경우, 오른손의 현재 위치를 저장하고 answer에 'R'을 추가
      if (rightNumbers.includes(number)) {
        rightHandIndex = [2, rightNumbers.indexOf(number)];
        answer += RIGHT;
      }

      // 가운데 열에 해당하는 경우
      if (centralNumbers.includes(number)) {
        let centralNumberIndex = [1, centralNumbers.indexOf(number)];
        let leftDistance = centralNumberIndex.reduce((acc, cur, index) => acc + Math.abs(cur - leftHandIndex[index]), 0);
        let rightDistance = centralNumberIndex.reduce((acc, cur, index) => acc + Math.abs(cur - rightHandIndex[index]), 0);

        // 왼손이 더 가까운 경우, 왼손의 현재 위치를 저장하고 answer에 'L'을 추가, early return
        if (leftDistance < rightDistance) {
            leftHandIndex = [1, centralNumbers.indexOf(number)];
            return answer += LEFT
        }

        // 오른손이 더 가까운 경우, 오른손의 현재 위치를 저장하고 answer에 'R'을 추가, early return
        if (leftDistance > rightDistance) {
            rightHandIndex = [1, centralNumbers.indexOf(number)];
            return answer += RIGHT
        }

        // 가운데 번호 기준 왼손과 오른손 위치가 같을 경우 왼손잡이와 오른손잡이 여부에 따라 계산
        if (hand === 'left') {
            leftHandIndex = [1, centralNumbers.indexOf(number)];
            answer += LEFT
        } else {
            rightHandIndex = [1, centralNumbers.indexOf(number)];
            answer += RIGHT
        }
      }
    })
    
    return answer;
}
