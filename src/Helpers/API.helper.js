import axios from 'axios';
import { CategoriesString } from '../Constants/Categories';
import { BASE_URL } from '../env';


export const FilterHelper = async (category, priceRange) => {
    const [min, max] = priceRange;
    let url;
    if (category === CategoriesString.ALL) {
        url = BASE_URL + 'products/';
    } else {
        url = `${BASE_URL}products/category/${category}`
    }
    try {
        const response = await axios.get(url);
        return response.data.filter(product => product.price >= min && product.price <= max);;
    } catch (error) {
        throw new Error('Error fetching the data:', error);
    }
};

export const getAllProducts = async () => {
    let url = BASE_URL + 'products/';
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching the data:', error);
    }
}

export const getAllCategories = async () => {
    let url = BASE_URL + 'products/categories';
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching the Categories:', error);
    }
}

export const getProductById = async (id) => {
    let url = BASE_URL + `products/${id}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching the data:', error);
    }
}