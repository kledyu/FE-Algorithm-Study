function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];

  cities.forEach((city) => {
    city = city.toLowerCase();

    // cache에 포함된 도시는 answer + 1을, 그 외에는 answer + 5
    cache.includes(city) ? (answer += 1) : (answer += 5);

    // cacheSize만큼 cache 채우기
    if (cache.length < cacheSize) {
      cache.push(city);

      // cache가 채워져 있는 상태
      // 만약 도시가 포함되어 있으면 cache에서 해당 도시를 제거하고 cache의 맨 뒤에 해당 도시 추가
      // 포함되어 있지 않으면 해당 도시를 cache의 맨 뒤에 추가하고 맨 앞 도시 제거
    } else {
      if (cache.includes(city)) {
        cache.splice(cache.indexOf(city), 1);
        cache.push(city);
      } else {
        cache.push(city);
        cache.shift();
      }
    }
  });

  return answer;
}
