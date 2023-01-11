const complement = (color) => {
    //extract RGB values
    let match = color.match(/\d+/g);
    let r = match[0];
    let g = match[1];
    let b = match[2];
    // invert the RGB values
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;
    // return the inverted RGB values
    return "rgb(" + r + ", " + g + ", " + b + ")";
}



const value=document.querySelector('#value');
//set initial count 
let count =0;

const btns= document.querySelectorAll(".btn");

const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");






console.log(decrease);
console.log(value);
console.log(btns);

btns.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener("click", (e)=>{
        const styles= e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('reset')){
            count=0;
        }
        
        if(count>=20){

            value.style.color='#fafa6e';

        }
        else if(count===19){
            value.style.color='#edf76f';

        }
        else if(count===18){
            value.style.color='#e0f470';
        }
        else if(count===17){
            value.style.color='#d4f171';

        }
        else if(count===16){
            value.style.color='#c8ed73';

        }
        else if(count===15){
            value.style.color='#bcea75';
        }
        else if(count===14){
            value.style.color='#b0e678';

        }
        else if(count===13){
            value.style.color='#a5e27a';

        }
        else if(count===12){
            value.style.color='#99de7c';
        }
        else if(count===11){
            value.style.color='#8eda7f';

        }
        else if(count===10){
            value.style.color='#8eda7f';

        }
        else if(count===9){
            value.style.color='#83d681';
        }
        else if(count===8){
            value.style.color='#79d283';

        }
        else if(count===7){
            value.style.color='#6ecd85';

        }
        else if(count===6){
            value.style.color='#64c987';
        }
        else if(count===5){
            value.style.color='#5ac489';

        }
        else if(count===4){
            value.style.color='#50bf8b';

        }
        else if(count===3){
            value.style.color='#46bb8c';
        }
        else if(count===2){
            value.style.color='#3cb68d';

        }
        else if(count===1){
            value.style.color='#32b18e';

        }
        else if(count===0){
            value.style.color='#28ac8f';
        }
        else if(count===-1){
            value.style.color='#1ea78f';

        }
        else if(count===-2){
            value.style.color='#12a28f';

        }
        else if(count===-3){
            value.style.color='#039d8f';
        }
        else if(count===-4){
            value.style.color='#00988e';

        }
        else if(count===-5){
            value.style.color='#00938d';

        }
        else if(count===-6){
            value.style.color='#008e8c';
        }

        else if(count===-7){
            value.style.color='#008e8c';
        }
        else if(count===-8){
            value.style.color='#00898a';

        }
        else if(count===-9){
            value.style.color='#008488';

        }
        else if(count===-10){
            value.style.color='#007e86';
        }
        else if(count===-11){
            value.style.color='#007983';

        }
        else if(count===-12){
            value.style.color='#057480';

        }
        else if(count===-13){
            value.style.color='#0e6f7d';
        }
        else if(count===-14){
            value.style.color='#156a79';

        }
        else if(count===-15){
            value.style.color='#1a6575';

        }
       else  if(count===-16){
            value.style.color='#1e6071';
        }
        else if(count===-17){
            value.style.color='#225b6c';

        }
        else if(count===-18){
            value.style.color='#255667';

        }
        else if(count===-19){
            value.style.color='#275163';
        }
        else if(count>-20){
            value.style.color='#294d5d';

        }
        value.textContent=count;
        let input=value.style.color;
        console.log("input : ", input);
        let output=complement(input);
        console.log("output : ", output);
        document.body.style.backgroundColor=output;

    })


});

// if(decrease){
//     decrease.addEventListener("click", ()=>{
//         count-=1;
//         value.textContent=count;
//     });
// }

// if(reset){
//     reset.addEventListener("click", ()=>{
//         count=0;
//         value.textContent=count;
//     });

// if(increase){
//     increase.addEventListener("click", ()=>{
//         count+=1;
//         value.textContent=count;
//     })
// }

// }