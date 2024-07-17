// Task1

for(let i=1;i<11;i++){
    console.log(i);
}
// Task2
for(let i=1;i<11;i++){
    console.log(i*5);
}
// Activity2
// Task3
     let g=0;
      let sum=0;
    while(g!=11){
       sum+=g;
       g++;
       
    }
    console.log(sum);
   

// Task4

      const backprinting=
    
      function(){
        let i=10;
        while(i!=0){
        console.log(i);
          i--;
        }
      }
      backprinting();

// Activity 3
// Task5
let c=1;
do{
console.log(c);
c++;
}while(c!=6)
// Task6 
let a=0;
do{
console.log(a);
a++;
}while(a!=6);
let b=0;
let fact=1;
const n=prompt("enter a number");
do{
    if(n==1||n==0){
        fact=1;
        break;
    }

b++;
fact=fact*b;
}while(b!=n);
console.log(fact);

// activity4
// task7

for(let i=1;i<6;i++){
 for(let j=1;j<i+1;j++){
    document.write("*");
 }
 document.write("\n");
}
// task8
for(let i=1;i<11;i++){
    if(i==5){
       continue;
    }
    else{
        console.log(i);
    }

}

// task9
for(let i=1;i<11;i++){
    if(i==7){
        break;
    }
    else{
        console.log(i);
    }

}