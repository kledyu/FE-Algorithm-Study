function solution(phone_number) {
    let answer = [...phone_number].reverse()
    for (let i = 4; i < answer.length; i++) {
        answer[i] = '*'
    }
    answer = answer.reverse().join('')
    return answer
}

