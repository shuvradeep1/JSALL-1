// const prom = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve();
//         console.log("prom called...");
        
        
//     }, 1000);
// });

// prom.then(()=>{
//     console.log("Later part Called..");
    
// });




// const prom1 = new Promise((resolve,reject)=>{
//     const flag =true;
//     setTimeout(() => {
//        if(flag){
//         resolve({"username":"shuvradeep","password":"12345"});
//     }else{
//         reject("Error: Something error")
//     } 
//     }, 1000);
// });

// prom1.then((user)=>{
//     return user.username;
// }).then((username)=>{
//     console.log(username);
    
// }).catch((error)=>{
//     console.log("Error:" ,error);  
// });


//Async Await

// const prom2 = new Promise((resolve,reject)=>{
//     const flag =true;
//     setTimeout(() => {
//        if(flag){
//         resolve({"username":"shuvradeep","password":"12345"});
//     }else{
//         reject("Error: Something error")
//     } 
//     }, 1000);
// });


// async function getData() {
//     try {
//       const response = await prom2;
      
//       console.log(response);
      
      
      
      
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// getData();



//Fetch Api

async function getData1() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
      

    } catch (error) {
        console.log("Error: Something went Wrong",error); 
    }
}


getData1();


