import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const { getTotalQuantity } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      <FaShoppingCart size={24} color="#fff" />
      {getTotalQuantity() > 0 && (
        <span className="badge badge-pill badge-light">{getTotalQuantity()}</span>
      )}
    </Link>
  );
};

export default CartWidget;
