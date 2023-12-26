import './Navbar.styles.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../img/LogoProcs.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav">
      <a className="nav--a" href="/">
        <img className="nav--logo" src={logo} alt="Logo" />
      </a>
      <ul className="nav--ul">
        <li className="nav--li">
          <a href="/">Productos</a>
        </li>
        <li className="nav--li">
          <NavLink to={'category/electronics'}>
            Electronicos
          </NavLink>
        </li>
        <li className="nav--li">
          <NavLink to={'category/jewelery'}>
            Jewelery
          </NavLink>
        </li>
        <li className="nav--li">
          <NavLink to={"category/men's clothing"}>
            Men s clothing
          </NavLink>
        </li>
        <li className="nav--li">
          <NavLink to={"category/women's clothing"}>
            Women s clothing
          </NavLink>
        </li>
        <li className="nav--li">
          <a href="/">Contacto</a>
        </li>
        <li className="nav--li">
          <a href="/">Registrate</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
