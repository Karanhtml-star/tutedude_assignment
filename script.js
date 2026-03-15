let A = Number(prompt("Enter first number:"));
let B = Number(prompt("Enter Second number:"));
let division = () => {
    let div = A / B
    return div;
}

const divide = new Promise((resolve, reject) => {
    if (B !== 0) {
        resolve(division());
    } else {
        reject("Error: invalid second value");
    }
});

divide
    .then((result) => {
        console.log("The division of Two number is ", result)
    })
    .catch((error) => {
        console.log(error);
    });