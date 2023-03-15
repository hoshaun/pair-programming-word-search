/*
Contributors:
- Shaun Ho
(Partner did not respond so I was told to do this alone)
*/

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  
  const horizontalJoinBackwards = letters.map(ls => ls.reverse().join(''));
  for (const l of horizontalJoinBackwards) {
    if (l.includes(word)) return true;
  }
  
  const verticalJoinBackwards = transpose(letters).map(ls => ls.reverse().join(''));
  for (const l of verticalJoinBackwards) {
    if (l.includes(word)) return true;
  }
  
  return false;
};
  
const transpose = function(matrix) {
  let array = [];
    
  for (const row of matrix) {
    for (const col in row) {
    
      if (!array[col]) {
        array.push([]);
      }
    
      array[col].push(row[col]);
    }
  }
    
  return array;
};
  
module.exports = wordSearch;