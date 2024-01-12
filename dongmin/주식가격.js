function solution(prices) {
  const answer = [];

  prices.forEach((price, index) => {
    let count = 0;

    // 각 주식의 가격을 비교
    for (let i = index; i < prices.length - 1; i += 1) {
      count += 1;

      if (price < prices[i + 1]) {
        break;
      }
    }

    answer.push(count);
  });

  return answer;
}
