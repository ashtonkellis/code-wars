function reachDestination(distance, speed) {
  let halfHours = Math.round(distance / speed * 2);
  let hours = (halfHours / 2)
  
  if (hours % 1 !== 0) hours = hours.toFixed(1);
  
  let plural = hours === 1 ? '' : 's';
  
  return `The train will be there in ${hours} hour${plural}.`
}