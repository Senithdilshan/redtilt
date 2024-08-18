export const sortProducts = (products, type = null, order = 'asc') => {
    return products.sort((a, b) => {
        let valueA, valueB;

        if (type === 'title' || type === null) {
            valueA = a.title.toLowerCase();
            valueB = b.title.toLowerCase();
        } else if (type === 'price') {
            valueA = a.price;
            valueB = b.price;
        } else if (type === 'rate') {
            valueA = a.rating.rate;
            valueB = b.rating.rate;
        } else {
            throw new Error('Invalid sort type');
        }

        if (order === 'asc') {
            return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
        } else if (order === 'desc') {
            return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
        } else {
            throw new Error('Invalid sort order');
        }
    });
}