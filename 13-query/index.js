function getQuery(query) {
    let array = [];
    for (const [key, value] of Object.entries(query)) {
      array.push(`${key}=${value}`);
    }
    return array.join("&");
  }
  
  let obj = { search: "vasya", take: 10 };
  
  console.log(getQuery(obj)); //search=vasya & take=1
  