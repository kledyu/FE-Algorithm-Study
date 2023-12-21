// 실패한 코드
function failSolution (ingredient) {
    let answer = 0;
    let index = 0;
    const hamburger = [1, 2, 3, 1];
    
    while (index < ingredient.length - 3) {

        /**
        * splice()를 통해 배열을 추출하는게 타임아웃을 유발하였음
        * 아래 정답 솔루션 코드보다 훨씬 짧고 간결하지만 오히려 시간복잡도를 높였다.
        */
        const splicedArray = [...ingredient].splice(index, 4)
        if (splicedArray.every((value, index) => value === hamburger[index])) {
            answer += 1;
            ingredient.splice(index, 4);
            index > 3 ? index -= 3 : index = 0
            continue;
        } 
        index += 1;
    }
    
    return answer
}

function solution(ingredient) {
    let answer = 0;
    let index = 0;
    const hamburger = [1, 2, 3, 1];
    
    // 특정 index 값을 받아, 이후 4개의 요소가 햄버거의 요소와 모두 일치하는 지 계산하여 일치하면 true를 리턴한다.
    const calculateIsHamburger = (index) => {
        let isHamburger = true;
      
        for (let hamburgerIdx = 0; hamburgerIdx < 4; hamburgerIdx += 1) {
            if (ingredient[index] !== hamburger[hamburgerIdx]) {
                isHamburger = false
              
                break;
            }
            index += 1;
        }
        
        return isHamburger
    }
    
    while (index < ingredient.length - 3) {
        if (calculateIsHamburger(index)) {
            answer += 1;
            ingredient.splice(index, 4);
            index > 3 ? index -= 3 : index = 0
          
            continue;
        } 
        index += 1
    }
    
    return answer
}
