// let book={
//     name:"abc",
//     author:"xyz",
//     year:1998,
//     task3:function(){
//          console.log(this.name);

//          console.log(this.year)
//     },
//     task4:function(y){
//              this.year=y;
//     }
    
// }

// book.task4(199);
// book.task3();



// console.log(book.name)
// console.log(book.author)
// console.log(book.year)

// Task5
// let library={
//     name:"abc",
//     books:[
//         {name:"book1",author:"xyz",year:1998,title:"a"},
//         {name:"book2",author:"x",year:1998,title:"b"},
//         {name:"book3",author:"xy",year:1998,title:"c"},
//     ]
// }
// // Task6
// // console.log(library);
// // console.log(library.name);

// const printme=library.books.forEach(element => {
//     console.log(element.title);
// });

// Task 7
// let book={
//     name:"abc",
//     author:"xyz",
//     year:1998,
//     task3:function(){
//          console.log(this.name);

//          console.log(this.year)
//     },
//     task4:function(y){
//              this.year=y;
//     }
    
// }

// book.task4(199);
// book.task3();
// Task 8
let book={
    name:"abc",
    author:"xyz",
    year:1998,
    task3:function(){
         console.log(this.name);

         console.log(this.year)
    },
    task4:function(y){
             this.year=y;
    }
    
}

// for (const key in book) {
//    console.log(key);
//    console.log(book[key]);
// }
// Task 9
Object.keys(book).forEach(key => {
    console.log(key);
});
Object.values(book).forEach(function(value){
 console.log(value);
})















