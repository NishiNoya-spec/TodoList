import { lists, listSaveData } from "./data/lists.js";
import { renderList } from './renderList.js';

export function addTask() {

  document.querySelectorAll('.js-add-todo-task').forEach((buttonAddTask) => {
    buttonAddTask.addEventListener('click', () => {
      lists.forEach((list, index) => {
        if (list[2] === buttonAddTask.id) {

          const t_number = lists[index][3].length; // нет необходимости, номер присваиваю renderTask();
          const t_checked = false;
          let t_note = '';
          let t_date = '';

          document.querySelectorAll('.js-input-todo').forEach((task) => {
            if (buttonAddTask.id === task.id) {
              t_note = task.value;
            }
          });

          document.querySelectorAll('.js-input-date').forEach((task) => {
            if (buttonAddTask.id === task.id) {
              t_date = task.value;
            }
          });

          const t_id = String(new Date().getTime());

          lists[index][3].push(
            {
              t_number,
              t_checked,
              t_note,
              t_date,
              t_id
            }
          );
          renderTask(index);
        }
      });
    });
  });
  deleteTask();
  checkedTask();
}

function deleteTask() {
  document.querySelectorAll('.js-delete-button-task').forEach((deleteButton) => {
    deleteButton.addEventListener('click', () => {
      for(let i = 0; i < lists.length; i++) {
        for(let j = 0; j < lists[i][3].length; j++) {
          if (lists[i][3][j].t_id === deleteButton.id) {
            lists[i][3].splice(j, 1);
            renderTask(i);
            break;
          }
        }
      }
    });
  });
}

function checkedTask() {
  document.querySelectorAll('.check-box').forEach((checkBox) => {
    checkBox.addEventListener('click', () => {
      for(let i = 0; i < lists.length; i++) {
        for(let j = 0; j < lists[i][3].length; j++) {
          if (lists[i][3][j].t_id === checkBox.id) {
            lists[i][3][j].t_checked ? lists[i][3][j].t_checked = false : lists[i][3][j].t_checked = true;
            renderTask(i);
            break;
          }
        }
      }
    });
  });
}

function renderTask(indexOfTask) {
  let tasksHTML = '';
  lists[indexOfTask][3].forEach((task, index) => {

    task.t_number = index + 1; // нумерация задач
    
    // отметка выполненности задачи
    let checked;
    let classChecked;
    if (task.t_checked) {
      checked = 'checked';
      classChecked = 'task-checked';
    } else {
      checked = '';
      classChecked = '';
    }

    tasksHTML += `
      <section class="todo-tasks">
        <div class="number-wrapper">
          <span>${task.t_number}</span>
        </div>
        <div class="check-wrapper">
          <input class="check-box js-check-box" type="checkbox" id="${task.t_id}" ${checked}>
        </div>
        <div class="todo-wrapper">
          <span class="${classChecked}">${task.t_note}</span>
        </div>
        <div class="date-wrapper ${classChecked}">
          <span>${task.t_date}</span>
        </div>
        <div class="default-button-wrapper">
          <button class="default-button js-delete-button-task" id="${task.t_id}">Delete</button>
        </div>
      </section>
    `;
  });

  lists[indexOfTask][4] = tasksHTML;
  renderList();

}