
//  Домашнее задание - Функции высшего порядка
/*
    Напишите функцию, которая принимает :
    -   Массив чисел
    -   Функцию удаления элементов
    И возвращает отфильтрованный массив. При этом функция удаления элементов прниимает число и
    возвращает true, если его надо удалить и false, если надо оставить
*/

const callback = (num) => num === 3  || num === 6;



function remove(array, callback) {
const filteredArray = [];
  for (element of array) {
    // ...возвращает true, если его надо удалить и false, если надо оставить
    // т.е записываем в filteredArray те что надо оставить
    !callback(element) && filteredArray.push(element) 
  }
 return filteredArray
}

remove([1, 2, 3, 3, 4], callback); ///[1, 2, 4]

console.log(remove([1, 2, 3, 3, 6, 4], callback));