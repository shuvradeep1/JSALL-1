function GetData(username,age,isLoggedIn){
    this.username = username;
    this.age = age;
    this.isLoggedIn = isLoggedIn;

    return this;


}


const data = new GetData('SHuvradeep',25,true);
console.log(data);



console.log(GetData.prototype.username);

function CreateUser(username, score){
    this.username = username;
    this.score = score;
}

CreateUser.prototype.increament = function(){
    this.score++;

}

CreateUser.prototype.price = function(){
    console.log(`The price is ${this.score}`);
    
}



const tea = new CreateUser('tea',25);
const coffe = new CreateUser('coffee',35);




tea.price();
coffe.price();
