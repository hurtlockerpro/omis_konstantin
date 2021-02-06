
let input = document.querySelector('form[name="todo"] > input[type="text"]')
let btn = document.querySelector('form[name="todo"] > button[type="button"]')
let todosDiv = document.getElementById('todos')

let todos = [];

btn.addEventListener('click', event => {
    // TODO:  create logic
   todos.push(input.value)
   drawTodos()
})

function deleteTodoItem (index){
    todos.splice(index, 1)
    drawTodos()
}

function drawTodos(){

    let resultHTML = ''
    for (let index = 0; index < todos.length; index++) 
    {
        resultHTML += `<div class='todoItem'>${ todos[index] } <button onclick="deleteTodoItem(${index})">-</button></div>`
    }
    todosDiv.innerHTML = resultHTML
}