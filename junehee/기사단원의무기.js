function solution(number, limit, power) {
  let total = 0;

  for (let i = 1; i <= number; i++) {
    let divisors = 0;
    
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) divisors += 1;
        else divisors += 2;
      }
        
      if (divisors > limit) {
        divisors = power;
        break;
      }
    }
      
    total += divisors;
  }
  
  return total;
}
