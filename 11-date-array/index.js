const arr = [
  "10/30/2020",
  "10-10-2021",
  "30-12-1988",
  "31-03-1988",
  "31-02-1987",
  "32-12-1987",
  "31-12-1943",
  "29-02-2023",
  "02/29/2023",
  "02/29/2024",
  "02/29/2028",
];

//single format creating  function
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

  const arr = {
    leapYears: [],
    longMonts: [],
    allValidYears: [],
  };

  const longMonths = ["01", "03", "05", "07", "08", "10", "12"];

  array.map((element) => {
    [day, month, year] = element.split("-");

    //date correctness checking variables
    const dd = parseInt(day) > 1 && parseInt(day) <= 31;
    const mm = parseInt(month) > 1 && parseInt(month) <= 12;
    const yy = year.length === 4;

    const isLeapYear = (day == "29" && month === "02" && year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    const isLongMonth = day === "31" && longMonths.includes(month);

    //long months
    if (dd && mm && yy && isLongMonth) {
      arr.longMonts.push([addZero(day), addZero(month), year].join("-"));
    /// laep yaers only
    } else if (dd && mm && yy && isLeapYear) {
      arr.leapYears.push([addZero(day), addZero(month), year].join("-"));
    //all valid data
    } else if (dd && mm && yy) {
      arr.allValidYears.push([addZero(day), addZero(month), year].join("-"));
    }

  })

  return arr;

}

function showDate(array, DATA_FORMATER_CALLBACK, DATA_CHECKER_CALLBACK) {
  const res1 = DATA_FORMATER_CALLBACK(array);
  return DATA_CHECKER_CALLBACK(res1);
}

let result = showDate(arr, DATA_FORMATER, DATA_CHECKER);
console.log(result)
// leapYaers = ['29-02-2024', '29-02-2028']
// longMonths = ['31-03-1988', '31-12-1943']
///allValidData = ['30-10-2020', '10-10-2021', '30-12-1988', '31-02-1987', '29-02-2023', '29-02-2023']