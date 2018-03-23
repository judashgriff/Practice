function validParentheses(parens){
  if (parens.split('')[0] === ")" || parens.split('')[parens.length - 1] === "(") { return false }
  let sum = new Number;
  parens.split('').forEach(p => p === "(" ? sum++ : sum--);
  return sum === 0;
}

console.log(validParentheses( "())(" ));
console.log(validParentheses( "()" ));
