function refound(payed, toPay) {
    let refAm = payed - toPay;
    let currency = [20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5];
    let refound = {}

    if (refAm.toString().slice(-1) < 3 || refAm.toString().slice(-1) === 6 || refAm.toString().slice(-1) === 7) {
        refAm = Math.floor(refAm / 5) * 5;
    } else {
        refAm = Math.ceil(refAm / 5) * 5;
    }

    for (i = 0; i < currency.length; i++) {
        if (refAm >= currency[i]) {
            refound[currency[i]] = Math.floor(refAm / currency[i]) 
            refAm -=  Math.floor(refAm / currency[i])*currency[i];
        }
    }
    return refound;
}

let payed = 10000;
let toPay = 5737;

console.log(refound(payed, toPay))