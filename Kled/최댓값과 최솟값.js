function solution(s) {
    const strings = s.split(' ').sort((first, second) => first - second);
    
    return [strings[0], strings[strings.length - 1]].join(' ');
}
