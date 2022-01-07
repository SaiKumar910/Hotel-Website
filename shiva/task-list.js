//Task List APP
let taskFormEl = document.querySelector('#form-task');
taskFormEl.addEventListener('submit' , function(event){
    event.preventDefault();


    let taskInputEl = document.querySelector('#input-item');
    let task = taskInputEl.value.trim();
   // Get  Task from LocalStorage
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [] ;
    taskList.unshift(task);
    //Set to LocalStorage
    localStorage.setItem('tasks' , JSON.stringify(taskList));
    displayTask();

    Window.reload();
});

//Display Tasks
    let displayTask = () => {
        let taskListEl = document.querySelector('#task-list');
        let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [] ;
        if(taskList.length  !== 0){
          let eachTask = '';
          for(let task of taskList){
              eachTask +=   `<li class="list-group-item list-group-item-action list-group-item-warning">
                             <span class="font-weight-bold">${task}</span>
                             <button class="close">
                             <p class="hello"> Remove </p>
                             </button>
                             </li>`;
          }
          taskListEl.innerHTML = eachTask;
        }
    };
    displayTask();

    //Remove Task
    let taskListEl = document.querySelector('#task-list');
    taskListEl.addEventListener('click' , function(event){
      let targetElement = event.target;
      if(targetElement.classList.contains('hello')){
          let actualEl = targetElement.parentElement.parentElement  ;
          let selectedTask = actualEl.innerText;
          
     //get tasks from Local  Storage
     let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [] ;
     taskList = taskList.filter(function(task){
         return task.trim() !== selectedTask.trim();

     });
        localStorage.setItem('tasks' , JSON.stringify(taskList)); 
        displayTask();
      }
    });

    //Its Not Completed
    