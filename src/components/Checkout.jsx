import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const Checkout = () => {
  const { cart = [], getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    confirmEmail: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email !== formData.confirmEmail) {
      alert('Emails do not match');
      return;
    }
    
    try {
      const docRef = await addDoc(collection(db, 'orders'), {
        buyer: formData,
        items: cart,
        total: getTotalPrice()
      });
      alert(`Order placed successfully. Your order ID is ${docRef.id}`);
      
      
      clearCart();
      setFormData({
        name: '',
        surname: '',
        phone: '',
        email: '',
        confirmEmail: ''
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className="container mt-5 Checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            className="form-control"
            value={formData.surname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmEmail">Confirm Email</label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            className="form-control"
            value={formData.confirmEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Place Order</button>
      </form>
      <div className="mt-5">
        <h3>Order Summary</h3>
        <ul>
          {cart.map(item => (
            <li key={item.id}>{item.title} - {item.quantity} x ${item.price}</li>
          ))}
        </ul>
        <p><strong>Total: ${getTotalPrice()}</strong></p> 
      </div>
    </div>
  );
};

export default Checkout;
