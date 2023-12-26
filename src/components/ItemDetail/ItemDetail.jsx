import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  function onAdd(item) {
    addToCart(item, count);
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.price}</p>
      <ItemCount stock={5} count={count} setCount={setCount} />
      <button onClick={() => onAdd(item)}>Agregar al carrito</button>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ItemDetail;
