// function firstNonRepeatingLetter(s) {
//   let dict = {}
//   s.split('').forEach(e => { dict[e] ? dict[e]++ : dict[e] = 1; });
//   trues = [];
//   console.log(dict)
//   Object.keys(dict).forEach(e => {
//     if (dict[e] === 1 && (!dict[e.toLowerCase()] || !dict[e.toUpperCase()])) { trues.push(e); }
//   });
//   if (trues[0] === undefined) { return ""; }
//   return trues[0];
// }

function firstNonRepeatingLetter(s) {
  let low = s.toLowerCase();
  console.log(low)
  for (let i = 0; i < low.length; i++)
    if(low.indexOf(low[i]) === low.lastIndexOf(low[i]))
      return s[i];
  return "";
}

console.log(firstNonRepeatingLetter('HThomas'));
