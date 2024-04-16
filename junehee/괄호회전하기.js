function solution(s) {
    if (s.length % 2 === 1) return 0;

    let count = 0;
    
    const mapping = {
        "}" : "{",
        "]" : "[",
        ")" : "("
    };

    for (let i = 0; i < s.length; i++) {
        let stk = [];
        let flag = true;
        let rotate = s.slice(i) + s.slice(0, i);

        for (let j = 0; j < s.length; j++) {
            let first = rotate[j];
            if (first === "[" || first === "(" || first === "{") {
                stk.push(rotate[j]);
            } else {
                let last = stk.pop();
                if (last !== mapping[first]) {
                    flag = false
                    break;
                }
            }
        }

        if (flag) count++;
    }

    return count;
}
