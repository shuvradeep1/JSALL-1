const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((item)=>{
console.log(item);
item.addEventListener('click',(e)=>{
console.log(e);
console.log(e.target);
if(e.target.id ==='grey'|| e.target.id ==='white' || e.target.id ==='blue'|| e.target.id ==='yellow'||e.target.id ==='purple'){
    body.style.backgroundColor =e.target.id
}
// }else if(e.target.id ==='white'){
//     body.style.backgroundColor ='white'
// }else if(e.target.id === 'blue'){
//     body.style.backgroundColor ='blue'
// }
// else if(e.target.id === 'yellow'){
//     body.style.backgroundColor ='yellow'
// }

});

});
