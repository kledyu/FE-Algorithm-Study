function solution(s) {
    return s.toLowerCase()  // 모두 소문자로 변경
            .split(" ")  // 공백 기준으로 나누기
            .map(i => i.charAt(0).toUpperCase() + i.slice(1))  // 나눠진 문자열에서 0번째 인덱스만 대문자 변경 + 나머지 이어 붙이기
            .join(" ")  // 사이 공백을 두어 문자열로 합치기
}
