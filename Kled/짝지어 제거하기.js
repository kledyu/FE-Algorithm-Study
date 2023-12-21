function solution(s) {
    let stack = [];
    
    [...s].forEach(value => {
        if (stack[stack.length - 1] === value) {
            return stack.pop()
        }
      
        stack.push(value)
    })
    
    return stack.length ? 0 : 1;
}
