function setUserName(username){
    this.username = username;
    console.log("Hitted");
    
}

function CreateUser(username,password,email){
    setUserName.call(this,username);
    this.password = password;
    this.email = email;
}

const user = new CreateUser('Shuvradeep',12345,"sddatta505@gmail.com");
console.log(user);
