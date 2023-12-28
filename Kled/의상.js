function solution(clothes) {
    const hash = new Map();
    
    clothes.forEach(cloth => {
        hash.set(cloth[1], hash.get(cloth[1]) ? hash.get(cloth[1]) + 1 : 2)
    });
    
    
    return [...hash.values()].reduce((acc, cur) => acc * cur, 1) - 1;
}
