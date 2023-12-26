import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      alert('ya esta en el carrito');
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    console.log('cart', [...cart, { ...item, quantity }]);
  }; //aca en un carrito profesional deberia agregar la cantidad si es valido en lugar del alert.

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
    // El children engloba todo lo que es la App, y lo tengo que importar y usar en app
  );
};
