 function solution(s) {
    const str = s.split(' ');
    return `${Math.min(...str)} ${Math.max(...str)}`;
  }
