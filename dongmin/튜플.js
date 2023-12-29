function solution(s) {
  const tuple = [];
  const arr = s.slice(2, s.length - 2).split("},{");
  arr.sort((a, b) => a.length - b.length);

  arr.forEach((words, idx) => {
    // 첫 숫자는 바로 push
    if (!idx) {
      tuple.push(Number(words));
    }

    const wordArr = words.split(",");

    // tuple에 없는 숫자면 push
    wordArr.forEach((word) => {
      if (!tuple.includes(Number(word))) {
        tuple.push(Number(word));
      }
    });
  });

  return tuple;
}
