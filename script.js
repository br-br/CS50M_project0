const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
  TODO_TEXT: 'todo-text',
  TODO_REF: 'todo-ref',
  DELETE_BUTTON: 'btn-delete'
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0
let uncheckedCount = 0
let itemRef = 0

function updateItemCount(change) {
  itemCount += change
  itemCountSpan.innerHTML = itemCount
}

function updateUncheckedCount(change) {
  uncheckedCount += change
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

  const checkbox = document.createElement('input')
  checkbox.className = classNames.TODO_CHECKBOX
  checkbox.type = 'checkbox'
  checkbox.onchange = toggleCheckbox

  const todoTextSpan = document.createElement('span')
  todoTextSpan.className = classNames.TODO_TEXT
  todoTextSpan.setAttribute('contenteditable', 'true')
  todoTextSpan.innerHTML = name || 'Unnamed TODO'

  const refSpan = document.createElement('span')
  refSpan.className = classNames.TODO_REF
  refSpan.innerHTML = ' (ref: ' + itemRef + ')'

  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'X'
  deleteButton.className = classNames.DELETE_BUTTON
  deleteButton.onclick = removeTodo
  deleteButton.ref = itemRef


  const li = document.createElement('li')
  li.className = classNames.TODO_ITEM
  li.setAttribute('id', itemRef);
  li.appendChild(checkbox)
  li.appendChild(todoTextSpan)
  li.appendChild(refSpan)
  li.appendChild(deleteButton)

  return li
}

function toggleCheckbox() {
  updateUncheckedCount(this.checked ? -1 : 1)
}

function removeTodo() {
  console.log('remove item clicked, ref is: ' + this.ref)

  const toRemove = document.getElementById(this.ref)
  list.removeChild(toRemove)
}