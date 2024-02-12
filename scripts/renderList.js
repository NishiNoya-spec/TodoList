import { lists, listSaveData } from "./data/lists.js";
import { addTask } from "./renderTask.js";
import { openAddNewListScreen } from "./popUpScreen/addNewList.js";

export function renderList() {

  let listsHTML = '';

  lists.forEach((list, index) => {
    list[0] = index + 1; // присваиваем номер листу
    listsHTML += `
      <section class="list">

        <section class="header-todolist">
          <section class="header-todolist-info">
            <div class="header-todolist-info-left-part">
              <div class="todolist-number-wrapper">#${index + 1}</div>
              <div class="todolist-name-wrapper">${list[1]}</div>
              <div class="delete-todo-list-wrapper">
                <button class="default-button js-delete-button-list" id="${list[2]}">Delete</button>
              </div>
            </div>
            <div class="header-todolist-info-right-part">
              <div class="header-todolist-info-right-part-timestamp-name">Timestamp:</div>
              <div class="header-todolist-info-right-part-timestamp-function">${list[5]}</div>
            </div>
          </section>

          <section class="header-todolist-interface">
            <div class="number-wrapper">№</div>
            <div class="check-wrapper">
              <span class="material-symbols-outlined">
                done
              </span>
            </div>
            <div class="input-todo-wrapper">
              <input type="text" placeholder="What are you going to do?" class="input-todo js-input-todo" id="${list[2]}">
            </div>
            <div class="input-date-wrapper">
              <input type="date" class="input-date js-input-date" id="${list[2]}">
            </div>
            <div class="default-button-wrapper">
              <button class="default-button js-add-todo-task" id="${list[2]}">Add Task</button>
            </div>
          </section>
        </section>

        ${lists[index][4]}

      </section>
    `;
  });

  document.querySelector('.js-todo-counter-list').innerHTML = `#${lists.length}`;

  document.querySelector('.js-main').innerHTML = listsHTML;
  
  deleteList();
  addTask();
  openAddNewListScreen();
  listSaveData();
}

function deleteList() {
  document.querySelectorAll('.js-delete-button-list').forEach((buttonDeleteList) => {
    buttonDeleteList.addEventListener('click', () => {
      lists.forEach((list, index) => {
        if (list[2] === buttonDeleteList.id) {
          lists.splice(index, 1);
          renderList();
        }
      });
    });
  });
}