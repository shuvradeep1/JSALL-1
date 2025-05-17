const randomColor  = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0;i <6;i++){
        color +=hex[Math.floor(Math.random()*16)];
    }
    return color;
}


function changeBackgroundColor() {
    
    document.body.style.backgroundColor = randomColor();
}




const start = document.querySelector('#start');
const stop =document.querySelector('#stop');

let interval;

start.addEventListener('click',()=>{
    if(!interval){
        interval = setInterval(changeBackgroundColor,1000);
    }

});

stop.addEventListener('click',()=>{
    clearInterval(interval);
    interval = null;
})
