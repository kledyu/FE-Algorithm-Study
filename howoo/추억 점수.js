function solution(name, yearning, photo) {
  const answer = [];
  for (let i = 0; i < photo.length; i++) {
    const exist = photo[i].map((p) => (name.includes(p) ? p : null));

    answer.push(
      exist
        .map((el) => yearning[name.indexOf(el)] ?? 0)
        .reduce((acc, prev) => acc + prev, 0)
    );
  }
  return answer;
}
