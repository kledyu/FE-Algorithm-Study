function solution(keymap, targets) {
    const answer = Array.from({ length: targets.length })
    targets.forEach((target, idx) => {
        let count = 0
        for(i = 0; i < target.length ; i++){
            indexArray = keymap.map((alp) => alp.indexOf(target[i]) )
            if(Math.max(...indexArray) === -1){
                count = -1
                break;
            } else {
                const minIndex = Math.min(...indexArray.filter(v=>v>=   0)) + 1
                count = count + minIndex
            }
        }
        answer[idx] = count
    })
    return answer
}
