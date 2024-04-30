function solution(s)  {
    let answer = [];
    
    // "[[2],[2,1],[2,1,3],[2,1,3,4]]"
    let arrS = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]")).sort((a, b) => a.length - b.length);

    let set = new Set();

    for (const arr of arrS) {
        for (const num of arr) {
            if (!set.has(num)) {
                set.add(num);
                answer.push(num);
            }
        }
    }

    return answer;
}
