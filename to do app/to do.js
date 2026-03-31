
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];// it checks if there is saved data; if not, it uses an empty array.

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let tododate=dateElement.value;
  todoList.push({item: todoItem, dueDate: tododate});
  inputElement.value='';
  dateElement.value='';
  displayItems();
  localStorage.setItem('todoList', JSON.stringify(todoList));

}
function displayItems(){
  let containerElement=document.querySelector('.todo-container');
  let newHtml='';
  for(let i=0;i<todoList.length;i++){
    // let item=todoList[i].item;
    // let dueDate= todoList[i].dueDate;

    let {item,dueDate}=todoList[i]; //destructuring of array
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="button-delete" onclick="todoList.splice(${i},1); localStorage.setItem('todoList', JSON.stringify(todoList)); displayItems();" >Delete</button> 
    `;
    //JSON.stringify: localStorage only stores strings, so we convert your array of objects into a string format.
    //JSON.parse: This converts the string back into a JavaScript array so you can work with it again.
    //span added kyuki humara task aur delete button ek hi line me aa jaye(inline element)
  }
  containerElement.innerHTML=newHtml;//delete karne ke baad puri html dobara banti hai aur yaha replace ho jati hai

}