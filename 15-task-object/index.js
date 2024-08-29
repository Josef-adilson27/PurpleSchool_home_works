let idCount = 0;

const todoList = {

      todos: [],

      addTodo(title, priority) {
            this.todos = [...this.todos,
            function () {
                  if (typeof title !== 'string') {
                        return { title: 'error', priority, id: idCount++ }
                  } else if (typeof title == 'string') {
                        return { title, priority, id: idCount++ }
                  } else if (typeof priority !== 'number') {
                        return { title, priority: 'error', id: idCount++ }
                  } else {
                        return { title, priority, id: idCount++ }
                  }
            }()
            ]
      },
      /// проверочная фукция для для id (исп-ся в updateTodo и removeTodo для условий)
      idCheck(id) {
            let flag = null
            //получаем массив id задач
            let ids = this.todos.map(item => item.id);
            flag = ids.includes(id) ? true : false;
            return flag
      },

      removeTodo(id) {
            if (this.idCheck(id)) {
                  this.todos = this.todos.filter(item => item.id !== id)
            } else {
                  console.log(`В вашем списке нет такого id как ${id} для удаления`)
            }
      },

      updateTodo(updated, id) {
            if (this.idCheck(id)) {
                  this.todos.map(item => {
                        if (item.id == id) {
                              item.title = updated
                        }
                  })
            } else {
                  console.log(`В вашем списке нет такого id как ${id} для обновления`)
            }
      },

      sortByPriority() {
          return  [...this.todos].sort(function (a, b) {
                  return parseInt(a.priority) - parseInt(b.priority);
            });
      },


}

todoList.addTodo('Встать 6:00', 1);
todoList.addTodo('Погладить кота', 3);
todoList.addTodo('Позвонить президенту', 2);
todoList.addTodo('Полить цветы', 3);

todoList.removeTodo(3)


let prioritySort = todoList.sortByPriority()
console.log(prioritySort,'Сортировано по приоритету');

console.log(todoList.todos,'оригинал (автоматически сортируется по id)');
