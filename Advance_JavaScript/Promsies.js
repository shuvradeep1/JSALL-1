const promiser = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
        console.log("Promise is calling..");
        
    },1000)
});


promiser.then(()=>{
    console.log("We are getting");
    
});




new Promise((resolve,request)=>{
    setTimeout(()=>{
        resolve();
        console.log("Promise Called...");
        
    },1000);
}).then(()=>{
    console.log("Then Called..");
    
});

const promiseThree =new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({"username":"Shuvradeep","password":"12345"});
        console.log("Promise Called...");
        
    }, 1000);
});


promiseThree.then((user)=>{
    console.log(user);
    
});



const PromiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Promise Called...");
        const flag = false;
        if(flag){
            resolve({"username":"Shuvradeep","password":"12345"});
            console.log("username & Password found..");
            

        }else{
                reject("Error:Something went Wrong...")
        }
    }, 1000);
});

PromiseFour
.then((user)=>{
    console.log(user);
    return user.username;
    
})
.then((username)=>{
    console.log(username);
    
})
.catch(()=>{
    console.log("Error Something went Wrong..");
    
}).finally(()=>{
    console.log("The Promise is either resolve or rejected!!");
    
});



const PromiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const flag = true;
        if(!flag){
            resolve({"username":"Shuvradeep","password":"12345","No":"PromiseFive"});
        }else{
            reject("Error:Something went Wrong...")
        }
        
    }, 1000);
});


async function resolvePromise() {

    try {
        const response = await PromiseFive;
        console.log(response);
    } catch (error) {
        console.log("Error! Please Check..");
        
    }
    
    
}
resolvePromise();


async function getUser() {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      console.log(response);
      
    // const data =await response.json();
    // console.log(data);
  } catch (error) {
    console.log("Error",error);
    
  }
    
}

getUser();


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//    console.log(response);
   
// }).catch((error)=>{
//     console.log(error);
    
// })


