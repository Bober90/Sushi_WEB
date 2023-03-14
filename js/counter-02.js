//добавляєм прослушка на все вікно
window.addEventListener('click', function(event){

    let counter;

//Провіряєм клик строго по конопкам Плюс або мінус
if(event.target.dataset.action==='plus'|| event.target.dataset.action==='minus'){

   // знаходимо відкритку лічильника
   const counterWrapper= event.target.closest('.counter-wrapper');
      
   //Знаходимо дів с чилом лічильника
   
     counter=counterWrapper.querySelector('[data-counter]');
}


//Провіряєм являється елемент, по якому було здійснено клік кнопкою Плюс

        if(event.target.dataset.action==='plus'){
       counter.innerText=++counter.innerText;
    };


//Провіряєм являється елемент, по якому було здійснено клік кнопкою Мінус
    if(event.target.dataset.action==='minus'){




        //провірка на товар  що знаходиться в корзині

   
       
        if(parseInt(counter.innerText)>1){
            counter.innerText=--counter.innerText;
            }else if(event.target.closest('.cart-wrapper')&& parseInt(counter.innerText)===1){
               console.log('IN CARD!!');
                event.target.closest('.cart-item').remove();

                toggleCartStatus();
                //Перерахунок загальної вартості корзини
                calcCartPriceAndDelivery();
            }
            }
    
      
       if(event.target.hasAttribute('data-action')&& event.target.closest('.cart-wrapper')){
        //Перерахунок загальної вартості товарів в корзині

        calcCartPriceAndDelivery();

       }
    

    
});