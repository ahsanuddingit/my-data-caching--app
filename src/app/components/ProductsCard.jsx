import React from 'react';

const ProductsCard = ({product}) => {
    const {id, name ,description, category, stock,price}= product;
    return (
        <div className="card bg-base-100  shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>{product.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{product.price}</button>
    </div>
  </div>
</div>
    );
};

export default ProductsCard;