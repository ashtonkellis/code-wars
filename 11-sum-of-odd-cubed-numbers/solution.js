function cubeOdd(arr) {
  if (arr.some(num => typeof num !== 'number')) return undefined;
  
  return arr.map(x => Math.abs(x) % 2 === 1 ? Math.pow(x, 3) : 0)
            .reduce((acc, cur) => acc + cur);
}