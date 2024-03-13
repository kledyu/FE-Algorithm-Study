function jadenWord(word) {
  if (word === '') {
    return '';
  }
  const firstLetter = word[0];
  return `${firstLetter.toUpperCase()}${word.slice(1).toLowerCase()}`;
}

function solution(s) {
  const words = s.split(' ');

  const tempArray = [];
  words.forEach((word) => {
    tempArray.push(jadenWord(word));
  });

  return tempArray.join(' ');
}
