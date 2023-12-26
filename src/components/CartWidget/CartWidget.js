import './CartWidget.style.css';
import carrito from '../../img/Carrito.png';

const CartWidget = () => {
  return (
    <div className="carrito">
      <a href="/">
        <img src={carrito} alt="Carrito" />
      </a>
      <p style={{ color: 'white' }}>0</p>
    </div>
  );
};

export default CartWidget;
