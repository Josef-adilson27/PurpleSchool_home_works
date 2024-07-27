//рассчитать растояние до объекта по координатам

const addressLat = 7;
const addressLong = 8;

const positionLat = 3;
const positionLong = 2;


const obj  = Math.sqrt((addressLat - positionLat)**2+(addressLong - positionLong)**2)

console.log(`растояние до цели ${obj.toFixed(2)}`); // растояние до цели 7.21