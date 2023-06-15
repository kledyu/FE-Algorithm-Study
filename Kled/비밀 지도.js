function solution (n, arr1, arr2) {
    // 1. 10진수가 담긴 배열을 입력하면 2진수로 변환하는 함수 작성
    const tenToTwo = x => {
        let result = [];
        
        for (let i = 0; i < x.length; i++) {
            let temp = [];
            // 2진수로 변환
            while (x[i] > 1) {
                temp.unshift(x[i] % 2)
                x[i] = Math.floor(x[i] / 2)
            }
            temp.unshift(x[i])  
            
            // 한 변의 길이에 맞게, 0을 unshift로 넣어줌
            for (let j = temp.length; j < n; j++) {
                temp.unshift(0)
            }
            
            result.push(temp)
        }
        return result
    }
    
    // 두 개의 지도를 모두 변환
    const biMap1 = tenToTwo(arr1)
    const biMap2 = tenToTwo(arr2)
    
    // 최종 지도 만들기
    const finalMap = []
    
    for (let k = 0; k < biMap1.length; k++) {
        let str = ''
        for (let m = 0; m < biMap1.length ; m++) {
            
            // 두 지도 모두 공백인 경우.
            if(biMap1[k][m] === 0 && biMap2[k][m] === 0) {
                str += ' '
            // 두 지도 중 한 곳이 벽인 경우    
            } else {
                str += '#'
            }
        }
        
        
        finalMap.push(str)
    }
    return finalMap;
}
