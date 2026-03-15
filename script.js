


// Sum of first n number
let n = 5;
let sum = 0;
for (let i = 0; i <= n; i++) {
    sum = sum + i;
}
console.log("sum of digits :", sum);



// Table of n number
let Y = 12;
for (let i = 1; i < 11; i++) {
    table = Y * i;
    console.log(Y, "X", i, "=", table);
}



// Check for prime number

let X = 5;
if (X == 1) {
    console.log("1 is neither prime nor composite")

} else if (X > 1) {
    for (let i = 2; i <= X / 2; i++) {
        if (X % i == 0) {
            console.log("Its not a prime Number");
            break;
        } else {
            console.log("It is a prime Number");

        }
    }
} else {
    console.log("The number is not a prime number.");
}



// check for factors 

let A = 128;
for (let i = 1; i <= A; i++) {
    if (A % i === 0) {
        console.log("Factor:", i);
    }
}

// Sum of all the digits of a Number

let num = 1234;
let SumDigit = 0;
while (num > 0) {
    let digit = num % 10
    SumDigit += digit;
    num = Math.floor(num / 10);
}
console.log("Sum of digits :", SumDigit);


// Armstrong Number
let J = 153;
let original = J;
let ArmstrongNumber = 0;
while (J > 0) {
    let digit = J % 10
    ArmstrongNumber += digit ** 3;
    J = Math.floor(J / 10);
}

if (original === ArmstrongNumber) {
    console.log("It is Armstrong Number");
} else {
    console.log("It is not Armstrong Number");
}