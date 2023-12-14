function solution(s) {
    let answer = [];
    let deleted = 0;
    let count = 0;
    
    const deleteZero = (binary) => {
        let result = [...binary].filter(value => value === '1').join('');
        
        return [ result, result.length, binary.length - result.length ]
    }
    
    const makeBinary = (length) => {
        let binary = '';
      
        while (length >= 1) {
            binary += length % 2
            length = Math.floor(length / 2)
        }
      
        return binary.split('').reverse().join('')
    }
    
    while(s.length > 1) {
        const [ result, afterLength, deletedLength ] = deleteZero(s);
        const binary = makeBinary(afterLength);
        
        deleted += deletedLength;
        count += 1
        s = binary;
    }
  
    return [count, deleted];
}
