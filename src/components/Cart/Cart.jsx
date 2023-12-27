import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, addToCart, removeItem } = useContext(CartContext);
  console.log('cart', cart);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <>
          <h2>No hay productos en el carrito</h2>
          <Link to={'/'}>Volver a comprar</Link>
        </>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <button onClick={() => removeItem(item.id)}>
                Eliminar Producto
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
