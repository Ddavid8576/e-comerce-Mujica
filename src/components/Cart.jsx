import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalPrice, getTotalQuantity, removeFromCart, clearCart } = useCart();

  return (<div className="container mt-5">
  <h1 className="text-center mb-5 carrito" >Tu Carrito</h1>
  {cartItems.length === 0 ? (
    <p className="text-center carrito">No hay productos en el carrito.</p>
  ) : (
    <div>
      {cartItems.map(item => (
        <div className="cart-item d-flex align-items-center mb-4" key={item.id}>
          <img src={item.image} alt={item.title} className="cart-item-img" />
          <div className="cart-item-details ms-3">
            <h4 className="cart-item-title">{item.title}</h4>
            <p className="cart-item-quantity">Unidades: {item.quantity}</p>
            <p className="cart-item-price">Precio Total: ${item.price * item.quantity}</p>
            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-between mt-4 cart-summary">
        <h3>Total de productos: {getTotalQuantity()}</h3>
        <h3>Total a pagar: ${getTotalPrice()}</h3>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-danger" onClick={clearCart}>Vaciar Carrito</button>
        <Link to="/checkout">
          <button className="btn btn-custom">Finalizar Compra</button>
        </Link>
      </div>
    </div>
  )}
</div>
);
};

export default Cart;
