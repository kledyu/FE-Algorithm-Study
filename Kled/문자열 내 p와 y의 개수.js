
const solution = (s) => {
    let sum = 0
    let lowerCase = s.toLowerCase();
    let p = lowerCase.split("p")
    let y = lowerCase.split("y")
    console.log(p, y)
    for (let i = 0; i < [...s].length; i++) {
        // 1. 문자열 s를 구조분해할당
        
        if ([...s][i] === 'p' || [...s][i] === 'P') {
            sum++
        } else if ([...s][i] === 'y' || [...s][i] === 'Y') {
            sum--
        }
    }
    // 2. 개수가 같으면 return true, 다르면 return false 
    // 개수가 같다 -> sum은 0이다. -> true다.
    return sum === 0 ? true : false
    // return sum ? false : true
}
