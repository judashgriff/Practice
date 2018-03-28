function firstNonRepeatingLetter(s) {
  let dict = {}
  s.split('').forEach(e => { dict[e] ? dict[e]++ : dict[e] = 1; });
  trues = [];
  Object.keys(dict).forEach(e => {
    if (dict[e] === 1) { trues.push(e); }
  });
  if (trues[0] === undefined) { return ""; }
  return trues[0];
}

console.log(firstNonRepeatingLetter(''));
