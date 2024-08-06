
///функция шифратор
function crypto(password) {

    const isOneWord = password.split(" ").length === 1;
    const charactersAmount = password.split("").length < 15;
  
    if (password && isOneWord && charactersAmount && typeof password === "string") {
      ///разделяем слово на три части
      const a = password.slice(0,3);
      const b = password.slice(3,5);
      const c = password.slice(5);

      ///return [a,b,c] /// правильный порядок
      return [b, a, c]; /// шифрованный порядок
      
    } else {
      console.log("Проверьте передавемое значение на корректность");
    }
  }

  ///функция дешифратор
  const check = (originalPassword, encryptedPassword) => {
    ///расшировываем
      [a,b,c] = encryptedPassword

     if([a,b,c].join('')===originalPassword){
      return true
     }
     return false

  };

  console.log(check("swpasord", crypto("password")));//true
  console.log(check("swpasord", crypto("aapassword")));//false
  console.log(check("sssswpasord", crypto("password")));//false