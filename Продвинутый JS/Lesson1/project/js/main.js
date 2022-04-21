const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
    {id: 5},
];

const getProductHTMLString = (title = 'Нет заголовка', price = 'Цена не указана') => {
    return `<div class="product-item" >
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
};

const renderProducts = (productList) => {
  for(var i = 0; i < productList.map((good) => getProductHTMLString(good.title, good.price)).length; i++) {
    document.querySelector('.products').innerHTML += productList.map((good) => getProductHTMLString(good.title, good.price))[i];
  }
}

// const renderProducts = (productList) => {
//   const list = productList.map((good) => getProductHTMLString(good.title, good.price));
//   for(var i = 0; i < list.length; i++) {
//     document.querySelector('.products').innerHTML += list[i];
//   }
// }


  /*
    ОТВЕТ 1:
    Сделал два вида решения, оставил тот вариант, который смог сократить в строковом количестве.
    ОТВЕТ 2:
    Запятая выводиться из за метода map как я понимаю, он собирает новый массив и при этом оставляет запятую. 
    я подумал что логичнее через цикл вывести все элементы, но не уверен что это правильно, почему то мне кажется,
    что есть более простой способ =) Я пробежался по другим методам массивов, но не нашел ни чего подходящего.
  */

renderProducts(products);
