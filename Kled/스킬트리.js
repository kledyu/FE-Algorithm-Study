function solution(skillInput, trees) {
    let answer = trees.length;
    
    trees.forEach(tree => {
        let skill = skillInput.split('')
        
        for (let i = 0; i < tree.length; i += 1) {
            // 다른 스킬일 경우 continue
            if (!skill.includes(tree[i])) continue;
            
            // 선행 스킬일 경우
            if (skill[0] === tree[i]) {
                skill.shift();
                continue;
            }
            
            // 스킬트리에 포함이 되는 스킬이지만, 선행 스킬을 아직 배우지 않은 경우
            if (skill.includes(tree[i]) && skill[0] !== tree[i]) {
                answer -= 1;
                break;
            }
        }
    })
    
    return answer;
}
