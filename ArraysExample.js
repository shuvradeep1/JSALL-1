
const arrys = ['a','b','c','d','e',1,2,3,4,5];
const arrys1 = ['a','b','c','d','e',1,2,3,4,5];
arrys.push(9);

console.log(arrys[10]);
console.log(arrys.length);
console.log(arrys.at(2));



console.log(arrys);
console.log(arrys1);
const newArrays = arrys.slice(1,3);
console.log("This is Slice"+newArrays);
console.log("In Slice "+arrys);


const newArrays1 = arrys1.splice(1,3);
console.log("This is splice"+newArrays1);
console.log("In Slice "+arrys1);


const word =['a','b','c','d'];
const number = [0,1,2,3,4,5,6];
console.log(word.concat(number));
console.log( typeof word);



const zeroWord = ['a','b',['c','d'],'e','f',['g'],['h','i']];

const flatWord = zeroWord.flat(Infinity);

console.log(flatWord);

console.log(Array.isArray(['S','h','u']));
console.log(Array.from("Shuvradeep"));

const id =Symbol("id");

const jsUser ={
    name:"Shuvradeep",
    "full Name":"Shuvradeep Datta",
    [id]:"12345",
    age:25,
    location: "Kolkata",
    email: "sddatta505@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]

};



console.log(jsUser["full Name"]);
console.log(jsUser[id]);
// Object.freeze(jsUser);
jsUser.email ="shuvradeep.datta17@gmail.com";

jsUser.greetings = function(){
    console.log("Hello Js User");
    
}
console.log(jsUser.greetings());


console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user greeting");
}


jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`); 
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



//Easy Changes



//See Changes










