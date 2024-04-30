function solution(cacheSize, cities) {
  const CACHE_HIT_TIME = 1;
  const CACHE_MISS_TIME = 5;
  const cache = [];
  let time = 0;

  // 캐시의 크기가 0인 경우(7번, 17번 엣지케이스), 이거 찾느라 오래걸렸어요.
  if (cacheSize === 0) {
    return cities.length * CACHE_MISS_TIME;
  }

  for (const city of cities) {
    // 대소분자 구분하지 않기 때문에 모두 소문자로
    const cityLowerCase = city.toLowerCase();

    // 해당 도시가 캐시에 있는지 여부
    const isCityInCache = cache.includes(cityLowerCase);

    // 캐시가 차지 않은 경우
    if (cache.length < cacheSize) {
      time += isCityInCache ? CACHE_HIT_TIME : CACHE_MISS_TIME;
      cache.push(cityLowerCase);

      //  캐시가 찬 경우
    } else {
      time += isCityInCache ? CACHE_HIT_TIME : CACHE_MISS_TIME;

      // 해당 도시의 인덱스를 찾음
      const hitIndex = cache.indexOf(cityLowerCase);

      // 캐시 미스
      if (hitIndex === -1) {
        cache.shift();

        //  캐시 힛
      } else {
        // 해당 도시만 삭제
        cache.splice(hitIndex, 1);
      }

      // 캐시에 추가
      cache.push(cityLowerCase);
    }
  }

  return time;
}

