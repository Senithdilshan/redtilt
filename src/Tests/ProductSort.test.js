import { dummyProducts } from "../Constants/mockdata";
import { sortProducts } from "../Util/ProductSort";

describe('sortProducts', () => {
    it('should sort products by title in ascending order by default', () => {
        const sortedProducts = sortProducts(dummyProducts);
        expect(sortedProducts[0].title).toBe("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
        expect(sortedProducts[sortedProducts.length - 1].title).toBe("Solid Gold Petite Micropave ");
    });

    it('should sort products by title in descending order', () => {
        const sortedProducts = sortProducts(dummyProducts, 'title', 'desc');
        expect(sortedProducts[0].title).toBe("Solid Gold Petite Micropave ");
        expect(sortedProducts[sortedProducts.length - 1].title).toBe("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
    });

    it('should sort products by price in ascending order', () => {
        const sortedProducts = sortProducts(dummyProducts, 'price', 'asc');
        expect(sortedProducts[0].price).toBe(15.99);
        expect(sortedProducts[sortedProducts.length - 1].price).toBe(695);
    });

    it('should sort products by price in descending order', () => {
        const sortedProducts = sortProducts(dummyProducts, 'price', 'desc');
        expect(sortedProducts[0].price).toBe(695);
        expect(sortedProducts[sortedProducts.length - 1].price).toBe(15.99);
    });

    it('should sort products by rating in ascending order', () => {
        const sortedProducts = sortProducts(dummyProducts, 'rate', 'asc');
        expect(sortedProducts[0].rating.rate).toBe(2.1);
        expect(sortedProducts[sortedProducts.length - 1].rating.rate).toBe(4.7);
    });

    it('should sort products by rating in descending order', () => {
        const sortedProducts = sortProducts(dummyProducts, 'rate', 'desc');
        expect(sortedProducts[0].rating.rate).toBe(4.7);
        expect(sortedProducts[sortedProducts.length - 1].rating.rate).toBe(2.1);
    });

    it('should throw an error for invalid sort type', () => {
        expect(() => sortProducts(dummyProducts, 'invalidType')).toThrow('Invalid sort type');
    });

    it('should throw an error for invalid sort order', () => {
        expect(() => sortProducts(dummyProducts, 'title', 'invalidOrder')).toThrow('Invalid sort order');
    });
});