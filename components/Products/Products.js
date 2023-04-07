class Products {

    render() {
        let htmlCatalog = '';
        CATALOG.forEach(({ id, name, price, img }) => {
            
            htmlCatalog += `
                <li class="products-items">
                    <span class="products-items__name">${name}</span>
                    <img class="products-items__img" src="${img}" />
                    <div class="rating" data-total-value="0">
                        <span class="rating__stars" data-item-value="5">★</span>
                        <span class="rating__stars" data-item-value="4">★</span>
                        <span class="rating__stars" data-item-value="3">★</span>
                        <span class="rating__stars" data-item-value="2">★</span>
                        <span class="rating__stars" data-item-value="1">★</span>
                    </div>
                    <span class="products-items__price">
                        ⚡ ${price.toLocaleString()} ГРН
                    </span>
                    <button class="products-items__btn">Добавить в корзину</button>
                </li>
            `;
        });

        const html = `
            <ul class="products-content">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();




// RATING STARS

const ratingItemsList = document.querySelectorAll('.rating__stars');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item => 
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    })
);
