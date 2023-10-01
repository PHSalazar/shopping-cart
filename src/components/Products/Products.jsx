import React, { useEffect, useState } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
    });
  }, []);


  return (
    <section className="products">
      {
        // products.map((product) => <p key={product.catalog_product_id}>{product.title}</p>)
        products.map((product) => <ProductCard key={product.catalog_product_id} data={product} />)
      }
    </section>
  );
}

export default Products;
