const solution = (x) => {
    // 1. 양의 정수 x와
    return x % 
        // 2. 자릿수의 합
        [...("" + x)]
        .map(v => v * 1)
        .reduce((a, c) => a + c)
        // 3. 나눈 나머지가 0이면 true
        === 0
}
