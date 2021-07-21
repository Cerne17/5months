function animatedBg(index){
    let rateOfChange = 2*index
    document.body.style.backgroundColor = `hsl(${ rateOfChange }, 75%, 25%)`
    let rateOfChange2 = rateOfChange+40;
    document.body.style.backgroundImage = `linear-gradient(316deg, hsl(${ rateOfChange }, 75%, 25%) 0%, hsl(${ rateOfChange2 }, 75%, 25%) 74%)`
}
let i =0;
setInterval(()=>{
    i++;
    animatedBg(i);
}, 100)

const submitBtnEl = document.querySelector("#submit");
const passwordBoxEl = document.querySelector("#password");
