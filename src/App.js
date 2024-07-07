import './App.css';
import React from 'react';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo="¡Bienvenidos a nuestra tienda!" />
    </div>
  );
}

export default App;

