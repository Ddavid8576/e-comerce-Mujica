import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Recupera los items del carrito desde el localStorage, si existen
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    // Guarda el carrito en el localStorage cuando cartItems cambie
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item, quantity) => {
    setCartItems(prevCartItems => {
      const existingItemIndex = prevCartItems.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        // Actualiza la cantidad del item existente
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex].quantity += quantity;
        return updatedCartItems;
      } else {
        // Agrega un nuevo item al carrito
        return [...prevCartItems, { ...item, quantity }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getTotalPrice, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
