function solution(cacheSize, cities) {
    if (cacheSize < 1) return cities.length * 5;
    
    const newCities = cities.map(el => el.toLowerCase());
    
    let runtime = 0;
    const cache = [];
    
    for (let i = 0; i < newCities.length; i++) {
        const city = newCities[i];
        const idx = cache.indexOf(city);
        
        if (idx < 0) {
            if (cache.length > cacheSize - 1) cache.shift();
            runtime += 5;
        } else {
            cache.splice(idx, 1);
            runtime += 1;
        }
        cache.push(city)
    }
    
    return runtime;
}
