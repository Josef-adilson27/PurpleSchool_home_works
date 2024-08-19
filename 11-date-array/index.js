const arr = [
  "10/30/2020",
  "10-10-2021",
  "30-12-1988",
  'text',
  "12-06-2032",
  "31-03-1986",
  "31-03-1984",
  "32/12/1987",
  "31-12-1943",
  "29-02-2023",
  "31/29/2023",
  "02/29/2024",
  "02/29/2028",
];

////single format creating  function

function DATA_FORMATER(array) {
 let arr = [];

 array.map((element) => {
   if (parseInt(element)) {
     if (element.includes("/")) {
       //covert 'eng' format to 'rus' and add it to arr
       [month, day, year] = element.split("/");
       [month, day] = [day, month];
       arr.push([month, day, year].join("-"));
     } else {
       //add as it is
       arr.push(element);
     }
   }
 });
 return arr;
}

function DATA_CHECKER(array) {
 // if day or month has only one character, then add zero at the start of it
 const addZero = (num) => (num.length <= 1 ? "0" + num : num);

 const arr = [];

 function elementChecker(data) {
   [day, month, year] = data.split("-");

   const longMonths = [1, 3, 5, 7, 8, 10, 12];

   if (parseInt(day) === 31 && !longMonths.includes(parseInt(month))) {
     return false;
   }

   const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

   if (parseInt(month) < 1 || parseInt(month) > 12 || parseInt(year) <= 0) {
     return false;
   }

   if (day < 1 || day > 31) {
     return false;
   }

   if (parseInt(month) === 2 && parseInt(day) === 29 && !isLeapYear) {
     return false;
   }

   return true;
 }

 array.map((element) => {
   if (elementChecker(element)) {
     arr.push([addZero(day), addZero(month), year].join("-"));
   }else{
       console.log(element);
   }
 });

 return arr;
}

function showDate(array, DATA_FORMATER_CALLBACK, DATA_CHECKER_CALLBACK) {
 const res1 = DATA_FORMATER_CALLBACK(array);
 return DATA_CHECKER_CALLBACK(res1);
}

let result = showDate(arr, DATA_FORMATER, DATA_CHECKER);
console.log(result);


