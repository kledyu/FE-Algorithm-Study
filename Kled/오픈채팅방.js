function solution(record) {
    const answer = [];
    const map = new Map();
    const ENTER_MESSAGE = '님이 들어왔습니다.'
    const LEAVE_MESSAGE = '님이 나갔습니다.'
    
    record.forEach(value => {
        const [ method, id, name ] = value.split(' ');
        
        if (method === 'Change') map.set(id, name);
        
        if (method === 'Enter') {
            map.set(id, name);
            answer.push([id, ENTER_MESSAGE])
        }
        
        if (method === 'Leave') {
            answer.push([id, LEAVE_MESSAGE])
        }
    })
    
    return answer.map(value => {
        const [id, message] = value;
        
        return `${map.get(id)}${message}`
    });
}
