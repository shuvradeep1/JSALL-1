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


