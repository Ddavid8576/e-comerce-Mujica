import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const selectedItem = products.find(product => product.id === parseInt(id));
    setItem(selectedItem);
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">{item.titulo}</h1>
      <div className="row">
        <div className="col-md-6">
          <img src={item.imagen} className="img-fluid" alt={item.titulo} />
        </div>
        <div className="col-md-6">
          <h2>{item.titulo}</h2>
          <p>{item.descripcion}</p>
          <p>Precio: ${item.precio}</p>
          <button className="btn btn-custom">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
