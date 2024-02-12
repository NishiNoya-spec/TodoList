export const lists = JSON.parse(localStorage.getItem('lists')) || [
/*[
    l_number,
    l_name,
    l_id,
    [
      {
        t_number,
        t_checked,
        t_note,
        t_date,
        t_del_id
      }
    ],
    tasksHTML,
    timestamp
  ]*/
];

export function listSaveData() {
  localStorage.setItem('lists', JSON.stringify(lists));
}