function toCamelCase(str){
  if (!str) return str;

  let isCamelCase = str[0] === str[0].toLowerCase();
  let words = str.match(/[A-Za-z]+/g).map(word => word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase());
  
  str = words.join('');
  
  return isCamelCase ? str.slice(0,1).toLowerCase() + str.slice(1) : str;
}