import React from 'react';

const AddItemButton = ({ onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>Add to Cart</button>
  );
};

export default AddItemButton;
