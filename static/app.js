document.addEventListener('DOMContentLoaded', function() {
   const taskForm = document.getElementById('task-form');
   const taskInput = document.getElementById('task-input');
   const taskList = document.getElementById('task-list');
 
 
   // Function to create a new list item for a task
   function createTaskElement(taskText) {
       // Create list item
       const listItem = document.createElement('li');
       listItem.textContent = taskText;
 
 
       // Create delete button
       const deleteButton = document.createElement('button');
       deleteButton.textContent = 'Delete';
       deleteButton.classList.add('delete-btn');
       deleteButton.setAttribute('data-task', taskText);
 
 
       // Add event listener to delete button
       deleteButton.addEventListener('click', function() {
           listItem.remove(); // Remove the task from the list
       });
 
 
       // Append delete button to list item
       listItem.appendChild(deleteButton);
 
 
       return listItem;
   }
 
 
   // Event listener for task form submission
   taskForm.addEventListener('submit', function(event) {
       event.preventDefault(); // Prevent default form submission behavior
 
 
       const taskText = taskInput.value.trim(); // Get the task text and trim whitespace
 
 
       if (taskText !== '') {
           const listItem = createTaskElement(taskText); // Create list item for the task
           taskList.appendChild(listItem); // Append list item to task list
           taskInput.value = ''; // Clear the input field
       }
   });
 
 
   // Event delegation for delete buttons (to handle dynamically created buttons)
   taskList.addEventListener('click', function(event) {
       if (event.target.classList.contains('delete-btn')) {
           event.target.parentElement.remove(); // Remove the task list item when delete button is clicked
       }
   });
});
