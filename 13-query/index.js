
const queryFunc = (params) => Object.entries(params)

.map(item => item.join('=')).join('&')

console.log(queryFunc({search: 'John',take: 5}));