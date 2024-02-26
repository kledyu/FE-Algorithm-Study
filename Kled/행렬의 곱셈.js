function solution(arr1, arr2) {
    let answer = [];

    arr1.forEach(value1 => {
        let tempArray = [];

        arr2[0].forEach((_, index2) => {
            let temp = 0;

            value1.forEach((el1, index1) => temp += el1 * arr2[index1][index2]);
            tempArray.push(temp);
        });

        answer.push(tempArray);
    });
    
    return answer;
}
