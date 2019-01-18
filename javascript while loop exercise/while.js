var counter = 0;

console.log("1. Print all numbers between -10 and 19");
counter = -10;
while (counter <= 19) {
    console.log(counter);
    counter = counter + 1;
}

console.log("2. Print all even numbers between 10 and 40");
counter = 10;
while (counter <= 40) {
    if(counter % 2 === 0) {
        console.log(counter);
    }
    counter = counter + 1;
}

console.log("3. Print all odd numbers between 300 and 333");
counter = 300;
while (counter <= 333) {
    if(counter % 2 !== 0) {
        console.log(counter);
    }
    counter = counter + 1;
}

console.log("4. Print all numbers divisible by 5 AND 3 between 5 and 50");
counter = 5;
while (counter <= 50) {
    if((counter % 5 === 0) && (counter % 3 === 0)) {
        console.log(counter);
    }
    counter = counter + 1;
}