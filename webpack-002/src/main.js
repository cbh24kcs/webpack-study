// import {sum} from './util.js'
// import {sum} from './util.js'
import './style/style.css'

// import img1 from './.....png'

// console.log(sum(5, 15));

// npm install webpack webpack-cli -g 安装一次即可
// webpack --entry 入口文件 -o 输出目录 

// loader 加载器
// style-loader 样式加载器

import {e_id} from './utils/dom-util.js'
import initData from './data/init-data.js'

let todoInput = e_id('todo-input')
let todoList = e_id('todo-list')
let addBtn = e_id('add-btn')

let todos = [...initData];

renderTodos();

addBtn.onclick = function () {
    let item = { id: Date.now(), name: todoInput.value, done: false }
    todos.push(item)
    renderTodos();
    todoInput.value = ''
}

function renderTodos() {
    todoList.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        let li = document.createElement('li')
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'

        li.appendChild(checkbox)
        li.innerHTML += todos[i].name;

        if (todos[i].done) {
            li.firstElementChild.checked = 'checked'
            li.classList.add('done')
        }

        li.setAttribute('data-id', todos[i].id)
        todoList.appendChild(li)
    }

    let checkboxList = todoList.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxList.length; i++) {
        let cb = checkboxList[i];
        let parent = cb.parentElement;
        let todo = todos.filter(todo => todo.id == parent.getAttribute('data-id'))[0];
        cb.onclick = function () {
            if (cb.checked) {
                parent.classList.add('done')
                todo.done = true
            } else {
                parent.classList.remove('done')
                todo.done = false
            }
        }
    }
}

