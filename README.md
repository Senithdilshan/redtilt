# React.js E-Commerce Product Listing

## Overview

This project is a responsive e-commerce product listing page built with React.js. The application fetches product data from the FakeStoreAPI and displays it in a grid format. Users can search, filter, and sort the products, making it easy to browse through available items.

## Features

- **Product Listing**: Fetches and displays products from the FakeStoreAPI with essential details like image, name, price, and a brief description.
- **Search Functionality**: Allows users to search for products by name with real-time updates.
- **Filtering**: Users can filter products based on categories, price range, and availability.
- **Sorting**: Products can be sorted by price (ascending/descending), name, and rating.
- **Responsive Design**: The product listing page is fully responsive and works well on mobile, tablet, and desktop devices.
- **State Management**: Managed with React's built-in state and hooks (`useState`, `useEffect, contextAPI`).

## Optional Features

- **Pagination**: Implements pagination for better navigation through products.
- **View Toggle**: Allows users to switch between grid and list views.
- **Dark/Light Mode**: Toggle between dark and light themes for better user experience.
- **Unit Testing**: Basic unit tests for components using Jest and React Testing Library.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:

   git clone https://github.com/yourusername/react-ecommerce-product-listing.git
   cd react-ecommerce-product-listing

2. **Install dependencies**:

   npm install

   # or

   yarn install

3. **Start the development server**:

   npm start

   # or

   yarn start

4. **Build the project**:

   npm run build

   # or

   yarn build

### API Integration

# This project uses the [FakeStoreAPI](https://fakestoreapi.com) to fetch product data.

- **Get All Products**: `https://fakestoreapi.com/products`
- **Get Products by Category**: `https://fakestoreapi.com/products/category/{category}`
- **Get Single Product**: `https://fakestoreapi.com/products/{id}`
- **Get All Categories**: `https://fakestoreapi.com/products/categories`
