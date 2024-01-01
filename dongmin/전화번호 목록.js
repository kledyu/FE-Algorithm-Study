function solution(phone_book) {
  phone_book.sort();

  // 다음 번호의 앞부분을 현재 번호의 길이만큼 잘라내어 비교
  // 옵셔널 체이닝으로 마지막 요소에서 비교했을 때 undefined와 비교해 false가 나오도록 함
  const isHead = (array) => {
    return array.some((num, idx) => {
      return array[idx + 1]?.slice(0, num.length) === num;
    });
  };

  return !isHead(phone_book);
}
