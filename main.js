const reverseString = (str) => str.split('').reverse().join('');

const countCharacters = (str) => str.length;;


const capitalizeWords = (sentence) => {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
};

const findMax = (array) => {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
};
const findMin = (array) => {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
};
const sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};
const filterArray = (array, condition) => {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
};
const factorial = (n) => {
    if (n < 0) return undefined;
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const fibonacci = (n) => {
    const sequence = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) sequence.push(0);
        else if (i === 1) sequence.push(1);
        else sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
};