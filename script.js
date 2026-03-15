let arr = [4, 8, 2, 11, 6, 7, 10]

// Function For Max Number in Array
function MaxNumber(arr) {
    let Max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (Max < arr[i]) {
            Max = arr[i]
        }
    }

    console.log("Maximum number:", Max);
}

MaxNumber(arr);



// Function For Sum of all elements in Array



let Summmation = function (arr) {
    let Sum = 0

    for (let j = 0; j < arr.length; j++) {
        Sum += arr[j]
    }

    return Sum
}

console.log("Sum of all Elements in array:", Summmation(arr));




// Count of odd number in a array

let CountOdd = (arr) => {
    let odd = 0;
    for (let n = 0; n < arr.length; n++) {
        if (arr[n] % 2 !== 0) {
            odd++;
        }
    }
    return odd;
}

console.log("Number of odd elements in array:", CountOdd(arr));

