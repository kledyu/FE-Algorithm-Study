function solution(arr) {
    arr.sort((a, b) => a - b);
    return arr.reduce((acc, cur) => getLCM(acc, cur));
}

function getLCM(num1, num2) {
    let lcm = 1;

    while (true) {
        if(lcm % num1 == 0 && lcm % num2 == 0) break;
        lcm += 1;
    }

    return lcm;
}
