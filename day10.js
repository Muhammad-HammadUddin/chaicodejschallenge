let task1=document.querySelector('.task1');
let task1P=document.querySelector('.task1P');

task1.addEventListener('click',function(e){
    task1P.textContent="text content changed"
})
// Task2
console.log("bye")
let task2 = document.querySelector('.task2');

task2.addEventListener('dblclick', function() {
    task2.style.display = 'none';
});
// Task3
let task3 = document.querySelector('.task3');
task3.addEventListener('mouseover',function(){
    task3.style.backgroundColor="red"
})
// task4
task3.addEventListener('mouseout',function(e){
    task3.style.backgroundColor="aqua"
});
// task5
let task5 = document.querySelector('.task5');
task5.addEventListener('keydown',function(e){
console.log(e.keyCode);
});
// task6
let task6 = document.querySelector('.task6');
let task6P=document.querySelector('.task6P');
task6.addEventListener('keyup',function(e){
    console.log("hello")
    task6P.textContent=task6.value;
})
// task7
let task7=document.querySelector('.task7');
let task71=document.querySelector('task7Input1');
let task72=document.querySelector('task7Input2');
let task7btn=document.querySelector('.task7btn');
task7btn.addEventListener('click',function(e){
    e.preventDefault();
})
// task8
let task8=document.querySelector('.task8');
let task8p=document.querySelector('.task8p');

task8.addEventListener('change',function(e){
    task8p.textContent=`You selected ${e.target.value}`
})
// task9
let task9=document.querySelector('.task9');

task9.addEventListener('click',function(e){
    console.log(e.target.innerHTML)
})
// task10
const myList = document.getElementById('myList');
const addButton = document.getElementById('addButton');
const selectedItem = document.getElementById('selected-item');

// Attach a click event listener to the parent element (myList)
myList.addEventListener('click', function(e) {
  // Check if the clicked element is a list item (li)
  if (e.target.tagName === 'LI') {da
    // Update the selected item text
    selectedItem.textContent = `Selected item: ${e.target.textContent}`;
  }
});

// Add a click event listener to the add button
addButton.addEventListener('click', function() {
  // Create a new list item
  const newItem = document.createElement('li');
  newItem.textContent = `New item ${Date.now()}`;

  // Append the new list item to the parent element (myList)
  myList.appendChild(newItem);
});

