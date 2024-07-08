import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}} className="container mt-5">
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
