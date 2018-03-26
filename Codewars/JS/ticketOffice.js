function tickets(peopleInLine){
  let cashBox = { 25: 0, 50: 0, 100: 0 };
  let ans = "YES"

  peopleInLine.forEach(pers => {
    cashBox[pers]++
    console.log(cashBox)
    if (pers === 50) {
        if (cashBox[25] < 1) { ans = "NO"; } 
        cashBox[25]--
    } else if (pers === 100) {
        if (cashBox[50] < 1 && cashBox[25] < 3) { ans = "NO"; }
        if (cashBox[50] > 0) {
            cashBox[50]--;
            cashBox[25]--;
        } else {
            cashBox[25] -= 3;
        }
    }
    console.log("after: ", cashBox)
  });
  return ans;
}

console.log(tickets([25,50,25,100,25,50,25,100,25,25,50,100,25,25,50,100,25,25,25,100]));