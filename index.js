const batteries = [10, 5, 8, 4, 4];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const totalBatteries = batteries.reduce(reducer);