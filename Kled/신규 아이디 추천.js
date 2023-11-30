function solution(new_id) {
    var answer = '';
    const rValid = /[a-z0-9\-_.]/;
    
    const first = (id) => {
        return second(id.map(value => value.toLowerCase()))
    }
    
    const second = (id) => {
        return third(id.filter(value => rValid.test(value)))
    }
    
    const third = (id) => {
        return fourth(id.filter((value, index) => !(value === '.' && id[index - 1] === '.')))
    }
    
    const fourth = (id) => {
        if (id[0] === '.') id.splice(0, 1)
        if (id[id.length - 1] === '.') id.splice(-1, 1)
        
        return fifth(id)
    }
    
    const fifth = (id) => {
        if (!id.length) id.push('a')
      
        return sixth(id)
    }
    
    const sixth = (id) => {
        if (id.length > 15) id.splice(15)
        if (id[id.length - 1] === '.') id.splice(-1, 1)
      
        return seventh(id)
    }
    
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
