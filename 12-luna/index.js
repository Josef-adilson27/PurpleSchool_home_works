function luna(card_number) {
  const number = card_number.toString().replaceAll("-", "");

  const cardNumber = card_number
    .replaceAll("-", "")
    .split("")
    .map((x) => Number(x));
  if (cardNumber.includes(NaN)) {
    return NaN;
  }

  const newArray = [];

  for (let i = 0; i < number.length; i++) {
    const element = number[i] * 2;
    if (i % 2 === 0) {
      element <= 9 ? newArray.push(element) : newArray.push(element - 9);
    } else {
      newArray.push(parseInt(number[i]));
    }
  }

  const red = newArray.reduce((acc, el) => acc + el);

  return red % 2 === 0 ? true : false;
}

let num1 = "4561-2612-1234-5467"; //true
let num2 = "4561-261-1234-5467"; //false
let num3 = "4561-2612-12g34-5467"; //false
let num4 = "4561-2612-12634-5467"; //false

function cardChecking(card) {
  return `карточка с номером ${card} получила статус ${luna(card)}`;
}

console.log(cardChecking(num1));
