function solution(answers) {
    const supo1 = [1,2,3,4,5];
    const supo2 = [2,1,2,3,2,4,2,5];
    const supo3 = [3,3,1,1,2,2,4,4,5,5];
    
    const supo1Answer = answers.filter((el,i)=>(
        el === supo1[i % supo1.length])).length
    const supo2Answer = answers.filter((el,i)=>(
        el === supo2[i % supo2.length])).length
    const supo3Answer = answers.filter((el,i)=>(
        el === supo3[i % supo3.length])).length

    if(supo1Answer > supo2Answer && supo1Answer > supo3Answer) {
        return [1]
    }
    if(supo2Answer > supo1Answer && supo2Answer > supo3Answer) {
        return [2]
    }
    if(supo3Answer > supo2Answer && supo3Answer > supo1Answer) {
        return [3]
    }
    if(supo1Answer === supo2Answer && supo1Answer > supo3Answer) {
        return [1,2]
    }
    if(supo2Answer === supo3Answer && supo2Answer > supo1Answer) {
        return [2,3]
    }
    if(supo1Answer === supo3Answer && supo1Answer > supo2Answer) {
        return [1,3]
    }
    if(supo1Answer === supo3Answer && supo2Answer === supo3Answer) {
        return [1,2,3]
    }
}
