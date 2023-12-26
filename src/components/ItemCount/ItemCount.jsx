import './ItemCount.style.css';

const ItemCount = ({ setCount, count, stock }) => {
  const suma = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const resta = () => {
    count === 0 ? alert('No hay mas stock') : setCount(count - 1);
  };

  return (
    <div className="Item">
      <div className="Item__etiquetas">
        <p>Cantidad {count}</p>
        <button onClick={resta}>-</button>
        <button onClick={suma}>+</button>
      </div>
      {/* <p>{stockProducto} disponibles</p>
      <button onClick={comprar}>Comprar</button> */}
    </div>
  );
};

export default ItemCount;
