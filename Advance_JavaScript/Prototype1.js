let myName = "Shuvradeep            "

console.log(myName);


function HeroPower(username,password){
    this.username = username;
    this.password = password;

}


Object.prototype.deep = function(){
    console.log('Shuvradeep present in all object.');
    
}

Object.prototype.lsg = new Array('a','b','c');

// HeroPower.deep();

// lsg.deep();
myName.deep();




const Arrays = ['1','2','3','4','5'];


Array.prototype.heyDeep = function(){
    console.log('Shuvradeep Says Hello.');
    
}

Arrays.heyDeep();

const User = {
    username  : 'Shuvradeep',
    password:'123456'
}


const Teacher ={
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
    
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

// Teacher.__proto__ = User;
// Teacher.__proto__ = TASupport;


//Modern Syntax

Object.setPrototypeOf(Teacher,TASupport);

// console.log(TASupport.__proto__);


// console.log(Teacher.__proto__);
// console.log(Teacher.__proto__);

console.log(Teacher.__proto__);











