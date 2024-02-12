// answer = 정답 출력할 문자열
// arrX = X에서 나온 숫자의 개수 카운팅
// arrY = Y에서 나온 숫자 개수 카운팅
// pair = X와 Y의 숫자 짝꿍 카운팅

function solution(X, Y) {
    let answer = ''
    let arrX = new Array(10).fill(0)
    let arrY = new Array(10).fill(0)
    let pair = new Array(10).fill(0)
    
    // X와 Y에서 나온 숫자 개수 카운팅
    for (const num of X.split('')) {
        arrX[num]++
    }
    for (const num of Y.split('')) {
        arrY[num]++
    }
    
    // arrX와 arrY에서 겹치는 숫자짝꿍 수만큼 카운팅
    for (let i = 0; i < arrX.length; i++) {
        if (arrX[i] > 0 && arrY[i] > 0) {
            pair[i] += Math.min(arrX[i], arrY[i])
        }
    }
    
    // 숫자짝꿍 문자열화
    for (let j = 0; j < pair.length; j++) {
        answer += String(j).repeat(pair[j])
    }
    
    // 0으로만 이루어져 있을 경우
    if (Number(answer) === 0) && answer !== '') return '0'

    return answer.length ? answer.split('').reverse().join('') : '-1';
}
