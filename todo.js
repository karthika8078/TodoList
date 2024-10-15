// Select the todo list element
const todoListElement = document.getElementById('todo-list');
let completedCount = 0; // Keep track of completed tasks

// Function to fetch todos from the API
function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                // Create a list item for each todo
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center'; // Use 'align-items-center'

                // Create a text node for the todo title
                const todoText = document.createElement('span');
                todoText.className = 'todo-text'; // Apply the CSS class
                todoText.textContent = todo.title;

                // Checkbox to mark the todo as completed
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'form-check-input me-2';
               // checkbox.checked = todo.completed; // Mark as checked if the todo is already completed
                //checkbox.disabled = todo.completed; // Disable the checkbox if it's already completed

                // Update completedCount based on initial checkbox state
                // if (todo.completed) {
                //     completedCount++;
                // }

                // Event listener to handle completion
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        completedCount++;
                    } else {
                        completedCount--;
                    }
                    checkForFiveCompleted(); // Check if 5 tasks are completed
                });

                // Append the text and checkbox to the list item
                li.appendChild(todoText);
                li.appendChild(checkbox);

                // Append the list item to the todo list
                document.getElementById('todo-list').appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching todos:', error));
}

function checkForFiveCompleted() {
    if (completedCount >= 5) {
        alert(`Congrats. ${completedCount} Tasks have been Successfully Completed!`);
    }
}

// Fetch todos when the page loads
window.onload = fetchTodos;





