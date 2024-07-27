
// Написать код (одной строкой), который позволяет проверить возможность вести машину по следующим параметрам:
// -   hasLicence - имеет права
// -   age - возраст
// -   isDrunk - пьян

// Пользователь может вести машину только если ему больше 18 лет, он имеет права и не пьян. 
// Если может - вернуть "может", если не может - вернуть "не может"

const  hasLicense = true;
const age = 18;
const isDrunk = false;

const CanHeDrive = (hasLicense && !isDrunk && age >= 18)?'can drive':'cannot drive'

console.log(CanHeDrive);