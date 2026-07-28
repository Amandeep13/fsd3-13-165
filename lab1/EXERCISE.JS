const toWords = (digit)=>{
    switch(digit){
        case 1:
    return "one";

    case 2:
    return "two";
    
        case 3:
    return "three";
    
        case 4:
    return "four";
        case 5:
    return "five";
        case 6:
    return "six";
        case 7:
    return "seven";
        case 8:
    return "eight";
case 9:
   return "zero";
}
};
console.log(toWords(5))
console.log(toWords(3))
console.log(toWords(7))

const rollNum="236781";
const digit =string(rollNum).split("");
console.log(digits);
let inWords="";
digits.forEach((d) => {
    inWords +=" " + toWords(Number(d));
});
    console.log(toWords(d));

