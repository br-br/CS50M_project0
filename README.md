# Project 0

The goal of this project is to practice JavaScript and its paradigms by creating
a TODO app. This app should be able to add TODOs and track the number of total
TODOs as well as the number of unchecked TODOs.

## Instructions
Inside of [index.html](/index.html), you'll find some starter HTML. You shouldn't
need to edit this file at all. Open this file on your computer into any browser
to run the project. Make sure that [script.js](/script.js) and [styles.css](/styles.css)
are in the same local directory. With the file open in your browser, you should
see a `New TODO` button, which `alert`s when clicked. Your goal will be to get
this button to create new TODOs.

Inside [styles.css](/styles.css), you'll find some pre-written CSS for your
convenience. You shouldn't need to edit this file at all, but feel free to if
desired.

[script.js](/script.js) is where most of your work will be done. There is some
starter code for you in the file. The `classNames` variable can be used to link
any elements you create in js with the associated CSS class names. The next 3
lines of code are the HTML elements that you'll need to update when creating new
TODOs. Lastly, you'll see the `addTodo()` function. This gets executed when
creating a new TODO. You should replace the `alert()` call with logic to create
new TODOs.

Good luck!

## Challenge! (Not Required)
If you finish early and are up for a challenge, try adding delete functionality.
This should be in the form of a button within each TODO that removes that TODO
when clicked. 




## My Solution (Description)

### My changes to index.html:
I added the charset meta tag to specify the encoding - otherwise we get an error in the console.
I also added the html language tag and the viewport meta tag (responsivness) according to W3C recommandations.

### My changes to styles.css:
I set the font-family for the entire project to sans-serif and added the classes todo-text, todo-ref and btn-delete.

### My changes to script.js
I introduced the variables itemCount, uncheckedCount and itemRef.
I use a prompt to ask the user for a todo name.
If the user cancels, nothing happens. If the user clicks on "ok", a todoItem, a li element, is created and added to the DOM as a child of the list (ul) and itemCount and checkedItemCount are updated.
The li element contains the following children:
- a checkbox → a click changes the uncheckedCount variable
- a span for the name of the todo item
- a span for the (unique) reference of the todoItem, used to implement the item removal functionality
- a delete button → a click removes the item from the list and updates itemCount and uncheckedItemCount

