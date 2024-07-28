const lang = prompt().toLowerCase()

//первый вариант
switch (lang.toLowerCase()) {
  case "de":
    console.log("Gutten tag");
    break;
  case "eng":
    console.log("Hello");
    break;
  case "ar":
    console.log("مرحبًا");
    break;
  case "rus":
    console.log("Привет");
    break;
  case "sp":
    console.log("Hola");
    break;
  default:
    console.log("wrong language");
}

//второй вариант
switch (true) {
  case lang === "de":
    console.log("Gutten tag");
    break;
  case lang === "eng":
    console.log("Hello");
    break;
  case lang === "rus":
    console.log("Привет");
    break;
  case lang === "sp":
    console.log("Hola");
    break;
  case lang === "ar":
    console.log("مرحبًا");
    break;
  default:
    console.log("wrong language");
}
