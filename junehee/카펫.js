function solution(brown, yellow) {
    const carpet = brown + yellow;
    
    for (let i = 3; i < carpet; i++) {
        let width = carpet / i;
        let height = i;
        
        if (width < height) continue;
        
        if ((width - 2) * (height - 2) === yellow) {
            return [width, height]
        }
    }
}
