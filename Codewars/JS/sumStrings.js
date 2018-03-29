function addition(a, b, acc = '', carry = 0) {
  if (!(a.length || b.length || carry)) return acc.replace(/^0+/, '');

  carry = carry + (~~a.pop() + ~~b.pop());
  acc = carry % 10 + acc;
  carry = carry > 9;

  return addition(a, b, acc, carry);
}

function sumStrings(a, b) {
  if (a === '0' && b === '0') return '0';
  return addition(a.split(''), b.split(''));
}

console.log(sumStrings('123','456'))
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))