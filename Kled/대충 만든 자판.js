function solution(keymap, targets) {
  const answer = [];

  const findMinIndex = target => {
    const key = [];

    keymap.forEach(map => {
      if (map.indexOf(target) >= 0)  key.push(map.indexOf(target) + 1);
    });
      
    return key.length ? Math.min(...key) : -1;
  };

  targets.forEach(target => {
    let pushCount = 0;

    [...target].some((key) => {
      const index = findMinIndex(key);
      if (index === -1) {
        pushCount = -1;
        return true; 
      }
      pushCount += index;
      return false; 
    });
    answer.push(pushCount);
  });

  return answer;
}
