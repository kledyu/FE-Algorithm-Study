function solution(n) {
    let arr = [1, 1];
    
    for (let i = 2; i <= n; i += 1) {
        arr.push((arr[i - 1] + arr[i - 2]) % 1234567);
    }
    
    return arr[n];
}


// 재귀
function solution(n) {
    return recursion(n);
}

function recursion(n, stack = {}) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (stack[n]) return stack[n];
    
    const count = recursion(n - 1, stack) + recursion(n - 2, stack);
    stack[n] = count; 
    
    return count % 1234567;
}
