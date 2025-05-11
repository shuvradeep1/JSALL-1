
username ="Deep"

const user={
    username:"SHuvradeep",
    age: 25,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }

    
}


user.welcomeMessage()



const chai = ()=> {
  let username ="Shuvradeep"
  console.log(this.username);
  
}

chai();

const user1 ={
    username :"Shuvradeep",
    age: 25,
    greetingMessage: function(){
        console.log(`The username is ${this.username}`);
        console.log(typeof this.username);
        
        
    }
}


console.log(user1.greetingMessage());

(function dino(){
    console.log(this);
    
})();


