function isNice(arr){
  for (let n of arr) {
    if (!arr.includes(n -1) && !arr.includes(n + 1)) return false
  }
  
  return arr.length !== 0;
}