// Task1
// Write a program that calculates the size of all elements in an array
// function sumOfArray(arr) {
//     let sum = 0
//     for (const element of arr) {
//         sum += element
//     }
//     return sum
// }
// console.log(sumOfArray([2, 4, 6, 8]));
// console.log(sumOfArray([1, 2, 3, 4, 5]));
// console.log(sumOfArray([]));


// Task2
// Find the maximum element in the array.

// function maxNum(arr) {
//     let minElementOfArr = -1
//     for (const element of arr) {
//         if (element > minElementOfArr) {
//             minElementOfArr = element
//         }
//     }
//     return minElementOfArr
// }
// console.log(maxNum([3, 8, 1, 6, 2]));
// console.log(maxNum([1, 2, 5, 7]));
// console.log(maxNum([1, 2, 3, 4, 5]));


// Task3
// let evenCount = function (arr) {
//     let cnt = 0
//     for (const element of arr) {
//         if (element % 2 == 0)  cnt++
//     }
//     return cnt
// }
// console.log(evenCount([1, 2, 3, 4, 5, 6]));
// console.log(evenCount([2, 4, 6, 8]));
// console.log(evenCount([1, 3, 5, 7, 9]));


// Task4
// Check if a certain element is present in an array.

// let isPresent =  (arr, item) => {
//     return arr.includes(item)
// }
// console.log(isPresent([10, 20, 30, 40, 50], 30));
// console.log(isPresent([1, 2, 3, 4, 5], 7));
// console.log(isPresent([123,222,321], 321));


// Task5
// Find the arithmetic mean all array elements

// function arithmetic(array) {
//     let sum = 0
//     for (const element of array) {
//         sum += element
//     }
//     return ~~(sum/array.length)
// }
// console.log(arithmetic([2, 4, 6, 8]));
// console.log(arithmetic([1, 4, 6, 9, 10]));
// console.log(arithmetic([2, 4]));

//====================================

// let styles   = ['Джаз', 'Блюз']

// console.log(styles.push('Рок-н-ролл'));
// styles[~~((styles.length-1)/2)] = 'Классика'

// console.log(styles.shift());
// console.log(styles);
// console.log(styles.unshift('Рэп ', 'Регги '));
// console.log(styles);

// let arr = ['I', 'learn', 'JS', 'прямо', 'сейчас', 'I']

let str = 'salom'

console.log(str.split('', 2));

