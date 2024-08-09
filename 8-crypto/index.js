///функция шифратор
function crypt(password){

  let array = password.split("");
  const pswrd =  password.length > 15
  
  if (!pswrd) {
    [array[0], array[2], array[6]] = [array[6], array[2], array[0]];
    return array.join("");
  } else {
    console.log("Проверьте передавемое значение на корректность");
  }

}

const check = (originalPassword, encryptedPassword) => {
  if (!encryptedPassword || !originalPassword) {
    return false;
  }
  const decrypted_password = crypt(encryptedPassword);
  return originalPassword === decrypted_password ; 
};


const password = "12345678";
const encrypt = crypt(password); //72345618
const decrypt = crypt(encrypt);  //12345678
console.log(encrypt);
console.log(decrypt);
console.log(password, encrypt, decrypt, password === decrypt) //true

console.log(check(password,'72345618')); //true