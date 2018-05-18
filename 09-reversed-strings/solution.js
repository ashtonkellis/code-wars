function solution(str){
  let output=''
  
  str.split('').forEach(char => {
    output = char + output;
  })
  
  return output;
}