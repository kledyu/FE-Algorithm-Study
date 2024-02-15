function solution(participant, completion) {
    const p = [...participant].sort();  // 참가자와 완주자를 모두 유니코드 순으로 정렬
    const c = [...completion].sort();
    
    for (let i = 0; i < p.length; i++) {
        if (p[i] !== c[i]) return p[i];  // 참가자와 완주자를 순회하며 두 값이 일치하지 않은 경우 완주하지 못한 선수
    }
  
    return false;
}
