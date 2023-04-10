const solution = (emergency) => {
  let answer = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => answer.indexOf(v) + 1);
};
