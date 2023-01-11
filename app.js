const value=document.querySelector('#value');
//set initial count 
let count =0;

const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");  
console.log(decrease);
console.log(value);
if(decrease){
    decrease.addEventListener("click", ()=>{
        count-=1;
        value.textContent=count;
    });
}

if(reset){
    reset.addEventListener("click", ()=>{
        count=0;
        value.textContent=count;
    });

if(increase){
    increase.addEventListener("click", ()=>{
        count+=1;
        value.textContent=count;
    })
}

}