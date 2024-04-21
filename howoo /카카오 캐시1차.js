// 캐시를 큐 자료구조로 정의
// 대소문자 구분 하지 않음

function solution(cacheSize, cities) {
  const CACHE_HIT_TIME = 1;
  const CACHE_MISS_TIME = 5;

  // cach queue 생성
  const cach = [];

  // 정답
  let time = 0;

  for (const city of cities) {
    // 캐시 queue가 다 차있지 않은 경우
    if (cach.length < cacheSize) {
      // 캐시 큐에 해당 도시가 있는지 확인
      if (cach.includes(city.toLowerCase())) {
        // 있다면 시간 +1
        time += CACHE_HIT_TIME;
      } else {
        // 없다면 시간 +5
        time += CACHE_MISS_TIME;
        // 캐시 큐에 해당 도시 enqueue
        cach.push(city.toLowerCase());
      }
      
      // 캐시 queue가 차있는 경우
    } else {
      if (cach.includes(city.toLowerCase())) {
        // 캐시 큐에 해당 도시가 있다면
        // 시간 + 1
        time += CACHE_HIT_TIME;
      } else {
        // 없다면 시간 + 5
        time += CACHE_MISS_TIME;
        // 캐시 큐에 맨 처음 도시 dequeue
        cach.shift();
        // 캐시큐에 해당 도시 enqueue
        cach.push(city.toLowerCase());
      }
    }
  }

  return time;
}
