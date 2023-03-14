/*function calcCartPrice(){
   const cartItems= document.querySelectorAll('.cart-item');

    let totalPrice=0;
 

cartItems.forEach(function(item){
const amountE1=item.querySelector('[data-counter]');
const priceEl=item.querySelector('.price__currency');
const currentPrice=parseInt(amountE1.innerText)* parseInt(priceEl.innerText);

totalPrice+=currentPrice;

})
console.log(totalPrice);
}
*/
function calcCartPriceAndDelivery(){
    const cartWrapper= document.querySelector('.cart-wrapper');
    const priceElements=cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl=document.querySelector('.total-price');
    const deliveryCost=document.querySelector('.delivery-cost');
    const cartDelivery=document.querySelector('[data-cart-delivery]');



     let priceTotal=0;
  
 
 priceElements.forEach(function(item){
 const amountE1=item.closest('.cart-item').querySelector('[data-counter]');

 priceTotal+=parseInt(item.innerText)* parseInt(amountE1.innerText);

 
 })
 //Відображаєм ціну на сторінку
 totalPriceEl.innerText=priceTotal;

 //Скриваєм +показуєм блок з вартістю доставки
if(priceTotal>0){
    cartDelivery.classList.remove('none');
}


//вказуємо вартість доставки
 if(priceTotal>=600){
    deliveryCost.classList.add('free');
    deliveryCost.innerText='безплатно';
 }else{
    deliveryCost.classList.remove('free');
    deliveryCost.innerText='250$';
 }
 }