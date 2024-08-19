import React, { useState } from 'react';

const ItemQuantitySelector = ({ stock, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    const newQuantity = Number(e.target.value);

    if (newQuantity >= 1 && newQuantity <= stock) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleIncrease = () => {
    if (quantity < stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <button 
        className="btn btn-secondary" 
        onClick={handleDecrease}
      >
        -
      </button>
      <input 
        type="number" 
        className="form-control mx-2" 
        min="1" 
        max={stock} 
        value={quantity} 
        onChange={handleChange} 
      />
      <button 
        className="btn btn-secondary" 
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
