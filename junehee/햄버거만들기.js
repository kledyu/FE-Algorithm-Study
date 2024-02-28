function solution(ingredient) {
    let count = 0;
    
    for (let i = 0; i < ingredient.length; i++) {
        let hamberger = ingredient.slice(i, i+4).join('');

        if (hamberger === '1231') {
            count += 1;
            ingredient.splice(i, 4);
            i -= 3;
        }
    }
    
    return count;
}
