  function solution(food) {
    const mapped = food.map((f) => Math.floor(f / 2));
    let string = '';
    for (let i = 1; i < food.length; i++) {
      for (let j = 0; j < mapped[i]; j++) {
        string += i;
      }
    }
    const splitted = string.split('');
    const reversed = [...splitted].reverse();
    const array = [...splitted, 0, ...reversed];
    return array.join('');
  }
