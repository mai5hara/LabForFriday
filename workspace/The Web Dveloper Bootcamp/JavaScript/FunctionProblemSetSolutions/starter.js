function isEven(num) {
    return num % 2 === 0;
}

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function kebabToSnake(str) {
	var newStr = str.replace(/-/g , "_");
	return newStr;
}