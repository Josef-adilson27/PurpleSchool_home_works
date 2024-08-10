const arr = [
    "12/21/2023",
    "31/03/2023",
    "test",
    "31/31/2023",
    "09,12,2023",
    "00,23,2023",
    "31,23,2023",
  ];
  
  function dataFilter([...arr]) {
    const correctDate = [];
    const inCorrectDate = [];


    //1.проверяем дату на корректность
    //2.формируем правильную дату и пушаем ее в array
    const DATA_FORMATER = (data) => {
      const rusFormatDay = parseInt(data[0]) <= 31 && parseInt(data[0]) > 0;
      const rusFormatMounth = parseInt(data[1]) <= 12;
      const engFormatDay = parseInt(data[1]) <= 31 && parseInt(data[0]) > 0;
      const engFormatMounth = parseInt(data[0]) <= 12;
  
      // записываем как есть как есть т.е русский формат DD-MM-YYYY
      if (rusFormatDay && rusFormatMounth) {
        correctDate.push(data.join("-"));
      }
      // записываем и со сменой мест если анг. формат
      else if (engFormatDay && engFormatMounth) {
        /// замена переменных для приведения к единому формату  (MM-DD-YYYY => DD-MM-YYYY)
        let formarted = ([data[0], data[1]] = [data[1], data[0], data[2]]);
        correctDate.push(formarted.join("-"));
      } else {
        inCorrectDate.push(data.join("-"));
      }
    };
    
    arr.map((item) => {
      if (isNaN(item)) {
        //заменяем разделительные знаки на '/'
        const replaced = item.replaceAll(",", "/");
        //формируем из replaced строка-дата => массив-дата  (для  DATA_FORMATER())
        const element = [replaced.split("/")].flat(); //  '12,31,2023' => ['12', '31', '2023']
        DATA_FORMATER(element);
      }
    });
  
    return { correctDate, inCorrectDate };
  }
  
  const res = dataFilter(arr);
  
  console.log(res); //['21-12-2023', '31-03-2023', '31-11-2023', '09-12-2023']
  