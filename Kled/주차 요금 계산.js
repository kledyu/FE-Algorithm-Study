// fees [기본 시간(분), 기본 요금(원), 단위 시간(분), 단위 요금(원)]
// records '시각 차량번호 내역'[]
function solution(fees, records) {
    let answer = [];
    
    const inOutMap = new Map();
    const parkingMap = new Map()
    const MAX_HOUR = 23;
    const MAX_MINUTE = 59;
    const [basicTime, basicFee, unitTime, unitFee] = fees

    
    const getMinute = (entryTime, outTime) => {
        const [hour, minute] = entryTime.split(':')
        
        return (hour * 60 + Number(minute))
    }
    
    const calculateFee = (entryTime, outTime) => {
        return basicFee + 
            Math.ceil( (getTimeDiff(entryTime, outTime) - basicTime) / unitTime ) * unitFee
    }
    
    records.forEach(record => {
        const [time, number, type] = record.split(' ');
        
        // 입차한 이력이 있는가?
        if (inOutMap.get(number)) {
            const timeDiff = getMinute(time) - getMinute(inOutMap.get(number));
            
            if (parkingMap.get(number)) {
                parkingMap.set(number, parkingMap.get(number) + timeDiff)
            } else parkingMap.set(number, timeDiff)
            
            inOutMap.delete(number)
        } else inOutMap.set(number, time)
        
    })
    
    inOutMap.forEach((time, number) => {
        const timeDiff = getMinute('23:59') - getMinute(time);
        if (parkingMap.get(number)) {
                parkingMap.set(number, parkingMap.get(number) + timeDiff)
        } else parkingMap.set(number, timeDiff)
    })
    
   
    const keys = [...parkingMap.keys()].sort()
    
    return keys.map(key => (
        parkingMap.get(key) < basicTime ? basicFee 
            : basicFee + Math.ceil((parkingMap.get(key) - basicTime) / unitTime) * unitFee
    ))
}
