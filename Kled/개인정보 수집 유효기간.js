// today: "YYYY.MM.DD"
// terms: "약관 종류 유효기간"[]
// privacies: "YYYY.MM.DD 약관 종류"[]
function solution(today, terms, privacies) {
    let answer = [];
    
    terms.forEach(term => {
        const [typeOfTerm, month] = term.split(' ');
        
        privacies.forEach((privacy, index) => {
            const [date, typeOfPrivacy] = privacy.split(' ');
            
            if (typeOfTerm === typeOfPrivacy) {
                const newDate = new Date(date)
                newDate.setMonth(newDate.getMonth() + Number(month))
        
                if (new Date(today) - newDate >= 0) {
                   answer.push(index + 1)   
                } 
            }
        })
    })
    return answer.sort((current, next) => current - next);
}
