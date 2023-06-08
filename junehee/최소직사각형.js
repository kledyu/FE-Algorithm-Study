function solution(sizes) {
  let sort = sizes.map(([width, height]) => 
    width > height ? [width, height] : [height, width]
  )

  let w = sort.map(v => v[0])
  let h = sort.map(v => v[1])

  return Math.max(...w) * Math.max(...h)
}