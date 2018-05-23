function high(x){
  
  function sumWord (word) {
    return word.toUpperCase().split('').reduce((acc, char) => acc + char.charCodeAt(0) - 64, 0)
  }
  
  let words = x.split(' ')
               .map(word => [word, sumWord(word)])
               .sort((a, b) => (a[1] - b[1]) || a[0] < b[0]);
  console.log(words);
  return words.pop()[0];
}