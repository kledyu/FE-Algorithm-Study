// function solution(land) {
//     const firstValue = [...land[0]].sort((a, b) => (b - a))[0]
//     let answer = firstValue;
//     let preIndex = land[0].indexOf(firstValue);
    
//     for (let i = 1; i < land.length; i += 1) {
//         land[i].splice(preIndex, 1);
//         const biggestScore = [...land[i]].sort((a, b) => b - a)[0];
//         answer += biggestScore
//         preIndex = land[i].indexOf(biggestScore)
//     }
//     return answer;
// }

function solution(land) {
    let currentRow;
    let previousRow;
    
    for (let i = 1; i < land.length; i += 1) {
        currentRow = land[i];
        previousRow = land[i - 1];
        
        currentRow[0] += Math.max(previousRow[1], previousRow[2], previousRow[3])
        currentRow[1] += Math.max(previousRow[0], previousRow[2], previousRow[3])
        currentRow[2] += Math.max(previousRow[0], previousRow[1], previousRow[3])
        currentRow[3] += Math.max(previousRow[1], previousRow[2], previousRow[0])
    }
    
    return Math.max(...land[land.length - 1])
}
