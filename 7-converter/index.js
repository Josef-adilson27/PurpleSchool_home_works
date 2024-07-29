/* 
    Написать функцию, которая получает на вход строку с:
    -   суммой средств - 1000
    -   валютой средств - руб
    -   целевой валютой - $

    Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет.
    Ставки конвертации хранятся внутри функции
*/

function currencyConverter(amount, currency, targetingCurrency) {
    const USD = 95;
    const EUR = 110;
    const RUB = 70;
  
    const  TargetingCurrency = targetingCurrency.toLowerCase().slice(0, 3)
    const  Currency = currency.toLowerCase().slice(0, 3)
    
    if (Currency === "rub") {
      switch (TargetingCurrency) {
        case "dol":return amount * USD;
        case "eur":return amount * EUR;
        default:return null;
      }
    } else if (Currency  === "eur") {
      switch (TargetingCurrency) {
        case "dol":return amount * USD;
        case "rub":return amount * RUB;
        default:return null;
      }
  
    } else if (Currency === "dol") {
      switch (TargetingCurrency) {
        case "eur":return amount * USD;
        case "rub":return amount * RUB;
        default:return null;
      }
    }
  }
  
  console.log(currencyConverter(1200, "doll", "rub"));
  