'use strict'
// 必要なDOM要素を取得。
const addButton = document.getElementById('add_button') //htmlから追加ボタンの値を取得
const addTask = document.getElementById('add_task') //htmlから入力したタスクの値の取得
const todoLists = document.getElementById('todo_lists') //htmlからリストの値の取得

// デフォルト値で1を設定
let id = 1

// todoを保存する箱
const tasks = []

//配列にオブジェクトとしてデータを追加する
const addData = () => {
  tasks.push({
    id: id,
    title: addTask.value,
  })
  showTaskList(tasks)
  addTask.value = ''
  id++
}

const createStatusButton = () => {
  const status = document.createElement('td')
  const statusButton = document.createElement('button')
  statusButton.innerText = '作業中'
  status.appendChild(statusButton)
  return status;
}

//タグを追加して出力する関数
const showTaskList = () => {
  todoLists.innerHTML = '';
  tasks.forEach((task, index) => {
    const todoItem = document.createElement('tr')
    const todoId = document.createElement('td')
    const todoTitle = document.createElement('td')
  
    todoTitle.innerHTML = task.title
    todoId.innerHTML = index+1
  
    todoLists.appendChild(todoItem)
    todoItem.appendChild(todoId)
    todoItem.appendChild(todoTitle)
  
    const statusButton = createStatusButton()
    todoItem.appendChild(statusButton)
    todoItem.appendChild(statusButton)
  
    const todoDelete = document.createElement('td')
    const todoDeleteBtn = document.createElement('button')
    todoDeleteBtn.innerHTML = '削除'
    todoItem.appendChild(todoDelete)
    todoItem.appendChild(todoDeleteBtn)
  })
}

//追加ボタンをクリック
addButton.addEventListener('click', () => {
  const task = addTask.value
  addData(task)
})

// ＜学習できること＞
// ・配列の操作
// ・オブジェクトの操作

// 【要件】

// - 追加ボタン押下時にタスクを登録できる
// - タスクには、「ID、コメント、状態」が含まれる
// - IDは連番にする
// - コメントはフォームで入力された値が表示される
// - 状態には、「作業中」と表示される
// - 削除ボタンが表示されている（ここでは押下時の動作はつけなくてよい
