import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [list, setList] = useState([]);
  const { categoryName } = useParams();

  if (categoryName) {
  }

  const getProducts = async () => {
    let url;
    if (categoryName) {
      url = `https://fakestoreapi.com/products/category/${categoryName}`;
    } else {
      url = `https://fakestoreapi.com/products`;
    }

    fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => setList(data));
  };

  useEffect(() => {
    getProducts();
  }, [categoryName]);

  // const [productList, setProductList] = useState([]); //El listado de productos se inicializa vacio. Por eso en consola me aparce un array vacio [].

  // useEffect(() => {
  //   getProducts //getProduct es la promesa que voy a manejarla en useEffect
  //     .then((response) => {
  //       setProductList(response);
  //     })
  //     .catch((error) => console.log(error));
  // });

  // const getProducts = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(data);
  //   }, 2000);
  // });

  return (
    <>
      <Link to="/cart">Carrito</Link>
      <ItemList lista={list} />
    </>
  );
};

export default ItemListContainer;
