let P = 1000
let r = 0.02
let n = 1
let t = 2
let A = P * ((1 + (r / n)) ** (n * t))
let CI = A - P

console.log("The Amount after the Compound Intrest is :", A);
console.log("Compound intrest after", t, "years is :", CI);
