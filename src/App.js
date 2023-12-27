import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import ItemDetailComponent from './pages/ItemDetailComponent/ItemDetailComponent';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="contact" element={<div>Contact</div>} />
            <Route path="details/:id" element={<ItemDetailComponent />} />
            <Route
              path="category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
