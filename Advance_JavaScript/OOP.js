// const user = {
//     username:'Shuvradeep01',
//     password:1233,
//     age:25,



//     getUserDatails: ()=>{
//         // let username  = 'Suman';
//         console.log('inside function');
//         // console.log(`Username:${username}`);
//         console.log(`Username:${this.username}`);
//         console.log(this);
        
        
        
//     }
    
// }

// // console.log(user.username);
// // console.log(user.password);
// // console.log(user.age);
// // console.log(user.getUserDatails());


// user.getUserDatails();


// console.log(this);


// function getData() {
//     console.log("Fetching data...");
//     return {
//         name: "Amit",
//         age: 30
//     };
// }

// const userData = getData();
// console.log(userData); // Output: { name: 'Amit', age: 30 }


// const user1 ={
//     username : 'Shuvradeep',
//     getData (){
//         console.log("Good Job");
        
//     }
// }

// user1.getData();


function User4 (username,age,isLoggedIn){
    this.username = username;
    this.age = age;
    this.isLoggedIn = isLoggedIn;
    this.greeting  = function(){
        console.log(`Welcome to ${this.username} page`);
        
    }
    
    return this;
}

const userOne = new User4('Shuvradeep',25,true);
const userTwo = new User4('Himadri',25,true);

const myString = "hello";
console.log(typeof myString);

console.log(myString instanceof String);

let zero = new String();

console.log(zero instanceof String);









