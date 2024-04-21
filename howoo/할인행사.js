function solution(want, number, discount) {
  let answer = 0;

  const discountLength = discount.length;

  for (let i = 0; i < discountLength - 9; i++) {
    // 0번째 인덱스 부터 10개의 물건을 담은 배열
    const list = discount.slice(i, i + 10);

    // shopping list 만들기
    const shoppingList = {};
    want.forEach((itmem, index) => {
      shoppingList[itmem] = number[index];
    });
    // {banana: 3, apple: 2, rice: 2, pork: 2, pot: 1}

    // 10개의 물건을 담은 list에서 shoppingList에 물건이 있으면 해당 물건의 수량을 1 감소시킴
    list.forEach((element) => {
      if (shoppingList[element]) {
        shoppingList[element]--;
      }
    });

    // 남아있는 아이템들의 수량의 총합
    const leftItemCount = Object.values(shoppingList).reduce(
      (acc, curr) => acc + curr,
      0
    );

    // 총합이 0보다 작거나 같으면 모두 구매했다는 의미이므로 정답카운트 증가
    if (leftItemCount <= 0) {
      answer++;
    }
  }
  return answer;
}
