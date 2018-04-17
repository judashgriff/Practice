function goto(level, button){
  if (typeof button === "string" && typeof level === "number" && 
      (Number(button) >= 0 && Number(button) <= 3) 
      && (level >= 0 && level <= 3)) {
      if ((Number(button) - level).toString().includes(".")) { return 0; }  
    return Number(button) - level;
  }
  return 0;
}

console.log(goto(3,'0.5'));

console.log(1.5.includes().length)