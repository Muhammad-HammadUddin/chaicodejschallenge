let b=prompt("enter a number");
let a= function(){
if(b>0){
    console.log("positive number");

}
else if(b==0){
    console.log("zero");
}
else{
    console.log("negative number");
    }
}

// Task2
let c=prompt("enter a number");
let square=function(){
    console.log(c*c);
}
// Activity2
// Task3
let d=prompt("enter first Number");
let e=prompt("enter second Number");
let f=function(){
    if(d>e){
        console.log(d);
    }
    else{
        console.log(e);
    }
}
// Task4
let g=prompt("enter first String");
let h=prompt("enter second String");

let i=function(){
    console.log(g+h);
}
// Task5
let firstNumber=prompt("enter first number");
let secondNumber=prompt("enter second number");
let sum=()=>{
    console.log(firstNumber+secondNumber);
}
// Task6
let j=prompt("enter string");
let k=prompt("enter word");
let l=()=>{


    for(let i=0;i<j.length;j++){
        if(j[i]==k){
            return true;
        }
        else{
          return false;
        }
    }
}
// Task7
let m=function(a,b=9){
 console.log(a*b);
}
// Task8
let n=function(a,b=18){
   console.log(`Hey ${a} ,Your age is ${b}`);
}
// Task9
function callNTimes(n, func) {
    for (let i = 0; i < n; i++) {
        func(); // Call the provided function
    }
}

// Example usage:
function sayHello() {
    console.log("Hello!");
}

callNTimes(5, sayHello); // Calls sayHello() 5 times, printing "Hello!" each time

// Task10
let p = function(a, b, c = 18) {
    let d = a(c);  // Invoke function 'a' with argument 'c' and store the result in 'd'
    b(d);          // Invoke function 'b' with argument 'd'
};

let firstFun = function(a) {
    return a * a;  // Return the square of 'a'
};

let secondFun = function(b) {
    console.log(b * 2);  // Log 'b' multiplied by 2 to the console
};

// Example usage:
p(firstFun, secondFun, 5);  // Output: 50 (5 * 5 * 2)




