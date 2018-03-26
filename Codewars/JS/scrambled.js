// function scramble(str1, str2) {
//   let scrambled = str1.split('');
//   const word = str2.split('');
//   return word.every(e => {
//     const charIndex = scrambled.findIndex(f => { return f === e } )
//     if (charIndex === -1) { return false; }
//     scrambled.splice(charIndex, 1);
//     return true;
//   });
// }

function scramble(str1, str2) {
  const word = str2.split('');
  let obj = {}

  str1.split('').forEach(e => {
    obj[e] ? obj[e]++ : obj[e] = 1;
  })

  return word.every(e => {
    if (!obj[e] || obj[e] < 1) { return false; }
    obj[e]--
    return true;
  });
}

console.log(scramble('scriptsjava','javascripts'));