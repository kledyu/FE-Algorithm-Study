// 삽질 풀이
// function solution(n, k) {
//     let answer = 0;
//     const target = n.toString(k)
    
//     const isPrime = (num) => {
//         if (num === 1) return false
//         if (!(num % 2)) return num === 2 ? true : false
        
//         for (let i = 3; i <= Math.sqrt(num); i += 2) {
//             if (!(num % i)) {
//                 return false
//                 break;
//             }
//         }
//         return true
//     }
    
//     const isP = (left, right) => {
//         if (left > 0 || right > 0) return false
//         return true
//     }
    
//     let temp = '';
//     for (let i = 0; i < target.length; i += 1) {
//         let leftIdx = -1;
//         let rightIdx = i + 1;
//         temp += [...target][i]
        
//         if (isP([...target][leftIdx], [...target][rightIdx]) && isPrime(temp)) {
//             answer += 1;
//             temp = ''
//             leftIdx = i;
//         }
//     }
    
//     return answer;
// }


function solution(n, k) {
    let answer = 0;
    
    const isPrime = (num) => {
        if (num === 1) return false
        if (!(num % 2)) return num === 2 ? true : false
        
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (!(num % i)) {
                return false
                break;
            }
        }
        return true
    }
    
    const primeArr = n.toString(k).split('0').filter(value => isPrime(Number(value)));
    
    return primeArr.length;
}
