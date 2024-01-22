function solution(files) {
    let answer = [];
    
    // 숫자만 허용
    const rNumber = /\d/;
    
    // 숫자가 나타나기 전까지의 문자열(HEAD)를 반환한다.
    const getHead = (arr) => {
        let index = 0;
        
        for (let i = 0; i < arr.length; i += 1) {
            if (rNumber.test(arr[i])) {
                index = i;
                break;
            }
        }
        
        // 대소문자 구분하지 않기 위해 모두 대문자로 변경
        return arr.slice(0, index).toUpperCase()
    }
    
    // 한 글자에서 최대 다섯 글자 사이의 연속된 숫자(NUMBER) 부분을 number 형식으로 반환한다.
    // parseInt('1', 10) = 1
    // parseInt('foo01', 10) = 1
    const getNumber = (a, b, headOfA, headOfB) => {
        const numberOfA = a.slice(headOfA.length, headOfA.length + 5);
        const numberOfB = b.slice(headOfB.length, headOfB.length + 5);
        
        return [parseInt(numberOfA, 10), parseInt(numberOfB, 10)]
    }
    
    
    files.sort((a, b) => {
        const headOfA = getHead(a);
        const headOfB = getHead(b);
        const [numberOfA, numberOfB] = getNumber(a, b, headOfA, headOfB);
        
        // HEAD 기준 오름차순 정렬
        if (headOfA > headOfB) return 1;
        if (headOfA < headOfB) return -1;
        
        // HEAD 부분이 같다면, NUMBER 기준 오름차순 정렬
        return numberOfA - numberOfB
    })
    
    return files;
}
