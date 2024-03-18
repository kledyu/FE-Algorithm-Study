function solution(n) {
    let origin = [...n.toString(2)].filter(v => v === '1').length;
    let next = n + 1;
    
    while (true) {
        let now = [...next.toString(2)].filter(v => v === '1').length;
        if (origin === now) return next;
        else next++;
    }
}
