// Task1
let name="hammad";
let age=20;
let print=`My name is${name} and age is ${age}`;
console.log(print);
// Task2
// let name = 'Alice';
// let age = 30;
// let occupation = 'Engineer';

// // Creating a multi-line string using template literals
// let message = `
//   Hello ${name},
  
//   Welcome to our website! We are glad to have you here.

//   Here are your details:
//   - Name: ${name}
//   - Age: ${age}
//   - Occupation: ${occupation}

//   Enjoy your time here!

//   Regards,
//   The Team
// `;

// console.log(message);
// Task3
let arr=[1,2,3,4];
let [h,a]=arr;
console.log(h,a);
// Task4
let book={
    title:"Harry Potter",
    author:"J.K.Rowling",
}
let {title,author}=book;
console.log(title,author);

// Task5
let b=[...arr,1,2,3];
console.log(b);
// Task6
function add(...a){
    let sum=0;
    for(let i=0;i<a.length;i++){
        sum+=a[i];
    }
    console.log(sum);
}

add(1,2,3,4,5,6,7,8,9);
// Task7
function product(a,b=1){
     return a*b;
}
console.log(product(2,3));
console.log(product(2));
// Task8
let n="y";
let d="n";
let obj={n,d,met(){
    console.log("Hello World");
}}
console.log(obj);
// Task9

let person={
    [`$first${n}`]:n,
    [`$last${d}`]:d
};
console.log(person);

