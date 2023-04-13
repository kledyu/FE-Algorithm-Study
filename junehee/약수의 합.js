const getDivisors = (num) => {
  const divisors = [];
    
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      divisors.push(i).push(num);
    }
  }
  const sum = divisors.reduce((a, b) => a + b);
  return sum;
};