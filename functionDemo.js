
function sayHello() {
    console.log("S");
      console.log("H");
        console.log("U");
          console.log("V");
            console.log("R");
              console.log("A");
                console.log("D");
                console.log("E");
                console.log("E");
                console.log("P");
                console.log("D");
                console.log("A");
                console.log("T");
                console.log("T");
                console.log("A");
}


sayHello();


//Sum of Two Number

function addTwoNumber(a,b) {
    if (typeof a==="number" && typeof  b==="number") {
        
         console.log("Sum of Two number is",(a+b)); 
         return a+b;
    } else {
        console.log("a and b was not a number.");
        
    }
   
}

const result = addTwoNumber(5,6);
console.log(result);


function loginUserMessage(username){
    if(!username ){
        console.log("Please Enter Username");
        return 
        
    }
    console.log("User Name is ",username);
    return `the user ${username} is logged in.`
}

const loginUser = loginUserMessage();
console.log(loginUser);


function calculateCartPrice(...numbers){
    
    return numbers
}

console.log(calculateCartPrice(23,45,67));

const user ={
    username :"Shuvradeep",
    age: 25,
    price: 5000

}

function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and age is ${anyObject.age} and price is ${anyObject.price}`);

}


handleObject(user);


const a = 300;

if(true){
  const  a = 43;

}
console.log(a);


var b = 5;

if (true) {
    var b= 56;
}

console.log(b);

const asd = () => console.log("Getting Data...");



asd();



