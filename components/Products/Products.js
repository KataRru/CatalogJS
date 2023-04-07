class Products {

    render() {
        let htmlCatalog = '';
        CATALOG.forEach(({ id, name, price, img }) => {
            
            htmlCatalog += `
                <li class="products-items">
                    <span class="products-items__name">${name}</span>
                    <img class="products-items__img" src="${img}" />
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