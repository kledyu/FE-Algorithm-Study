const solution = (s) => {
    const len = s.length
    return len % 2 ? s[Math.floor(len / 2)] : s.slice((len / 2 - 1), len / 2 + 1)
    
}
