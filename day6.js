// Task1
let myArr=[1,2,3,4]
console.log(myArr);

// Task2
console.log(myArr[0]);
console.log(myArr[myArr.length-1]);
// Task3
myArr.push(6);
console.log(myArr)
// Task4
myArr.pop();
console.log(myArr)
// Task5
myArr.shift();
console.log(myArr)
// Task6
myArr.unshift(0);
console.log(myArr)
// Task7
const numbers=[1,3,5,7,9];
const doubleNumbers=numbers.map(function(num){
    return num*2;
})
// Taksk8
const evenNum=[1,2,3,4,5,6,7,8];
const checkEven=evenNum.filter(num=>num>3)

// Task9
const arr=[1,2,3,4,5,6,7,8,9];
const newArr=arr.reduce(function(accumlator,currentValue){
    return accumlator+currentValue;
},0)
// Task10
for(let i=0;i<myArr.length;i++){
    console.log(myArr[i]);
}
// Task11
myArr.forEach(arr => {
    console.log(arr);
});