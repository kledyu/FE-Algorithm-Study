function solution(s) {
    let convert = 0;
    let zero = 0;
    
    while (s !== '1') {
        let c = s.split('0').join('').length;
        zero += s.length - c;
        s = c.toString(2);
        convert += 1;
    }
    
    return [convert, zero];
}
