function solution(cacheSize, beforeCities) {
    let answer = 0;
    const cities = beforeCities.map(city => city.toLowerCase())
    const HIT = 1;
    const MISS = 5;
    const cache = new Set();
    
    cities.forEach(city => {
        // 최대 캐시 사이즈를 초과하면, 가장 오래된 캐시를 지운다
        if (cache.size > cacheSize) cache.delete([...cache.values()][0]);

        // 만약 캐싱된 city라면, 캐시 내역에서 지우고, 다시 캐시에 add한다 (최신화)
        if (cache.has(city)) {
            cache.delete(city);
            cache.add(city);
            
            return answer += HIT;
        }

        // 캐싱되지 않은 city라면 캐시에 추가한다.
        cache.add(city);
  
        answer += MISS
    })
    
    return answer;
}
