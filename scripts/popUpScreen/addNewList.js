import { lists, listSaveData } from "../data/lists.js";
import { renderList } from '../renderList.js';

let screenArea = document.querySelector('.js-popup-screens');

export function openAddNewListScreen() {

  let addNewListScreenHTML = '';
  const addNewListScreenNumber = 0;
  const addNewListScreenDate = document.querySelector('.js-popup-screen-add-new-list-date-input');

  const addNewList = document.querySelector('.js-add-new-todo-button');

  // Add New ToDo - Открытие всплывающего окна для добавления нового листа
  addNewList.addEventListener('click', () => {
  
    addNewListScreenHTML = `
      <section class="popup-sreen-add-new-list js-popup-sreen-add-new-list">
          
        <div class="popup-screen-add-new-list-header">
          <div class="popup-screen-add-new-list-header-number">
            <span>#${lists.length + 1}</span>
          </div>
          <div class="popup-screen-add-new-list-header-close-wrapper">
            <button class="popup-screen-add-new-list-header-close-button js-popup-screen-add-new-list-header-close-button">X</button>
          </div>
        </div>

        <div class="popup-screen-add-new-list-name">
          <div class="popup-screen-add-new-list-name-text">
            <span>Name</span>
          </div>
          <div class="popup-screen-add-new-list-name-input-wrapper">
            <input type="text" placeholder="Name of the list" class="popup-screen-add-new-list-name-input js-popup-screen-add-new-list-name-input">
          </div>
        </div>

        <div class="popup-screen-add-new-list-date">
          <div class="popup-screen-add-new-list-date-text">
            <span>Date of creation</span>
          </div>
          <div class="popup-screen-add-new-list-date-input-wrapper">
            <input type="date" class="popup-screen-add-new-list-date-input js-popup-screen-add-new-list-date-input">
          </div>
        </div>

        <div class="popup-sreen-add-new-list-create-button-wrapper">
          <button class="popup-sreen-add-new-list-create-button js-popup-sreen-add-new-list-create-button">Create list</button>
        </div>

      </section>
    `;

    screenArea.innerHTML = addNewListScreenHTML;

    // получаем ширину и высоту экрана
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const screenWidth = 300;
    const screenHeight = 280;

    const screenProperty = document.querySelector('.popup-sreen-add-new-list');

    screenProperty.style.width = `${screenWidth}px`;
    screenProperty.style.height = `${screenHeight}px`;

    const popupScreenWidth = Number(screenProperty.style.width.slice(0, 3));
    const popupScreenHeight = Number(screenProperty.style.height.slice(0, 3));


    const coordX = (viewportWidth / 2) - (popupScreenWidth / 2);
    const coordY = (viewportHeight / 2) - (popupScreenHeight / 2);

    screenProperty.style.left = `${coordX}px`;
    screenProperty.style.top = `${coordY}px`;

    closePopupScreen();
    createNewList();

  });
  
}

function closePopupScreen() {
  const addNewListScreenClose = document.querySelector('.js-popup-screen-add-new-list-header-close-button');
  addNewListScreenClose.addEventListener('click', () => {
    screenArea.innerHTML = ``;
  });
}

function createNewList() {
  const addNewListScreenCreate = document.querySelector('.js-popup-sreen-add-new-list-create-button');
  const addNewListScreenName = document.querySelector('.js-popup-screen-add-new-list-name-input');
  addNewListScreenCreate.addEventListener('click', () => {

    const l_number = lists.length + 1; // в этом нет необходимости, присвоение номера происходит в renderList.js
    const l_name = `${addNewListScreenName.value}`;
    const l_id = String(new Date().getTime());
    const tasksHTML = '';
    const timestamp = Date();

    lists.push(
      [
        l_number,
        l_name,
        l_id,
        [],
        tasksHTML,
        timestamp
      ]
    );
  
    screenArea.innerHTML = ``;
    renderList();

  });
}

