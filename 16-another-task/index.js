const todoList = {

      todos: [],

      idCount: 0,

      addTodo(data) {    

            if(data) {
                  this.todos = [...this.todos, { ...data, id: this.idCount++ }]
            } else {
                  console.log('Проверьте параметры');
            }
            
      },

      removeTodo(id) {
           this.todos.some(item=>item.id==id)?
           this.todos = this.todos.filter(item => item.id !== id):
           console.log(`В вашем списке нет такого id как ${id} для удаления`)        
      },

      updateTodo(data,id) {

            const array = this.todos

            if(this.todos.find(item => item.id == id)){
                  for (let i = 0; i < array.length; i++) {
                        if (array[i].id === id) {
                        //если на написать: title = data, 
                        //то эту функц. нельзя привязать к объекту где нет свойтсв title. (напр. как в another-task)
                        //поэтому заменяем целый объект. 
                             array[i] = data
                        }
                  }

            }else{
                  console.log(`В вашем списке нет такого id как ${id} для обновления`)
            }
      },

      sortByPriority(params) {   
            return [...this.todos].sort((a, b) => a.priority - b.priority);
      },
}


let obj = { title: 'Встать 6:00', priority: 1 }
let obj2 = { title: 'Поехать в магазин', priority: 1 }
let obj3 = { title: 'Полить цветы', priority: 5 }


todoList.addTodo(obj);
todoList.addTodo(obj2);
todoList.addTodo(obj3);
todoList.updateTodo({title: 'Полить дерево', priority: 3, id: 1 }, 1);
todoList.removeTodo(2)


console.log(todoList.sortByPriority(), 'Сортировано по priority');

console.log(todoList.todos, 'оригинал');


/////////////////////////////////////////////// new task ////////////////////////////////////////


const add_todo = todoList.addTodo
const remove_todo = todoList.removeTodo
const update_todo = todoList.updateTodo

const sort_todo = todoList.sortById

const newTask = { todos: [], idCount: 0, };

let add = add_todo.bind(newTask)
let remove = remove_todo.bind(newTask)
let update = update_todo.bind(newTask)



add( { name: '', description:'', order:2});
add( { name: '', description:'', order:1});
add( { name: '', description:'', order:6});
add( { name: '', description:'', order:5});


console.log(newTask.todos, 'new task');
