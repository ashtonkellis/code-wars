function mutateMyStrings(stringOne, stringTwo){
  let words = [stringOne];
  
  for (let i in stringOne) {
    let newWord = stringTwo.slice(0 , i) + stringOne.slice(i);
    if (!words.includes(newWord) && stringOne[i] !== stringTwo[i]) words.push(newWord);
  }
  words.push(stringTwo);
  
  return words.map(word => word + '\n').join('');
}