function solution(n){
    let jumps = 0;

    // 남은 거리가 홀수면, 한 칸 점프 (jumps + 1) 이후 순간이동
    while (n >= 1) {
        if (n % 2) jumps += 1
        n = Math.floor(n / 2)
    }


    return jumps;
}
