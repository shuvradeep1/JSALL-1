const map = new Map();
map.set('IN',"India");
map.set('USA',"United States Of America");
console.log(map);


for (const key in map) {
   console.log(key);
   
}




const std =[1,2,3,4,5,6,7,8];


std.forEach(std1 => {
    console.log(std1);
    
});

const myCoding =[
    {
        languageName :"Javascript",
        languageFileName:".js"
    },
    {
        languageName :"Java",
        languageFileName:".java"
    },
    {
        languageName :"Python",
        languageFileName:".py"
    }
];


myCoding.forEach((item,index)=>{
console.log(item.languageFileName);
console.log(item.languageName);
// console.log(index);



});