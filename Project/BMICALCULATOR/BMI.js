const form  = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    console.log(height);
    
    const weight = parseInt(document.querySelector('#weight').value);
    console.log(weight);
    
    const result = document.querySelector('#results');
    const guiding  =  document.querySelector('#guiding')
   

    if(height==='' || height<0 || isNaN(height)) { result.innerHTML = `Please give a valid height ${height}`;}
    else if(weight==='' || weight<0 || isNaN(weight)){ result.innerHTML = `Please give a valid weight ${weight}`;}
    else{
        result.innerHTML = ` <span>${weight/Math.pow(height,2)}</span> Kg/m2`;
    }
    const equals = weight/Math.pow(height,2);
    if(equals<18.6){
        guiding.innerHTML  = `Your BMI is showing  underweight`;
    }else if(equals>= 18.6 && equals<=24.9){
         guiding.innerHTML  = `Your BMI is showing normal`;
    }else if(equals>=24.9){
        guiding.innerHTML = `your BMI is showing Overweight`;
    }
   
})