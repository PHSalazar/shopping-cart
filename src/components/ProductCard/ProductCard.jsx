import React from 'react';
import propTypes from 'prop-types';
import {BsFillCartPlusFill} from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';


function ProductCard({data}) {

  const {title, thumbnail, price} = data;

  return (
    <article className="product__card">

      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="Produto" className="card__thumb" />

      <div className="product__infos">
        <p className="product__price">{formatCurrency(price, 'BRL')}</p>
        <p className="product__title">{title}</p>
      </div>

      <div className="button__back">
        <button className="button__add-cart">
          <BsFillCartPlusFill />
        </button>
      </div>
    </article>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({})
}.isRequired;
