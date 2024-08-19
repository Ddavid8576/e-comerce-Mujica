import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebaseConfig'; 
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from '../contexts/CartContext'; 

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, 'items', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setItem(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching item: ", error);
      }
    };
    fetchItem();
  }, [id]);

  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + amount;
      return newQuantity > 0 && newQuantity <= item.stock ? newQuantity : prevQuantity;
    });
  };

  const handleAddToCart = () => {
    if (item) {
      addToCart(item, quantity);
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
<div className="container mt-5 item-detail-container">
<h1 className="text-center item-detail-title">{item.title}</h1>
  <div className="row item-detail-card">
    <div className="col-md-6 item-image">
      <img src={item.image} className="img-fluid" alt={item.title} />
    </div>
    <div className="col-md-6 item-details">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <div className="quantity-selector">
        <button className="btn btn-custom" onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button className="btn btn-custom" onClick={() => handleQuantityChange(1)}>+</button>
      </div>
      <button className="btn btn-custom" onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  </div>
</div>
  );
};

export default ItemDetailContainer;
