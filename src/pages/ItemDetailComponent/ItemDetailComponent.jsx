import { useEffect, useState } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailComponent = () => {
  const { id } = useParams(); //Tomo el id del producto de la data
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((producto) => {
        setProduct(producto);
      });
  }, [id]);

  //Obtener un solo producto con un mockData local:

  // const obtenerProducto = new Promise((resolve, reject) => {
  //   if (data) {
  //     resolve(data);
  //   } else {
  //     reject(console.log('Los datos no estan'));
  //   }
  // });

  // useEffect(() => {
  //   obtenerProducto.then((response) => {
  //     const foundProduct = response.find( (Puedo usar un filter tambien)
  //       (item) => item.id === '1'
  //     ); // Use find with item instead of data
  //     setProduct(foundProduct); // Set state with specific product
  //   });
  // });
  return (
    <div>{product && <ItemDetail item={product} />}</div>
  );
};

export default ItemDetailComponent;

//Asi esta mal:
//   obtenerProducto.then((response) => {
//     response.find((data) => data.id === '1');
//   });
//   setItemguardado(data);
//   console.log(data);
// });

//Otra forma de hacerlo con el useEffect englobando todo, la promesa y el then/catch:
// useEffect(() => {
//   const obtenerProducto = new Promise(
//     (resolve, reject) => {
//       if (data) {
//         resolve(data);
//       } else {
//         reject(console.log('Los datos no estan'));
//       }
//     }
//   );

//   obtenerProducto.then((response) => {
//     const foundProduct = response.find(
//       (item) => item.id === '1'
//     ); // Use find with item instead of data
//     setProduct(foundProduct); // Set state with specific product
//   });
// }, []);
