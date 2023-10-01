import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';

import './CartButton.css';

function CartButton(){
  return (
    <button type="button" className="cartbutton__button">
      <AiOutlineShoppingCart />
      <span className="cart__number">1</span>
    </button>
  );
}

export default CartButton;
