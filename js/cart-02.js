//Div в середені корзини в яку добавляєм товари
const cartWrapper=document.querySelector('.cart-wrapper');

window.addEventListener('click', function(event){
    //Перевірка що клік був зроблений  на кнопке Добавити в корзину
    if(event.target.hasAttribute('data-cart')){
   // знаходимо карточку з товаром , всередені якого був здійснений клик
   const card=event.target.closest('.card');
   
   //збираємо дані з цього товару і записуємо їх в єдиний обєкт productInfo

   const productInfo={
    id:card.dataset.id,
    imgSrc:card.querySelector('.product-img').getAttribute('src'),
    title:card.querySelector('.item-title').innerText,
    itemsInBox: card.querySelector('[data-items-in-box]').innerText,
    weight:card.querySelector('.price__weight').innerText,
    price:card.querySelector('.price__currency').innerText,
    counter:card.querySelector('[data-counter]').innerText,

   };
//Провірити чи є такий ж товар в корзині

const itemInCart=cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);


if(itemInCart){
    const counterElement=itemInCart.querySelector('[data-counter]');
    counterElement.innerText=parseInt(counterElement.innerText)+parseInt(productInfo.counter);
}else{

//ЗІбрані дані підставим в шаблон для товарів в корзині

const cartItemHTML=`<div class="cart-item" data-id="${productInfo.id}">
<div class="cart-item__top">
    <div class="cart-item__img">
        <img src="${productInfo.imgSrc}" alt="${productInfo.imgSrc}">
    </div>
    <div class="cart-item__desc">
        <div class="cart-item__title">${productInfo.title}</div>
        <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight} </div>

        <!-- cart-item__details -->
        <div class="cart-item__details">

            <div class="items items--small counter-wrapper">
                <div class="items__control" data-action="minus">-</div>
                <div class="items__current" data-counter="">${productInfo.counter}</div>
                <div class="items__control" data-action="plus">+</div>
            </div>

            <div class="price">
                <div class="price__currency">${productInfo.price}</div>
            </div>

        </div>
        <!-- // cart-item__details -->

    </div>
</div>
</div>`;
//відображаєм товар в корзині

cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
}

//Скидуєм лічильник добавленого товару на 1!
card.querySelector('[data-counter]').innerText='1';

//Відображення статусу корзини  Пуста /Повна
toggleCartStatus();


calcCartPriceAndDelivery();
    }
});