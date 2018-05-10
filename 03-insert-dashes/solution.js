function insertDash(num) {
  const output = [];

  num.toString().split('').forEach((element, i, w) => {
    output.push(element);
    if (element % 2 && w[i + 1] % 2) output.push('-');
  });
  
  return output.join('');
}