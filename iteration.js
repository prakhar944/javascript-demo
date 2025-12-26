// for loop //

for (let index = 0; index < array.length; index++) {
    const element = array[index];    
}
// BREAK AND CONTINUE //

for (let index = 2; index < 20; index++) {
if (index===5) {
console.log(" 5 is detected");
break;
}
console.log(` value of i is ${index}`);
}

for (let index = 2; index < 20; index++) {
if (index===5) {
console.log(" 5 is skipped");
continue;
}
console.log(` value of i is ${index}`);
}

// WHILE LOOP //
let i=0
while ( i<=10 ) {
console.log(`value of i is ${i}`);
i++    
}

// DO WHILE LOOP //

let score=4
do {
    console.log(score);
    score++;
} while (score<=9 );