const tinderObject  = {}//new Object();
// console.log(tinderObject);
tinderObject.id =1;
tinderObject.name ="Shuvradeep";
tinderObject.age =25;
tinderObject.address ="Kolkata"

console.log(tinderObject);


const userDate = {
    email:"some@gmail.com",
    userFullName:{
        firstName:"Shuvradeep",
        lastName: {
            onePrompt:"Datta",
            // secondPrompt:{
            //     residual:"Datt",
            //     friendly:"Datta"
            // }
        }
    }
}

console.log(userDate.userFullName.lastName.secondPrompt?.residual);


const obj1 ={1:"a",2:"b"};
const obj2 ={3:"a",4:"b"};

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(tinderObject);
console.log(Object.keys(tinderObject));
console.log(Object.values(tinderObject));
console.log(Object.entries(tinderObject));

// Object DeStructuring..
const course ={
    courseName:"JavaScript",
    price: 5000,
    courseInstructor: "Hitesh Choudry"
}

const {courseName} = course
const {price} = course
const {courseInstructor:instructor} = course


console.log(courseName);
console.log(price);
console.log(instructor);










