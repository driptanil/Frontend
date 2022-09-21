const val = 5;
let sum = 0;

for (let i = 1; i <= val; i++) {
    sum += i;
}

console.log(sum)

// ------------------------ // 

const arr = [5, 3, 1, 2, 4];

console.log()
for (let num of arr) {
    console.log(num);
}

// ------------------------ // 

console.log()
arr.forEach(function (num, index){
    console.log(num, index)
}) 

// ------------------------ // 

const user = {
    name: 'Driptanil',
    age: 19,
    prof: 'Student'
}


console.log()
for (let x in user) {
    console.log(x, user[x]);
}

// ------------------------ // 

let i = 5;
sum = 0;
while (i >= 0) {
    sum += i;
    i--;
}
console.log("\n" + sum);

// ------------------------ // 
do {
    i++;
    sum += i;
} while (i < 5);

console.log("\n" + sum);
