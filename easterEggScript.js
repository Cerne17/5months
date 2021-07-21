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
const passwordCheckText = document.querySelector('#passwordCheck');

function redirectPage(page){
    location.replace(`${ page }`)
}

passwordBoxEl.addEventListener('focus', ()=>{
    passwordCheckText.classList.remove('error');
})

submitBtnEl.addEventListener('click', ()=>{
    console.log('ok!');

    if (passwordBoxEl.value === '290121'){
        redirectPage('hornyDate.html');
    }else if (passwordBoxEl.value === 'I miss you'){
        redirectPage('romanticDate.html');
    }else{
        passwordCheckText.classList.add('error');
    }
})