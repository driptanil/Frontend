const fruits = ["orange", "graphs", "apple", "banana"];
const nums = [52, 12, 23, 43, 100];

fruits.sort();
nums.sort();

console.log(fruits); // [ 'apple', 'banana', 'graphs', 'orange' ]
console.log(nums); // [ 100, 12, 23, 43, 52 ]

// sorts the integer value as string values
nums.sort((a, b) => a - b );
// -ve : a, b
// +ve : b, a


console.log(nums) // [ 12, 23, 43, 52, 100 ]