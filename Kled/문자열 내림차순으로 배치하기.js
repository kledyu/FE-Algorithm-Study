function solution(s) {
    // sort()로 오름차순
    // 오름차순으로 정렬된 배열을 뒤집어 내림차순으로 재정렬
    return [...s].sort().reverse().join('')
}
