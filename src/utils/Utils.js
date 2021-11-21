const filterProducts = (products, searchText) => {
    return products.filter(product => {
        let str = `${product.title}`;
        return str.indexOf(searchText) >= 0;
    })
}

export { filterProducts };