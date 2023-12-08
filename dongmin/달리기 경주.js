function solution(players, callings) {
  const playersNameAndRank = {};
  const playersRankAndName = {};

  // 각 플레이어들의 이름과 랭크를 기록
  players.forEach((name, rank) => {
    playersNameAndRank[name] = rank;
    playersRankAndName[rank] = name;
  });

  // 호명된 이름의 랭크에 앞서 달리던 사람의 이름을 담고
  // 앞서 달리던 사람의 랭크에 호명된 이름을 담기
  callings.forEach((name) => {
    const loserRank = playersNameAndRank[name];
    const loserName = playersRankAndName[loserRank - 1];
    playersNameAndRank[loserName] = loserRank;
    playersNameAndRank[name] -= 1;
    playersRankAndName[loserRank] = loserName;
    playersRankAndName[loserRank - 1] = name;
  });

  return Object.values(playersRankAndName);
}
