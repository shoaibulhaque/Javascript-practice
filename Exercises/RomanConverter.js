function convertToRoman(num) {
 const roman_w = {
   0: "",
   1: "I",
   2: "II",
   3: "III",
   4: "IV",
   5: "V",
   6: "VI",
   7: "VII",
   8: "VIII",
   9: "IX",
   10: "X",
   1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL'
 }

 const spaces = ["thousand", "hundred", "ten", "unit"];
 let romStr = "";
 let numStr = num.toString();
 function cal_units(numStr){
  let j = 3;
  const container = [];
  for (let i = numStr.length - 1 ; i >= 0; i--) {
    if (parseInt(numStr[i]) == 0) {
      container.push("");
      j--;
    }
    else {
      container.push(spaces[j]);
      j--;
    }
  }
  return container.reverse();
}

const units = cal_units(numStr);
console.log(units);

for (let i = 0; i < units.length; i++) {
  if (units[i] == "thousand"){
    romStr += "M".repeat(numStr[i]);
  }
  else if (units[i] == "hundred") {
    if (parseInt(numStr[i]) < 4 && parseInt(numStr[i] > 0)) {
      romStr += "C".repeat(numStr[i]);
    }
    else if ( 4 < parseInt(numStr[i]) && parseInt(numStr[i]) < 9) {
      romStr += "D"
      if (parseInt(numStr[i]) > 5) {
        let tmpStr = parseInt(numStr[i]) - 5;
        romStr += "C".repeat(tmpStr);
      }
    }
    else if (parseInt(numStr[i]) == 9) {
      romStr += "CM"
    }
    else if (parseInt(numStr[i]) == 4) {
      romStr += "CD";
    }
  }
  else if (units[i] == "ten") {
    if (1 <= parseInt(numStr[i]) && parseInt(numStr[i]) < 4) {
      romStr += "X".repeat(numStr[i]);
    }
    else if (parseInt(numStr[i]) < 5 && parseInt(numStr[i]) > 0) {
      romStr += "XL";
    }
    else if (parseInt(numStr[i]) < 9 && parseInt(numStr[i]) > 0) {
      romStr += "L";
      let tmpStr2 = parseInt(numStr[i]) - 5;
      romStr += "X".repeat(tmpStr2);
    }
    else {
      romStr += "XC";
    }
  }
  else {
    romStr += roman_w[numStr[i]];
  }
}

return romStr;

}

console.log(convertToRoman(2014));

