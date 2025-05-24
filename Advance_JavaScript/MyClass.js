class User{
    constructor(username,password, email){
            this.username = username;
            this.password = password;
            this.email = email;
    }

    encryptedPassword(){
        return `The EncryptedPassword is ${this.password}`;
        

    }
    userNameFinder(){
        return `The Username is ${this.username}`;
    }
    emailFinder(){
     return `The email is ${this.email}`;
        
    }
    changeUserName(){
        this.username = "raman";
       return `The Username is ${this.username}`;
        

    }
}


const newUser = new User('Shuvradeep',12345,'sddatta505@gmail.com');
console.log(newUser.emailFinder());
console.log(newUser.userNameFinder());
console.log(newUser.encryptedPassword());
console.log(newUser.changeUserName());



//behind the Scene


function User1(username,password,email){
            this.username = username;
            this.password = password;
            this.email = email;
}


User1.prototype.encryptedPassword1 = function(){
    return `The Encrypted password is ${this.password}Abc`;
}


const useMe = new User1('Shuvradeep',12345,'sddatta505@gmail.com');

console.log(useMe.encryptedPassword1());



