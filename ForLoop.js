for (let i = 0; i < 10; i++) {
    console.log("Hello World!!");
    
    
}


//for(initialization; condition;increament operator){
    //body

// }
let element;

const array =[1,2,3,4,5,6,7,8,9,13];

for (let i = 0; i <= array.length-1; i++) {
     element = array[i];
    
    console.log(element);
    
}


for(let i =1;i <=10;i++){
    // console.log(`Outer loop value ${i}`);
    
    for(let j =1;j<=10;j++){
        // console.log(`Inner Loop value is ${j} and Outer loop value is ${i}`);

        console.log(`${i} * ${j} = ${i*j}`);
        
        

    }
}


//For Of Loop
const arr =[2,2,4,5,6,7,8,9,0,2,1,3,5,6,7,8]; 

for( const num of arr){
    console.log("Iterating number is: "+num);
    
}




const acd = new Map();

acd.set("1","Shuvradeep");
acd.set("2","Sayantan");
acd.set("3","Chanu");
acd.set("4","Raju");
acd.set("5","Baba");

for(const [key,value] of acd){
    console.log(key," :- ",value); 
}

const obj2 ={
    "id":"1",
    "name":"Shuvradeep",
    "age":25
}
// const {id} =obj2;
// console.log(id);


for (const key in obj2) {
//    console.log();
  console.log(key,obj2[key]);
  
   
   
}





