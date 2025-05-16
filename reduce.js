const abc =[1,2,3,4,5,6,7,8,9];

const initialValue =0;

const sumWithInitialValue = abc.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue);


console.log(sumWithInitialValue);
