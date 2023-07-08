let a1 = 4;
let a2 = "akash"
console.log(a1*a2);//Number
let res = a1*a2;

console.log(typeof res);//Nan


function sanitise(x) {
    if (isNaN(x)) {
      return NaN;
    }
    return x;
  }
  
  console.log(sanitise('1'));
  // Expected output: "1"
  
  console.log(sanitise('NotANumber'));
  // Expected output: NaN