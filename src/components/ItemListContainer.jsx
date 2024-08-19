import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import '../App.css';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const itemsArray = [];
        querySnapshot.forEach((doc) => {
          itemsArray.push({ ...doc.data(), id: doc.id });
        });
        if (categoryId) {
          const filteredItems = itemsArray.filter(item => item.category === categoryId);
          setItems(filteredItems);
          setCategoryName(capitalizeFirstLetter(categoryId));
        } else {
          setItems(itemsArray);
          setCategoryName(greeting);
        }
      } catch (error) {
        console.error("Error fetching items: ", error);
      }
    };
    fetchData();
  }, [categoryId, greeting]);

  return (
<div className="container mt-5">
  <h1 className="text-center mb-5 categoria">{categoryName}</h1>
  <div className="row">
    {items.map(item => (
      <div className="col-md-3 mb-4" key={item.id}>
        <div className="card card-custom" data-aos="flip-up">
          <img src={item.image} className="card-img-top img-fluid card-img-custom" alt={item.title} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.category}</p>
            <p className="card-text">${item.price}</p>
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
