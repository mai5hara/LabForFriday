function printReverse(arr) {
    console.log(arr);
    let reverse = arr.reverse();
    console.log(reverse);
}

function isUniform(arr) {
    let first = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}

function sumArray(arr) {
    let total = 0;
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}

function maxArray(arr) {
    let max = arr[0];
    for( let i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}