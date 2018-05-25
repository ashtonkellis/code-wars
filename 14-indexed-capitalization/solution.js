function capitalize(s,arr){
  return s.split('').map((char, i, w) => arr.includes(i) ? char.toUpperCase() : char).join('');
};