const callback = (num) => num === 3  || num === 6;

function remove(array, callback) {
const filteredArray = []
  for (element of array) {
    !callback(element) && filteredArray.push(element) 
  }
 return filteredArray
}

remove([1, 2, 3, 3, 4], callback); ///[1, 2, 4]
