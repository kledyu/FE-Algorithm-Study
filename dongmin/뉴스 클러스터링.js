
function solution(str1, str2) {

  // 알파벳인지 확인하는 함수
  const isAlphabet = (string) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.includes(string);
  };

  // 문자열을 순회돌면서 두 알파벳이 연속된 경우만 배열에 담아 반환하는 함수
  const getArray = (string) => {
    const array = [];
    for (let i = 0; i < string.length - 1; i += 1) {
      if (isAlphabet(string[i]) && isAlphabet(string[i + 1])) {
        array.push(string[i] + string[i + 1]);
      }
    }
    return array;
  };

  // 교집합과 합집합을 구하는 함수
  const getSections = (array1, array2) => {
    const interSection = [];
    const copy1 = [...array1];
    const copy2 = [...array2];

    // 교집합을 구하면서 복사한 두 배열에서 교집합에 속한 원소를 제외
    // 교집합이 완성되면 copy1과 copy2는 서로에 대한 차집합
    array1.forEach((el) => {
      if (copy2.includes(el)) {
        interSection.push(el);
        copy1.splice(copy1.indexOf(el), 1);
        copy2.splice(copy2.indexOf(el), 1);
      }
    });

    // 두 차집합과 교집합을 합쳐 합집합을 만듬
    const unionSection = [...interSection, ...copy1, ...copy2];

    return [interSection, unionSection];
  };

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const array1 = getArray(str1);
  const array2 = getArray(str2);
  const [interSection, unionSection] = getSections(array1, array2);

  console.log(interSection, unionSection);

  return !array1.length && !array2.length
    ? 65536
    : Math.trunc((interSection.length / unionSection.length) * 65536);
}
