
// add current date
window.onload= function(){
    setInterval(function(){
        var date=new Date();
        var displayDate = date.toLocaleDateString();

        document.getElementById("date").innerHTML=displayDate;
    }, 1000);
}

// selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".add-btn");
const todoList=document.querySelector(".list");
const filterOption=document.querySelector(".filter-todo")

// event listners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo);

// functions
function addTodo(event){
    event.preventDefault();

    // create a div
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");

    // create li
    const newTodo=document.createElement("li");
    newTodo.classList.add("todo-items");
    newTodo.innerText=todoInput.value;
    todoDiv.appendChild(newTodo);

  

    // created a checkbtn
    const completedButton=document.createElement("button");
    completedButton.classList.add("completed-btn");
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedButton);

    // create trash btn
    const trashButton=document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);

    // append newdiv to the ul
    todoList.appendChild(todoDiv);

    todoInput.value='';

}

function deleteCheck(e){
    const item=e.target;
    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        todo.classList.add("fall");

        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }
    if(item.classList[0]==="completed-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos=todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display='flex';
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display='flex';
                }else{
                    todo.style.display='none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display='flex';
                }else{
                    todo.style.display='none';
                }
                break;
        }
    })
}

