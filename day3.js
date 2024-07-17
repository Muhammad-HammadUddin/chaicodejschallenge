// Task 1: Determining Positive, Negative, or Zero
let num = prompt("Enter a number");

if (num < 0) {
    console.log("negative");
} else if (num > 0) {
    console.log("positive");
} else {
    console.log("zero");
}

// Task 2: Eligibility to Vote
let age = prompt("Enter your age");

if (age < 18) {
    console.log("You are not eligible to vote");
} else {
    console.log("You are eligible to vote");
}

// Task 3: Finding the Greatest Number
let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
let num3 = prompt("Enter the third number");

if (num1 > num2 && num1 > num3) {
    console.log("num1 is greater");
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 is greater");
} else {
    console.log("num3 is greater");
}

// Task 4: Day of the Week using Switch Statement
let num4 = prompt("Enter a number between 1 and 7");

switch (parseInt(num4)) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input");
        break;
}

// Task 5: Grade Classification
let mathnum = prompt("Enter a number representing your score");

if (mathnum > 80) {
    mathnum = 1;
} else if (mathnum > 60 && mathnum <= 80) {
    mathnum = 2;
} else if (mathnum > 40 && mathnum <= 60) {
    mathnum = 3;
} else if (mathnum <= 40) {
    mathnum = 4;
}

switch (mathnum) {
    case 1:
        console.log("A");
        break;
    case 2:
        console.log("B");
        break;
    case 3:
        console.log("C");
        break;
    case 4:
        console.log("D");
        break;
    default:
        console.log("Invalid input");
        break;
}

// Task 6: Odd or Even Number
let checknum = prompt("Enter a number");

if (checknum % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

// Task 7: Leap Year Calculation
let leapyear = prompt("Enter a year");

if ((leapyear % 4 === 0 && leapyear % 100 !== 0) || leapyear % 400 === 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}
