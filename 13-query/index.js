function getQuery(query) {
      const queryArray = [];
      for (const [key, value] of Object.entries(query)) {
            queryArray.push(`${key}=${value}`);
      }
      return queryArray.join('&');
}


  console.log(getQuery( {search: 'John',take: 5}));