
/*
    Дан массив чисел: arr = [1, 40, -5, 10, 0]
    Написать функцию, которая сортирует данный массив при помощи циклов.

    Подсказка :
    -   Нужно использовать 2 цикла, вложенных друг в друга
    -   Нужно сравнивать и менять элементы
*/

let arr = [1, 40, -5, 10, 0];

/// добавлена фукция
function arrSort(array) {
  // добавлен newArray
  const newArray = [...array];

  for (let i = 0; i < newArray.length; i++) {
    let min = i;
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[min] > newArray[j]) {
        min = j; // Меняем значение переменной на наибольшее значение
      }
    }
    [newArray[i], newArray[min]] = [newArray[min], newArray[i]]; // Меняем значения переменных (добавлено)
  }
  return newArray;
  
}

const res = arrSort(arr);

console.log(res); //сортированный массив -5, 0, 1, 10, 40
console.log(arr); //оригинальный массив - 1, 40, -5, 10, 0
