'use strict'
  // 必要なDOM要素を取得。
  const addButton = document.getElementById('add_button');  //htmlから追加ボタンの値を取得
  const addTask = document.getElementById('add_task');  //htmlから入力したタスクの値の取得
  const todoLists = document.getElementById('todo_lists');  //htmlからリストの値の取得
  
  // デフォルト値で1を設定
  let index = 1;
  
  // todoを保存する箱
  const tasks = [];
  
  //配列にオブジェクトとしてデータを追加する
  const addData = () => {
    tasks.push({
      id: index,
      title: addTask.value,
    });
    
 //HTML上にすでに出力してある配列を空にして、追加したデータを含めた配列内のデータを出力できるようにする
    todoLists.innerHTML = '';

    //関数に配列tasksを渡す
    showTaskList(tasks);
  };

  //タグを追加して出力する関数
  const showTaskList = () => {
    tasks.forEach((task,index) => {
      // tr要素の生成
      const todoItem = document.createElement("tr");
      // todoのIDを表示するtdの生成
      const todoId = document.createElement("td");
      // todoのタイトルを表示するtdの生成
      const todoTitle = document.createElement("td");
      //作業中ボタンを表示するtdの生成
      const todoStatus = document.createElement('td');
      // 削除ボタンを表示するtdの生成
      const todoDelete = document.createElement("td");

      todoId.innerHTML = index;
      todoTitle.innerHTML = task.title;

      todoLists.appendChild(todoItem);
      todoItem.appendChild(todoId);
      todoItem.appendChild(todoTitle);
      todoItem.appendChild(todoStatus);
      todoItem.appendChild(todoDelete);

      const todoStatusBtn = document.createElement('button');
      const todoDeleteBtn = document.createElement('button');

      todoStatusBtn.innerHTML = '作業中';
      todoDeleteBtn.innerHTML = '削除';

      todoStatusBtn.appendChild(todoStatusBtn);
      todoDeleteBtn.appendChild(todoDeleteBtn);
    });
  

//追加ボタンをクリック
addButton.addEventListener('click', () => {
  const task = addTask.value;
  addData(task, index ++);
  addTask.value = '';
});
};



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
