

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


const reduceBatteries = (prev, next) => prev + next;


// create new variable wich holds the sum of all the batteries from array and
const totalBatteries = batteryBatches.reduce(reduceBatteries, 0)