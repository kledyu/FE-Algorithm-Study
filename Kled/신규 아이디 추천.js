function solution(new_id) {
    let answer = '';
    const rValid = /[a-z0-9\-_.]/;

    // 1. 대문자를 소문자로 치환
    const first = (id) => {
        return second(id.map(value => value.toLowerCase()))
    }

    // 2. 정규표현식을 사용하여 알파벳 소문자, 숫자, 빼기, 밑줄, 마침표에 해당되는 요소만 필터링
    const second = (id) => {
        return third(id.filter(value => rValid.test(value)))
    }

    // 3. 마침표가 2번 이상 연속된 부분을 하나의 마침표로 치환
    const third = (id) => {
        return fourth(id.filter((value, index) => !(value === '.' && id[index - 1] === '.')))
    }

    // 4. 마침표가 처음이나 끝에 위치한다면 `splice()`를 통해 제거
    const fourth = (id) => {
        if (id[0] === '.') id.splice(0, 1)
        if (id[id.length - 1] === '.') id.splice(-1, 1)

        return fifth(id)
    }

    // 5. 배열의 길이가 0이라면(falsy) `a`를 push
    const fifth = (id) => {
        if (!id.length) id.push('a')

        return sixth(id)
    }

    // 6. 배열의 길이가 16자 이상이라면 16번 째 요소 이후로 삭제
    // 제거 후 마침표가 배열 마지막 인덱스에 존재한다면 `splice()`를 통해 제거
    const sixth = (id) => {
        if (id.length > 15) id.splice(15)
        if (id[id.length - 1] === '.') id.splice(-1, 1)

        return seventh(id)
    }

    // 7. 배열의 길이가 2자 이하라면, 길이가 3이 될 때까지 반복하여 마지막 요소를 push
    const seventh = (id) => {
        if (id.length < 3) {
            while (id.length !== 3) {
                id.push(id[id.length - 1])
            }
        }

        return id.join('')
    }

    return first([...new_id])
}
