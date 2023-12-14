function solution(s){
    let stack = []
    if (s[0] ===  ')') return false

    Array.from(s).forEach(value => {
        const lastIndex = stack.length - 1
        if (value === '(') return stack.push(value);
        if (stack[lastIndex] === '(') stack.pop();
    })
    return !stack.length;
}
