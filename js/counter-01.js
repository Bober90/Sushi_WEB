const btnMinus=document.querySelector('[data-action="minus"]');
const btnPlus=document.querySelector('[data-action="plus"]');
const counter=document.querySelector('[data-counter]')


//Відслідковуєм клік на кнопці btnMinus
btnMinus.addEventListener('click',function(){

    //провіряєм щоб лічильник був більше 1
    if(parseInt(counter.innerText)>1){
        counter.innerText=--counter.innerText;
    }
    
});

//Відслідковуєм клік на кнопці btnPlus
btnPlus.addEventListener('click',function(){
    counter.innerText=++counter.innerText;
});