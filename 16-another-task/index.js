

const todoList = {
      
      todos: [],
      
      addTodo(title, priority) {

            // если title или priority не сооотв-ют условию 
            ///то подстваляем 'error' для каждого отдельного свойства 

            let PRIORITY = typeof priority !== 'number'? 'error':priority
            let TITLE = typeof title !== 'string'? 'error':title  

            this.todos = [...this.todos, { title:TITLE , priority:PRIORITY, id: Math.round(title.length/priority)}]
      },

      //проверочная фукция для для id (исп-ся в updateTodo и removeTodo для условий)
      removeTodo(id) {
            let ids = this.todos.map(item => item.id);
            const flag = ids.includes(id) ? true : false;
            if (flag ) {
                  this.todos = this.todos.filter(item => item.id !== id)
            } else {
                  console.log(`В вашем списке нет такого id как ${id} для удаления`)
            }
      },

      updateTodo(updated, id) {
            let ids = this.todos.map(item => item.id);
            const flag = ids.includes(id) ? true : false;
            if (flag) {
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
      }

}

todoList.addTodo('Встать 6:00', 2);
todoList.addTodo('Погладить кота', 3);
todoList.addTodo('Позвонить президенту', 2);
todoList.addTodo('Полить цветы', 3);
todoList.updateTodo('Пойти в кабак',1)
todoList.removeTodo(12)



let prioritySort = todoList.sortByPriority()
console.log(prioritySort,'Сортировано по приоритету');

console.log(todoList.todos,'оригинал (автоматически сортируется по id)');

////////////////////////////// new task ////////////////////////////////

const add_todo = todoList.addTodo
const remove_todo = todoList.removeTodo
const update_todo = todoList.updateTodo


const newTask = { todos: [] };


let add = add_todo.bind(newTask)
let remove = remove_todo.bind(newTask)
let update = update_todo.bind(newTask)

add('Купить яблоки', 3);
add('Зайти к другу', 2);
add('Зайти к бабушке', 3);

remove(7);

update('запись на прием',4)



console.log(newTask.todos,'new tasks')