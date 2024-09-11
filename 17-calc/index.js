const btns = document.querySelectorAll('.buttons button')

const page = {
      inputs: {
            firstValue: document.querySelector('.input1'),
            secondValue: document.querySelector('.input2')
      },
      buttons: {
            resultButton: document.querySelector('.equal'),
            resetButton: document.querySelector('.reset'),
            operatingButtons: document.querySelector('.buttons')
      },
      outPuts: {
            resultText: document.querySelector('.result span'),
            operationSymbol: document.querySelector('.symbolBtn')
      }
}


//записываем в OperationSymbol нажатую кнопку операции
page.buttons.operatingButtons.addEventListener('click', function (e) {
      if(e.target.tagName === 'BUTTON'){
            page.outPuts.operationSymbol.innerText = e.target.innerText;
      }
})


/// классы задавания цвета в зав-сти от правильности ответа
const  neytral = () => page.outPuts.resultText.classList.remove('redStatus')
const  redStatus = () => page.outPuts.resultText.classList.add('redStatus')

//здесь в зависимости от знака оперции из OperationSymbol выводим результат

page.buttons.resultButton.addEventListener('click', function () {
      
      let  firstValue = parseInt(page.inputs.firstValue.value) 
      let  secondValue = parseInt(page.inputs.secondValue.value)
      let  result = page.outPuts.resultText


      switch (page.outPuts.operationSymbol.innerText){
            case '+': {
                  neytral()
                 return result.innerText +=  firstValue + secondValue       
            }
            case '-': {
                  neytral()
                  return result.innerText = firstValue - secondValue
            }
            case '/': {
                  if (secondValue === 0) {
                        redStatus()
                        return result.innerText = 'на ноль делит нельзя'
                  }
                  neytral()
                  return result.innerText = (firstValue / secondValue).toFixed(2)
            }
            case '*': {
                  neytral()
                  return result.innerText = (firstValue * secondValue).toFixed(2)
            }
      }
      
})


page.buttons.resetButton.addEventListener('click', function () {
      page.inputs.firstValue.value = ''
      page.inputs.secondValue.value  = ''
      page.outPuts.operationSymbol.innerText = ''
      page.outPuts.resultText.innerText = ''
})
