function solution(record) {
  const result = [];
  const nickName = new Map();

  // 각 행동에 대한 메시지를 result에 저장
  // Change의 경우 nickName에 최신 닉네임을 저장
  record.forEach((value) => {
    const [behavior, uid, name] = value.split(' ');

    switch (behavior) {
      case 'Enter': {
        nickName.set(uid, name);
        result.push(`${uid}님이 들어왔습니다.`);
        break;
      }
      case 'Leave': {
        result.push(`${uid}님이 나갔습니다.`);
        break;
      }
      case 'Change': {
        nickName.set(uid, name);
        break;
      }
    }
  });

  // result의 uid를 nickName의 name으로 치환
  return result.map((value) => {
    const [uid, ...rest] = value.split('님');
    return [nickName.get(uid), ...rest].join('님');
  });
}
