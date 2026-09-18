import React from 'react';
import ProductsCard from '../components/ProductsCard';

const getProducts=async()=>{
    const res = await fetch ('http://localhost:5000/products')
    return res.json();
}

const ProductsPage = async () => {
    const products = await getProducts();
    console.log(products)
    return (
        <div>
            <h1>Welcome to product page {products.length}</h1>
            <div className='grid grid-cols-3 gap-4 border-gray-500 '>
                {
                products.map(product => <ProductsCard key={product.id} product={product}> </ProductsCard>)
            }
            </div>
        </div>
    );
};

export default ProductsPage;