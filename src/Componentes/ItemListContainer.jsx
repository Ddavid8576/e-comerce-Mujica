import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ saludo }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}} className="container mt-5">
      <h2>{saludo}</h2>
    </div>
  );
};

export default ItemListContainer;
