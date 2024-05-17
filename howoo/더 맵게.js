class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 해당힘(인데스)의 부모의 인덱스 리턴함
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // 왼쪽 자식 노드 인덱스는 부모의 2배 +1
  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  // 오른쪽 자식 노드 인덱스는 부모의 2배 +2
  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  // 교환
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // 삽입
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // 힙화 시키기
  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // 최소힙 값을 없에고 다시 힙트리를 생성
  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
  성
    const newScoville = leastSpicy + secondLeastSpicy * 2;
    // 힘에 넣는다.
    minHeap.insert(newScoville);
    mixCount++;
  }

  return minHeap.peek() >= K ? mixCount : -1;
}
