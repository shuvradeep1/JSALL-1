
const date = new Date();
// console.log(date.getTime().toString());

const specificDate = new Date("2025-05-08");
// console.log(specificDate);


// console.log(typeof date);

const myCreatedDate =  new Date(2025,11,23);

// console.log(myCreatedDate.toDateString());

const myDateTimeStamp = Date.now();


// console.log(myDateTimeStamp.toString());

console.log(

`The date is ${new Date().getDate()} and the time is ${new Date().getHours()}:${new Date().getMinutes()}`
);


const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  console.log(formatter.format(new Date()));



