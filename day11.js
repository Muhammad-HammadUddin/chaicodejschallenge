const promise=function(){
    return new Promise((resolve, reject) => {
    setTimeout(function(){
      console.log("bye resolved");
    },1000)
    });
}
promise();

// Task2
try{
    const task2=new Promise((resolve,reject)=>{
        setTimeout(function(){
            reject(new Error('Timeout error'));
        },2000
    )
    
    
})
task2.catch((error)=>{
    console.log(error.message);
});
}catch(error){
    console.log(error);
}
// Task4
 async function addtwonums(){
    const task4=new Promise((resolve)=>{
        setTimeout(function(){
            resolve(2+2);
        },1000
    )
    })
    const result= await task4;
    console.log(result);
}
addtwonums();
// Task5
async function subtwonums(){
    try {
        const task5=new Promise((resolve,reject)=>{
            setTimeout(function(){
                reject(new Error("bye"));
            },1000)
        })
        const result= await task5;
        
    } catch (error) {
        console.log(error.message)
    }
   
}
subtwonums();
// Task7
async function fetchApi(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchApi('https://api.example.com/data');
//   Task8
// const promises=[
//     fetchData('https://api.example.com/data1'),
//   fetchData('https://api.example.com/data2'),
//   fetchData('https://api.example.com/data3')
// ];
// Promise.all(promises).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })
// const promises=[
//     fetchData('https://api.example.com/data1'),
//   fetchData('https://api.example.com/data2'),
//   fetchData('https://api.example.com/data3')
// ];
// Promise.race(promises).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })