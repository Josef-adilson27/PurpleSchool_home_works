const  hasLicense = true;
const age = 18;
const isDrunk = false;

const CanHeDrive = hasLicense && !isDrunk && age >= 18;

console.log(CanHeDrive);