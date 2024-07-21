const task1=document.getElementById('task1');
task1.innerHTML="text changed";
// Task2
const task2=document.getElementsByClassName('task2');
task2[0].style.backgroundColor='orange'
// Task3
const a=document.createElement('div');
a.innerHTML="Task3"
a.style.backgroundColor='red';
const body=document.querySelector('body');
body.appendChild(a);
// Task4
const ul=document.querySelector('ul');
const li=document.createElement('li');
li.innerHTML="added"
ul.appendChild(li);

// Task5
const remove=document.querySelector('.remove');
remove.remove();
// Task6
const removeLast=document.getElementsByClassName('ul')
ul.lastChild.remove();
// Task7
const img=document.querySelector('img');
img.src=''
// Task8
const removeclass=document.querySelector('.removeclass');
removeclass.classList.remove('removeclass');
removeclass.classList.add("helloclass");
// Task9
const button=document.querySelector('.task9');
button.addEventListener('click',function(){
const para=document.querySelector('p');
para.innerHTML="changed"
})
// Task10
const border=document.querySelector('.border');
border.addEventListener('mouseover',function(){
   border.style.border=' 3px solid purple'
})