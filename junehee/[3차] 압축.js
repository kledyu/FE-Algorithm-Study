function solution(msg) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const answer = [];
    
    for (let i = 0; i < msg.length; i++) {
        for (let j = msg.length; j > i; j--) {
            if (alphabet.includes(msg.slice(i, j))) {
                alphabet.push(msg.slice(i, j + 1));
                answer.push(alphabet.indexOf(msg.slice(i, j)) + 1);
                i += (j - i - 1);
            }
        }
    }
    
    return answer;
}
