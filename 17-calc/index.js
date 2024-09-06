const btns = document.querySelectorAll('.buttons button')

const A = document.querySelector('.input1')
const B = document.querySelector('.input2')
let result = document.querySelector('.result')
let equal = document.querySelector('.equal')
let reset = document.querySelector('.reset')
let OperationSymbol = document.querySelector('.symbolBtn')



//записываем в OperationSymbol нажатую кнопку операции

for (const element of btns) {
      element.addEventListener('click', function () {
            OperationSymbol.innerText = this.innerText
      })
}


//здесь в зависимости от знака оперции из OperationSymbol выводим результат
equal.addEventListener('click', function () {

      let neytral = () => result.classList.remove('redStatus')
      let redStatus = () => result.classList.add('redStatus')

      if (isNumber(A.value) && isNumber(B.value)) {

            switch (OperationSymbol.innerText) {
                  case '+': {
                        neytral()
                        return result.innerText = parseInt(A.value) + parseInt(B.value)
                  }
                  case '-': {
                        neytral()
                        return result.innerText = parseInt(A.value) - parseInt(B.value)
                  }
                  case '/': {
                        if (B.value === '0') {
                              redStatus()
                              return result.innerText = 'на ноль делит нельзя'
                        }
                        neytral()
                        return result.innerText = (A.value / B.value).toFixed(2)
                  }
                  case '*': {
                        neytral()
                        return result.innerText = (A.value * B.value).toFixed(2)
                  }
            }

      } else if(!isNumber(A.value) && !isNumber(B.value)) {
            result.innerText = 'не корректные данные'
      }
})


reset.addEventListener('click', function () {
      A.value = ''
      B.value = ''
      OperationSymbol.innerText = ''
      result.innerText = 'Результат'
})

function isNumber(value) {
      return !isNaN(parseInt(value))
}