// 숫자가 높을 수록 우선순위가 높음!
// 1이 3보다 우선 순위가 높다고 생각해서 한참 고민했네요.

function solution(priorities, location) {
  // location에 해당하는 값이 중요하기 떄문에 아래와 같은 형식으로 바꿈
  // [ {priority: 2, location: 0},
  //   {priority: 1, location: 1},
  //   {priority: 3, location: 2},
  //   {priority: 2, location: 3} ]
  let processQueue = priorities.map((priority, index) => ({
    priority,
    location: index,
  }));

  // 프로세스 완료 카운트
  let processFinishedCount = 0;

  // 프로세스가 완료가 되면 processQueue에서 사라지므로 프로세스가 존재할 때까지 반복문을 돌림
  while (processQueue.length > 0) {
    // 현재 선택한 프로세스
    let currentProcess = processQueue[0];

    // 선택한 프로세스보다 우선순위가 높은 프로세스가 있는지를 확인하는 플래그
    let hasPriority = false;
    for (const process of processQueue) {
      if (currentProcess.priority < process.priority) {
        hasPriority = true;
      }
      // 다른 사람 정답 보니깐  이부분에서 Array.some 사용하면 될 것 같아요.
      //  if (
      //   processQueue.some(
      //     (process) => process.priority > currentProcess.priority
      //   )
      // ) {
      //  hasPriority = true;
      // }
    }

    }

    // 만약 현재 선택한 프로세스보다 우선순위가 높은것이 있다면
    if (hasPriority) {
      // 뒤로 미뤄버림
      processQueue = [...processQueue.slice(1), currentProcess];

      // 만약 현재 선택한 프로세스가 우선수위가 가장 높다면
    } else {
      // 해당 프로세스를 큐에서 삭제
      processQueue = processQueue.slice(1);

      // 프로레스 완료 카운트 증가
      processFinishedCount++;

      // 만약 완료된 프로세스의 location이 우리가 알고 싶어하는 location과 동일하다면
      if (currentProcess.location === location) {
        // 완료 카운트를 바로 리턴
        return processFinishedCount;
      }
    }
  }
}
