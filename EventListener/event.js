// document.getElementById('food').onclick= ()=>{
//     alert("food picture clicked")
// };
// document.getElementById('home').onclick= ()=>{
//     alert("home picture clicked")
// };
// document.getElementById('flower').onclick= ()=>{
//     alert("flower picture clicked")
// };
// document.getElementById('duck').onclick= ()=>{
//     alert("duck picture clicked")
// };

// document.getElementById('food').addEventListener('click',()=>{
//     alert("food picture clicked");
// },true);
// document.getElementById('home').addEventListener('click',()=>{
//     alert("home picture clicked");
// });
// document.getElementById('flower').addEventListener('click',()=>{
//     alert("flower picture clicked");
// });
// document.getElementById('duck').addEventListener('click',()=>{
//     alert("duck picture clicked");
// },true);

// document.getElementById('food').addEventListener('click',(e)=>{
//     console.log(e);
//     console.log(e.target);
//     console.log(e.view.location);
    
// },true);


// document.getElementById('images').addEventListener('click',(e)=>{
//     console.log("clicked inside the ul");
    
// },false);

// document.getElementById('food').addEventListener('click',(e)=>{
//     console.log("owl clicked");

    
// },false)


// document.getElementById('google').addEventListener('click',(e)=>{
   
//     e.preventDefault();
//     e.stopPropagation();
//      console.log("google clicked");
// });



// const food = document.getElementById('food')
// food.addEventListener('click',()=>{
//     food.parentNode.removeChild(food);
// });



document.querySelector('#images').addEventListener('click',(e)=>{

   
    if(e.target.tagName ==='IMG'){
         let nodes = e.target.parentNode ; 
         nodes.remove();
    }

   
    

    
    
},false);