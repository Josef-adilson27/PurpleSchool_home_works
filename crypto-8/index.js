function crypto(password) {

    const isOneWord = password.split(" ").length === 1;
    const charactersAmount = password.split("").length < 15;
  
    if (password && isOneWord && charactersAmount && typeof password === "string") {
      const a = password.slice(0, Math.floor(password.split("").length / 3));
      const b = password.slice(a.length);
      const c = password.slice(0, -Math.floor(password.split("").length));
  
      ///return [a,b,c].join('')  /// правильный порядок
      return [b, a, c].join(""); /// шифрованный порядок
    } else {
      console.log("Проверьте передавемое значение на корректность");
    }
  }
  
  const check = (crypted, encrypted) => {
    return crypto(encrypted) === crypted ? true : false;
  };
  
  console.log(crypto("password")); //sswordpa
  
  
  console.log(check("sswordpa", "password")); //true
  console.log(check("sswordpa", "qqqpassword")); //false
  