function solution(phone_book) {
    let hasPrefix = true
    phone_book.sort();
    
    for (let i = 0; i < phone_book.length - 1; i += 1) {
        const value = phone_book[i]
        const nextValue = phone_book[i + 1];

        if (nextValue && nextValue.slice(0, value.length) === value) {
            hasPrefix = false;
            break;
        }
    }
    
    return hasPrefix
}
