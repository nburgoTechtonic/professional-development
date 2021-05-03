// Challenge can be found here: https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  if (walk.length > 10 || walk.length < 4) return false;
  const values = { 'n': 1, 's': -1, 'e': 1, 'w': -1 };
  let northingValue = 0;
  let eastingValue = 0;
  walk.forEach(block => {
    if (values[block]) {
      if (block === 'n' || block === 's') {
        northingValue += values[block];
      } else {
        eastingValue += values[block];
      } 
    }
  });
  if (northingValue === 0 && eastingValue === 0) return true;
  return false;
}