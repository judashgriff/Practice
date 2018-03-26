const countBits = function(n) {
    let bits = 0;
    (n >>> 0).toString(2).split('').forEach(i => { i === '1' ? bits++ : null });
    return bits
};

console.log(countBits(9))