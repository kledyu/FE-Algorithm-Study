function solution(files) {
    let answer = [];
    const rNumber = /\d/;
    
    const getHead = (arr) => {
        let index = 0;
        
        for (let i = 0; i < arr.length; i += 1) {
            if (rNumber.test(arr[i])) {
                index = i;
                break;
            }
        }
        
        return arr.slice(0, index).toUpperCase()
    }
    
    const getNumber = (a, b, headOfA, headOfB) => {
        const numberOfA = a.slice(headOfA.length, headOfA.length + 5);
        const numberOfB = b.slice(headOfB.length, headOfB.length + 5);
        
        return [parseInt(numberOfA, 10), parseInt(numberOfB, 10)]
    }
    
    
    files.sort((a, b) => {
        const headOfA = getHead(a);
        const headOfB = getHead(b);
        const [numberOfA, numberOfB] = getNumber(a, b, headOfA, headOfB);
        
        if (headOfA > headOfB) return 1;
        if (headOfA < headOfB) return -1;
        
        return numberOfA - numberOfB
    })
    
    return files;
}
