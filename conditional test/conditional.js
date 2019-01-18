var age = prompt("What is your age?");

if (age < 0) {
    console.log("You have entered an invalid number.");
}

else if (age == 21) {
    console.log("Happy 21st birthday!!");
}

else if (age % 2 > 0) {
    console.log("Your age is odd");
}

else if ((Math.sqrt(age)) %1===0)
{
    console.log("Perfect square!");
}

else {
    console.log("else");
}
