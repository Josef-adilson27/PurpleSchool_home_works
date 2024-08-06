
/* 
    Написать функцию, которая получает на вход строку с:
    -   суммой средств - 1000
    -   валютой средств - руб
    -   целевой валютой - $

    Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет.
    Ставки конвертации хранятся внутри функции
*/

/// доработано (добавлено switch)

function currencyConverter(amount, currency, targetCurrency) {

  const uper_targetCurrency = targetCurrency.toUpperCase().slice(0, 3);
  const uper_currency = currency.toUpperCase().slice(0, 3);

  ///добавлено
  const ALLOW_CURRENCY_LIST = ["RUB", "EUR", "USD"];

  if (!ALLOW_CURRENCY_LIST.includes(uper_currency)) {
    console.log("Входящая валюта мне неизвестна");
    return null;
  }
  if (!ALLOW_CURRENCY_LIST.includes(uper_targetCurrency)) {
    console.log("Исходящая валюта мне неизвестна");
    return null;
  }
 
  const USD = 95;
  const EUR = 110;
  const RUB = 70;
 
  switch (uper_currency) {
    case "RUB":
    switch (uper_targetCurrency) {
        case "USD":
          return amount * USD;
        case "EUR":
          return amount * EUR;
        default:
          return null;
      }
    case "EUR":
      switch (uper_targetCurrency) {
        case "USD":
          return amount * USD;
        case "RUB":
          return amount * RUB;
        default:
          return null;
      }
    case "USD":
      switch (uper_targetCurrency) {
        case "EUR":
          return amount * USD;
        case "RUB":
          return amount * RUB;
        default:
          return null;
      }
    default:
      return null;
  }
}

console.log(currencyConverter(1200, "eur", "rub"));