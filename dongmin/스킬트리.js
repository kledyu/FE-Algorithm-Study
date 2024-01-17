function solution(skills, skill_trees) {
  let answer = 0;

  // skills에 해당하는 문자만 남김
  const filteredSkillTrees = skill_trees.map((skillTree) => {
    return [...skillTree].filter((skill) => skills.includes(skill)).join("");
  });

  // 스킬트리가 skills의 접두사이면 answer + 1
  filteredSkillTrees.forEach((skillTree) => {
    if (skills.startsWith(skillTree)) answer += 1;
  });

  return answer;
}
