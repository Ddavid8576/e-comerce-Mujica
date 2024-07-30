import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products.json';
import '../App.css';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const filteredItems = products.filter(item => item.categoria === categoryId);
      setItems(filteredItems);
    } else {
      setItems(products);
    }
  }, [categoryId]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">{categoryId ? `${categoryId}` : greeting}</h1>
      <div className="row">
        {items.map(item => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card card-custom" data-aos="flip-up">
              <img src={item.imagen} className="card-img-top" alt={item.titulo} />
              <div className="card-body">
                <h5 className="card-title">{item.titulo}</h5>
                <p className="card-text">{item.categoria}</p>
                <p className="card-text">${item.precio}</p>
                <Link to={`/item/${item.id}`} className="btn btn-custom">Ver Más</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
