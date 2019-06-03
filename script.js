const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
  TODO_TEXT: 'todo-text',
  TODO_REF: 'todo-ref',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0
let uncheckedCount = 0
let itemRef = 0

function updateItemCount(difference) {
  itemCount += difference
  itemCountSpan.innerHTML = itemCount
}

function updateUncheckedCount(difference) {
  uncheckedCount += difference
  uncheckedCountSpan.innerHTML = uncheckedCount
}

function updateItemRef() {
  itemRef += 1
}

function newTodo() {
  let name = prompt("Give your task a name. (You may edit it later...)", "Do Something New...")

  const todo = createTodoItem(name)
  list.appendChild(todo)
  updateItemCount(1)
  updateUncheckedCount(1)
  updateItemRef()
}

function createTodoItem(name) {

  const todoTextSpan = document.createElement('span')
  todoTextSpan.className = classNames.TODO_TEXT
  todoTextSpan.setAttribute('contenteditable', 'true')
  todoTextSpan.innerHTML = name || 'Unnamed TODO'



  const li = document.createElement('li')
  li.className = classNames.TODO_ITEM
  li.appendChild(todoTextSpan)

  return li
}