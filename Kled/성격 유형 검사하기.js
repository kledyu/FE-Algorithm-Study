function solution(survey, choices) {
    let answer = '';
    let result = new Map();
    const TYPES = ['RT', 'CF', 'JM', 'AN']
    const THRESHOLD = 4;
    
    const getter = (value) => {
      return result.get(value) ?? 0
    }
    
    choices.forEach((choice, index) => {
      if (choice > THRESHOLD) {
          const score = getter([...survey[index]][1])
          
          return result.set([...survey[index]][1], score + choice - THRESHOLD)
      }
      if (choice < THRESHOLD) {
          const score = getter([...survey[index]][0]);
          
          return result.set([...survey[index]][0], score + THRESHOLD - choice)
      }
    })
    
    TYPES.forEach(value => {
        if (getter(value[0]) < getter(value[1])) {
            return answer += value[1]
        }
        return answer += value[0]
    });
    
    return answer;
}
