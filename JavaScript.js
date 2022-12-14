'use strict'
// 必要なDOM要素を取得。
const addButton = document.getElementById('add_button') //htmlから追加ボタンの値を取得
const addTask = document.getElementById('add_task') //htmlから入力したタスクの値の取得
const todoLists = document.getElementById('todo_lists') //htmlからリストの値の取得

const TASK_STATUS = {
  inprogress: '作業中',
  done: '完了',
}

// デフォルト値で1を設定
let id = 1;

// todoを保存する箱
const tasks = []

//配列にオブジェクトとしてデータを追加する
const addData = () => {
  tasks.push({
    id,
    title: addTask.value,
    status: TASK_STATUS.inprogress,
  })

  showTaskList(tasks)
  addTask.value = ''
  id++
}
console.log(tasks)

const createStatusButton = (task) => {
  const status = document.createElement('td')
  const statusButton = document.createElement('button')
  statusButton.innerText = task.status
  status.appendChild(statusButton)
  return status;
}

const removeTask = (id) => {
  tasks.splice(id,1) // 配列から削除
  showTaskList(tasks);
}

  const createRemoveButton = () => {
    const remove = document.createElement('td')
    const removeButton = document.createElement('button')
    removeButton.innerText = '削除'
    remove.appendChild(removeButton)
    removeButton.addEventListener('click', (id) => {
      removeTask(id);
    });
    return remove;
  };
 

//タグを追加して出力する関数
const showTaskList = () => {
  todoLists.innerHTML = '';
  tasks.forEach((task, index )=> {
    const todoItem = document.createElement('tr')
    const todoId = document.createElement('td')
    const todoTitle = document.createElement('td')

    todoTitle.innerHTML = task.title
    todoId.innerHTML = index + 1

    todoLists.appendChild(todoItem)
    todoItem.appendChild(todoId)
    todoItem.appendChild(todoTitle)
  
    const statusButton = createStatusButton(task)
    todoItem.appendChild(statusButton)
    todoItem.appendChild(statusButton)
  
    const removeButton = createRemoveButton()
    todoItem.appendChild(removeButton)
    todoItem.appendChild(removeButton)
  })
};

//追加ボタンをクリック
addButton.addEventListener('click', () => {
  const task = addTask.value
  addData(task)
})


// 【要件】

// - 削除ボタン押下時にそのタスクを削除できる
// - タスク削除時はIDが振り直される
// - 削除後、新たにタスクを追加するとIDが連番となっている

// ＜学習できること＞
// ・配列の操作
// ・オブジェクトの操作