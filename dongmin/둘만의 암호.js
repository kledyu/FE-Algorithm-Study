function solution(s, skip, index) {
    //skip에 포함된 알파벳을 알파벳 배열에서 제외
    const alpArr = [...'abcdefghijklmnopqrstuvwxyz'].filter(
      (alp) => !skip.includes(alp)
    );
    //s의 알파벳들을 index만큼 밀되, 알파벳 배열의 길이만큼 나눈 나머지를 인덱스로 사용해
    //알파벳 배열의 길이보다 길어진 경우에 대한 문제 처리
    const answer = [...s]
      .map((v) => alpArr[(alpArr.indexOf(v) + index) % alpArr.length])
      .join('');
    return answer;
  }
